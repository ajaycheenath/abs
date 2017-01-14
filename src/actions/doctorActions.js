import axios from "axios";
export function fetchDoctors() {
  return {
    type: "FETCH_DOCTORS",
    payload: axios.get("http://bestdoctorz.com:8080/api/doctor/search")
  }
}
