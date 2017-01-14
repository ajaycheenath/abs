import React, { Component } from 'react';
import searchStyle from "../css/search.css";
import SearchOptions from "./SearchOptions";
import Head from "./Head";
import CardContent from "../uic/CardContent";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchDoctors } from "../actions/doctorActions";


function mapStateToProps(state) {
  console.log(">?>>", state.doctors.doctors);
  return {doctors: state.doctors.doctors};
}
class Search extends Component {
  componentWillMount () {
    this.props.dispatch(fetchDoctors());
    this.setState({showSearch: false});
  }
  showSearchOptions = () => {
    this.setState({showSearch: true});
  }
  search (filter) {

  }
  showCard (doctor, key) {
    return (
      <Card key={key}>
          <Head name={doctor.DOCTORNAME}
            speciality={doctor.SPECIALIZATION}
            RATING={doctor.RATING} picture={doctor.IMAGE}
            />
          <CardContent clinicName={doctor.CLINIC_NAME} address={doctor.ADDRESS} district={doctor.DISTRICT} contact={doctor.PHONE}/>
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
    console.log("{{{{{}}}}}",this.props);
    return (
        <div className={searchStyle.searchBox}>
          <div className={searchStyle.searchArea}>
            <input type="text" className={searchStyle.searchText} placeholder="Find your doctor" onClick={this.showSearchOptions}/>
            <input type="button" value="Search" className={searchStyle.searchButton}/>
          </div>
          {this.state.showSearch && <SearchOptions search={this.search}/>}
          {this.showSearchResults()}
        </div>
    );
  }
}

const SearchConnect = connect(
  mapStateToProps
)(Search)

export default SearchConnect;
