import React, { Component } from 'react';
import searchStyle from "../css/search.css";
import SearchOptions from "./SearchOptions";
import Head from "./Head";
import CardContent from "../uic/CardContent";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchDoctors, showSearchDrawer } from "../actions/doctorActions";
import YouTube from "react-youtube";
import { log } from '../config/Utils';


function mapStateToProps(state) {
  //console.log(">?>>", state.doctorsearch);
  return {doctors: state.doctors.doctors, showSearch: state.doctorsearch.showSearch};
}
class Search extends Component {
  getOpts ()  {
    return {
      height: '390',
      width: window.innerWidth > 600 ? '593' : window.innerWidth - 17,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        showinfo: 0,
        controls: 0,
        rel: 0
      }
    }
  };
  componentWillMount () {
    this.setState({showVideo: false});
    this.props.dispatch(fetchDoctors());
    this.props.dispatch(showSearchDrawer(false));
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({showVideo: true})} , 2000);
  }
  showSearchOptions = () => {
    this.props.dispatch(showSearchDrawer(true));
  }

  showDrawer = (flag) => {
    this.props.dispatch(showSearchDrawer(flag));
  }

  componentWillReceiveProps (nextProps) {
    //console.log(nextProps);
    if(nextProps.showSearch) {
      this.showDrawer(true);
    }
  }

  search = (filter) => {
    this.setState({showVideo: false});
    this.props.dispatch(fetchDoctors(filter.cityName, filter.speciality));
    var filterString = JSON.stringify(filter);
    log("User Searched for "+filterString);
    localStorage.setItem("SearchKey",filterString);
  }
  showCard (doctor, key) {
    return (
      <Card key={key} id={doctor.ID} name="guideme-doc-card">
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
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render () {
    const attributes = {'guideme': 'search'}
    return (
        <div className={searchStyle.searchBox} name="guideme-home">
          <div className={searchStyle.searchArea}>
            <input type="text" className={searchStyle.searchText} name="guideme-search" placeholder="Find your doctor" onClick={this.showSearchOptions}/>
            <input type="button" value="Search" className={searchStyle.searchButton}/>
          </div>
          {this.state.showVideo &&
          <div className={searchStyle.video}>
            <YouTube
            videoId="D7AzejXrFCc"
            opts={this.getOpts()}
            />
          </div>
          }
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
