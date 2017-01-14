export default function doctors(state ={}, action) {
  switch (action.type) {
    case 'FETCH_DOCTORS_FULFILLED': {
        console.log("<<<<<<<<>>>>",action);
        return {...state, doctors: action.payload.data};
      }
    default:
      return state;
  }
}
