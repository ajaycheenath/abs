import React, { Component } from 'react';
import searchStyle from "../css/search.css";
import SearchOptions from "./SearchOptions";
import Head from "./Head";
import CardContent from "../uic/CardContent";
import Card from "./Card";
class Search extends Component {
  componentWillMount () {
    this.setState({showSearch: false});
  }
  showSearchOptions = () => {
    this.setState({showSearch: true});
  }
  search (filter) {
    const getURL = "http://bestdoctorz.com:8080/api/doctor/search?city="+filter.cityName+"&specialization="+filter.speciality;
    debugger;
    fetch(getURL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
})
  }
  showSearchResults() {
    return (
      <div>
      <Card>
          <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
          <CardContent/>
      </Card>
      <Card>
          <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
          <CardContent/>
      </Card>
      <Card>
          <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
          <CardContent/>
      </Card>
      <Card>
          <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
          <CardContent/>
      </Card>
      <Card>
          <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
          <CardContent/>
      </Card>
      <Card>
          <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
          <CardContent/>
      </Card>
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
          {this.state.showSearch && <SearchOptions search={this.search}/>}
          {this.showSearchResults()}
        </div>
    );
  }
}

export default Search;
