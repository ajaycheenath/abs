import axios from "axios";
import {baseApiUrl} from "../config/Config";
export function fetchDoctors(city, speciality) {
  let url = baseApiUrl + "/search/doctor";
  if(city && speciality) {
    url += "?city="+city+"&specialization="+speciality
  }
  console.log("URL ",url);
  return {
    type: "FETCH_DOCTORS",
    payload: axios.get(url)
  }
}


export function getDoctor(id) {
  return {
    type: "FETCH_DOCTOR",
    payload: axios.get(baseApiUrl + "/doctor/"+id)
  }
}

export function getDoctorData(id) {
  return {
    type: "FETCH_DOCTORDATA",
    payload: axios.get(baseApiUrl + "/docdata/"+id+"/0")
  }
}
export function getReviews(id, type) {
  return {
    type: "FETCH_REVIEWS",
    payload: axios.get(baseApiUrl + "/comments/"+id+"/"+type)
  }
}
export function getCountries() {
  return {
    type: "FETCH_COUNTRIES",
    payload: axios.get(baseApiUrl + "/search/countries")
  }
}

export function getStates(countryName) {
  return {
    type: "FETCH_STATES",
    payload: axios.get(baseApiUrl + "/search/states/"+countryName)
  }
}

export function getCities(stateName) {
  return {
    type: "FETCH_CITIES",
    payload: axios.get(baseApiUrl + "/search/cities/"+stateName)
  }
}

export function getSpecializations(cityName) {
  return {
    type: "FETCH_SPECILIZATIONS",
    payload: axios.get(baseApiUrl + "/search/specializations/"+cityName)
  }
}

export function showSearchDrawer(flag) {
  return {
    type: "SHOW_DRAWER",
    payload: flag
  }
}
