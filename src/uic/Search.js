import React, { Component } from 'react';
import searchStyle from "../css/search.css";
import SearchOptions from "./SearchOptions";
import Head from "./Head";
import CardContent from "../uic/CardContent";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchDoctors, showSearchDrawer } from "../actions/doctorActions";


function mapStateToProps(state) {
  console.log(">?>>", state.doctorsearch);
  return {doctors: state.doctors.doctors, showSearch: state.doctorsearch.showSearch};
}
class Search extends Component {
  componentWillMount () {
    this.props.dispatch(fetchDoctors());
    this.props.dispatch(showSearchDrawer(false));
  }
  showSearchOptions = () => {
    this.props.dispatch(showSearchDrawer(true));
  }

  showDrawer = (flag) => {
    this.props.dispatch(showSearchDrawer(flag));
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    if(nextProps.showSearch) {
      this.showDrawer(true);
    }
  }

  search = (filter) => {
    console.log(">>>filter", filter);
    this.props.dispatch(fetchDoctors(filter.cityName, filter.speciality));
  }
  showCard (doctor, key) {
    return (
      <Card key={key}>
          <Head name={doctor.DOCTORNAME}
            speciality={doctor.SPECIALIZATION}
            rating={doctor.RATING} picture={doctor.IMAGE}
            id={doctor.ID}
            />
          <CardContent id={doctor.id} clinicName={doctor.CLINIC_NAME} address={doctor.ADDRESS} district={doctor.DISTRICT} contact={doctor.PHONE}/>
      </Card>
    );
  }
  showSearchResults() {
    return (
      <div>
        {
          this.props.doctors && this.props.doctors.map((doctor, key) => {
            return this.showCard(doctor, key);
          })
        }
      </div>
    );
  }
  render () {
    return (
        <div className={searchStyle.searchBox}>
          <div className={searchStyle.searchArea}>
            <input type="text" className={searchStyle.searchText} placeholder="Find your doctor" onClick={this.showSearchOptions}/>
            <input type="button" value="Search" className={searchStyle.searchButton}/>
          </div>
          {this.props.showSearch && <SearchOptions search={this.search} showDrawer={this.showDrawer}/>}
          {this.showSearchResults()}
        </div>
    );
  }
}

const SearchConnect = connect(
  mapStateToProps
)(Search)

export default SearchConnect;
