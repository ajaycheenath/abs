import React, { Component } from 'react';
import searchStyle from "../css/search.css";
import RightDrawer from "./RightDrawer";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Button from "./Button";
import ListBox from "./ListBox";
class Search extends Component {
  componentWillMount() {
    this.setState({showDrawer: true, filter: {}});
  }

  handleFieldChange (event, name) {
    let {value} = event.target;
        value = value !== ""
            ? value
            : null;
    this.state.filter[name] = value;
    this.setState(this.state);
  }
  showCountrySelection () {
    return (
      <ListBox label="Choose your Country" onChange={(event) => this.handleFieldChange(event, "countryName")} list={[{name:"India", value:"India"}, {name: "US", value: "US"}]}/>
    );
  }

  showStateSelection = () =>  {
    return (
      <ListBox label="Choose your State" onChange={(event) => this.handleFieldChange(event, "stateName")} list={[{name:"Kerala", value:"Kerala"}, {name: "Karnataka", value: "Karnataka"}]}/>
    );
  }


  showCitySelection () {
    return (
      <ListBox label="Choose your City" onChange={(event) => this.handleFieldChange(event, "cityName")} list={[{name:"Bangalore", value:"Bangalore"}, {name: "Thrissur", value: "Thrissur"}]}/>
    );
  }

  showSpecialitySelection () {
    return (
      <ListBox label="Choose Doctor Speciality" onChange={(event) => this.handleFieldChange(event, "speciality")} list={[{name:"Pediatrician", value:"Pediatrician"}, {name: "ENT", value: "ENT"}]}/>
    );
  }

  onSubmit () {
      console.log(this.state);
      const filter = this.state.filter;
      this.setState({showDrawer: false});
      this.props.search(filter);
  }

  render () {
    if(!this.state.showDrawer) {
      return false;
    }
    return (
        <RightDrawer>
          <Header>Find Your Doctor</Header>
          <Content>
            {this.showCountrySelection()}
            {this.state.filter.countryName && this.showStateSelection()}
            {this.state.filter.stateName && this.showCitySelection()}
            {this.state.filter.cityName && this.showSpecialitySelection()}
          </Content>
          <Footer><Button name="Search" styleClass="floatRight" onClick={() => this.onSubmit()}/></Footer>
        </RightDrawer>
    );
  }
}

export default Search;
