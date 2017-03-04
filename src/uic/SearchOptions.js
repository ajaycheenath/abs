import React, { Component } from 'react';
import searchStyle from "../css/search.css";
import RightDrawer from "./RightDrawer";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Button from "./Button";
import ListBox from "./ListBox";
import { connect } from "react-redux";
import { getCountries, getStates, getCities, getSpecializations } from "../actions/doctorActions";

function mapStateToProps(state) {
  console.log("SearchOptions countries:", state.doctorsearch.countries);
  return {
    countries: state.doctorsearch.countries,
    states: state.doctorsearch.states,
    cities: state.doctorsearch.cities,
    specializations : state.doctorsearch.specializations
  };
}

class SearchOptions extends Component {

  componentWillMount() {
    this.setState({showDrawer: true, filter: {}});
    console.log("-------- SearchOptions getCountries:", this.state);
    this.props.dispatch(getCountries());
  }

  handleFieldChange (event, name) {
    let {value} = event.target;
        value = value !== ""
            ? value
            : null;
    this.state.filter[name] = value;
    this.setState(this.state);
    if(value != "") {
      switch (name) {
        case 'countryName': {
            this.props.dispatch(getStates(value));
            break;
        }
        case 'stateName': {
            this.props.dispatch(getCities(value));
            break;
        }
        case 'cityName': {
            this.props.dispatch(getSpecializations(value));
            break;
        }
        default:
          console.log("Wrong selection - ", name);
      }
    }
  }
  showCountrySelection () {
    return (
      <ListBox label="Choose your Country" onChange={(event) => this.handleFieldChange(event, "countryName")} list={this.props.countries}/>
    );
  }

  showStateSelection = () =>  {
    return (
      <ListBox label="Choose your State" onChange={(event) => this.handleFieldChange(event, "stateName")} list={this.props.states}/>
    );
  }


  showCitySelection () {
    return (
      <ListBox label="Choose your City" onChange={(event) => this.handleFieldChange(event, "cityName")} list={this.props.cities}/>
    );
  }

  showSpecialitySelection () {
    return (
      <ListBox label="Choose Doctor Speciality" onChange={(event) => this.handleFieldChange(event, "speciality")} list={this.props.specializations}/>
    );
  }

  onSubmit () {
      console.log(this.state);
      const filter = this.state.filter;
      this.props.showDrawer(false);
      //this.setState({showDrawer: false});
      this.props.search(filter);
  }

  render () {
    return (
        <RightDrawer showDrawer={this.props.showDrawer}>
          <Header >Find Your Doctor</Header>
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

const SearchOptionsConnect = connect(
  mapStateToProps
)(SearchOptions)

export default SearchOptionsConnect;
