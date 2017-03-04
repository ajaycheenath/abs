import React, { Component } from 'react';
import Menu from "./Menu";
import guideMeStyle from "../css/guideMe.css";
import { log } from "../config/Utils";

class GuideMe extends Component {
  getStyle(poisition) {
    switch (poisition) {
      case 'top': {
          return guideMeStyle.guideTop;
      }
      case 'left': {
          return guideMeStyle.guideLeft;
      }
      default: {
        return guideMeStyle.guideTop;
      }
    }
    return guideMeStyle.guideTop;
  }
  getSteps() {
    return [{
      position: "top",
      text: "You can search for best doctors here",
      element: "guideme-search"
    },{
      position: "top",
      text: "If you are a doctor, register here. If you know any good doctor, recommend and help others!",
      element: "guideme-register"
    },{
      position: "top",
      text: "Click on the Doctor Card to view doctor rating, reviews, take appointment, find location and many more..",
      element: "guideme-doc-card"
    },{
      position: "left",
      text: "Share your love and help others!!",
      element: "guideme-social"
    }
  ];
  }
  getPositionStyle(step) {
    const element = document.getElementsByName(step.element)[0];
    const guideme = document.getElementsByName("guideme")[0];
    var guidemeDetails = guideme.getBoundingClientRect();
    var docEl = document.documentElement;
    var rect = element.getBoundingClientRect();
    let rectTop = 0, rectLeft=0;
    if(step.position == "top") {
       let center = rect.width / 2;
       rectTop = rect.bottom + 10 ;
       rectLeft = rect.left + center - (guidemeDetails.width / 2);
    } else if(step.position == "left") {
      let height = (rect.bottom - rect.top) / 2;
      rectTop = rect.top + height - (guidemeDetails.height / 2);
      rectLeft = rect.right + 10 ;
    }
    const style = {
      top: rectTop+"px",
      left: rectLeft+"px"
    }
    return style;
  }
  changePosition = () => {
    //console.log("scroll.....");
    const step = this.state.currentStep;
    const style = this.getPositionStyle(step);
    //console.log(">>>>>>",style);
    this.setState({style: style});
  };
  componentWillMount () {

    const stepIndex = 0;
    const step = this.getSteps()[stepIndex];
    this.setState({show: true, stepIndex: stepIndex, style: {}, steps: this.getSteps(), currentStep: step, lastStep: false});
    window.addEventListener('scroll',this.changePosition,false);
    window.addEventListener('onresize',this.changePosition,false);
  }
  componentDidMount () {
    const step = this.state.steps[this.state.stepIndex];
    const style = this.getPositionStyle(step);
    //console.log(">>>>>>",style);
    this.setState({style: style});
  }
  nextStep = () => {

    if(this.state.lastStep) {
      this.setState({show: false});
      window.removeEventListener('scroll',this.changePosition,false);
      window.removeEventListener('onresize',this.changePosition,false);
      if(this.props.onFinish) {
        this.props.onFinish();
      }
    } else {
      let nextStepIndex = ++this.state.stepIndex;
      let step = this.getSteps()[nextStepIndex];
      log("Guideme - "+step.text);
      const style = this.getPositionStyle(step);
      const element = document.getElementsByName(step.element)[0];
      element.scrollIntoView();
      const lastStep = (this.state.steps.length - 1 == this.state.stepIndex);
      this.setState({stepIndex: nextStepIndex, style: style, steps: this.getSteps(), currentStep: step, lastStep: lastStep});
    }
  }
  skip = () => {
    log("Guideme - User Skipped");
    this.setState({show: false});
  }
  render() {
    const step = this.state.steps[this.state.stepIndex];
    const buttonText = this.state.lastStep ? "Finish" : "Next";
    //console.log("step.position>>>",step.position, step);
    if(!this.state.show) {
      return false;
    }
    return (
        <div className={this.getStyle(step.position)} style={this.state.style} key={this.state.stepIndex} name="guideme">
          <div className={guideMeStyle.content}>{step.text}</div>
          <div className={guideMeStyle.skip} onClick={this.skip}>Skip</div>
          {
            <div className={guideMeStyle.next} onClick={this.nextStep}>{buttonText}</div>
          }
        </div>
    );
  }
}

export default GuideMe;
