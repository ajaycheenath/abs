export default function doctorsearch(state ={
  countries: [],
  states: [],
  cities: [],
  specilizations: [],
  showSearch: false
}, action) {
  switch (action.type) {
    case 'FETCH_COUNTRIES_FULFILLED': {
        console.log("FETCH_COUNTRIES_FULFILLED -  ACTION",action);
        return {...state, countries: action.payload.data};
    }
    case 'FETCH_STATES_FULFILLED': {
        console.log("FETCH_STATES_FULFILLED -  ACTION",action);
        return {...state, states: action.payload.data};
    }
    case 'FETCH_CITIES_FULFILLED': {
        console.log("FETCH_CITIES_FULFILLED -  ACTION",action);
        return {...state, cities: action.payload.data};
    }
    case 'FETCH_SPECILIZATIONS_FULFILLED': {
        console.log("FETCH_SPECILIZATIONS_FULFILLED -  ACTION",action);
        return {...state, specializations: action.payload.data};
    }
    case 'SHOW_DRAWER': {
        console.log("FETCH_SPECILIZATIONS_FULFILLED -  ACTION",action);
        return {...state, showSearch: action.payload};
    }
    default:
      return state;
  }
}
