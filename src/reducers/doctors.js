export default function doctors(state ={}, action) {
  switch (action.type) {
      case 'FETCH_DOCTORS_FULFILLED': {
        return {...state, doctors: action.payload.data};
      }
      case 'FETCH_DOCTOR_FULFILLED': {
        return {...state, doctor: action.payload.data[0]};
      }
      case 'FETCH_DOCTORDATA_FULFILLED': {
        return {...state, doctorData: action.payload.data};
      }
      case 'FETCH_REVIEWS_FULFILLED': {
        return {...state, reviews: action.payload.data};
      }
    default:
      return state;
  }
}
