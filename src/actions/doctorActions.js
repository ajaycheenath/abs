import axios from "axios";
import {baseApiUrl} from "../config/Config";
export function fetchDoctors(city, speciality) {
  let url = baseApiUrl + "/api/doctor/search";
  if(city && speciality) {
    url += "?city="+city+"&specialization="+speciality
  }
  console.log("URL ",url);
  return {
    type: "FETCH_DOCTORS",
    payload: axios.get(url)
  }
}

export function getCountries() {
  return {
    type: "FETCH_COUNTRIES",
    payload: axios.get(baseApiUrl + "/api/search/countries")
  }
}

export function getStates(countryName) {
  return {
    type: "FETCH_STATES",
    payload: axios.get(baseApiUrl + "/api/search/states/"+countryName)
  }
}

export function getCities(stateName) {
  return {
    type: "FETCH_CITIES",
    payload: axios.get(baseApiUrl + "/api/search/cities/"+stateName)
  }
}

export function getSpecializations(cityName) {
  return {
    type: "FETCH_SPECILIZATIONS",
    payload: axios.get(baseApiUrl + "/api/search/specializations/"+cityName)
  }
}

export function showSearchDrawer(flag) {
  return {
    type: "SHOW_DRAWER",
    payload: flag
  }
}
