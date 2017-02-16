import { baseApiUrl } from "./Config";
const extras = [];
  extras[0] = "Email Address";
  extras[1] = "Website";
  extras[2] = "Video";
  extras[4] = "Specialization";
  extras[5] = "Registration";
  extras[7] = "Timings";
  extras[8] = "Fees";
  extras[9] = "Experience";
  extras[10] = "Services";

  export function getExtraName(type) {
    return extras[parseInt(type)];
  }

export function truncate(value, maxSize) {
  if(value && value.length > maxSize) {
    return value.substring(0, maxSize) +"...";
  }
  return value;
}

export function setGobalVariable(key, value) {
  return window.global.setGobalVariable(key, value);
}

export function getGobalVariable(key) {
  return window.global.getGobalVariable(key);
}

export function log(_data){
  getServerRequest(baseApiUrl+"/log/info?data="+_data);
}

function getServerRequest(url) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText);
     }
   };
   xhttp.open("GET", url, true);
   xhttp.send();
}
