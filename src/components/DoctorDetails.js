import React, { Component } from 'react';
import { connect } from "react-redux";
import { getDoctor, getDoctorData, getReviews } from "../actions/doctorActions";
import DoctorContent from "../uic/DoctorContent";
import CardContent from "../uic/CardContent";
import Card from "../uic/Card";
import Head from "../uic/Head";
import appStyle from "../css/app.css";
import cardStyle from "../css/card.css";
import { getExtraName, getGobalVariable } from "../config/Utils";
import { showMap } from "../config/maps";

function mapStateToProps(state) {
  console.log("state.doctors.doctorData >>>>>", state.doctors.doctorData);
  return {doctor: state.doctors.doctor, doctorData: state.doctors.doctorData, reviews: state.doctors.reviews};
}

class DoctorDetails extends Component {
  constructor(props) {
    super(props);
    console.log("I am here...");
  }
  componentWillMount() {
    console.log("this.props.params.id", this.props);
    this.props.dispatch(getDoctor(this.props.params.id));
    console.log("doctor>>>>",this.props);
  }


  componentDidMount () {
    this.props.dispatch(getDoctorData(this.props.params.id));
    this.props.dispatch(getReviews(this.props.params.id, 0));
  }

  getAddress = (doctor) => {
    let address;
    if(doctor.CLINIC_NAME && doctor.CLINIC_NAME != "null") {
      address = doctor.CLINIC_NAME;
    }
    if(doctor.ADDRESS) {
      address = address ? address + "," +doctor.ADDRESS : doctor.ADDRESS;
    }
    if(doctor.DISTRICT) {
      address = address ? address + "," +doctor.DISTRICT : doctor.DISTRICT;
    }
    if(doctor.STATE) {
      address = address ? address + "," +doctor.STATE : doctor.STATE;
    }
    return address;
  }
  componentWillReceiveProps () {
    const { doctor } = this.props;
    if(doctor) {
      const address = this.getAddress(doctor);
      doctor ? doctor.CLINIC_NAME + ","+doctor.ADDRESS:
      console.log("0>>>>>>>address",address);
      showMap(address);
    }
  }

  displayExtras = (doctorData) => {
    return (
      <Card>
        <CardContent>
        { doctorData &&
          doctorData.map((item, key) => {
            return (
              <div key={key}>
                <div className={cardStyle.extraName}>{getExtraName(item.type)}</div>
                <div className={cardStyle.extra} >{item.data}</div>
              </div>
            );
          })
        }
        </CardContent>
      </Card>
    );
  }

  displayReviews = (reviews) => {
    const { doctor } = this.props;
    const isReviewed = (reviews && reviews.length > 0);
    return (
      <Card>
        <CardContent>
          <div className={cardStyle.heading}>Reviews & Comments</div>
        { reviews &&
          reviews.map((item, key) => {
            return (
              <div key={key}>
                <div className={cardStyle.comment}>{item.comment}</div>
              </div>
            );
          })
        }
        {!isReviewed && doctor &&
          <div className={cardStyle.noComment}>Could  not find any review comments for {doctor.DOCTORNAME}</div>
        }
        </CardContent>
      </Card>
    );
  }


  render(){
  const { doctor, doctorData, reviews } = this.props;
  const address = doctor ? doctor.CLINIC_NAME + ","+doctor.ADDRESS: "bangalore";
  console.log("====doctor.IMAGE====", doctor);
  return (
    <div className={appStyle.container}>
      {doctor &&
      <Card>
          <Head name={doctor.DOCTORNAME}
            speciality={doctor.SPECIALIZATION}
            rating={doctor.RATING} picture={doctor.IMAGE}
            id={doctor.ID}
            />
          <DoctorContent id={doctor.id} clinicName={doctor.CLINIC_NAME} address={doctor.ADDRESS} district={doctor.DISTRICT} contact={doctor.PHONE}/>
      </Card>
    }
    {doctorData && doctorData.length > 0 && this.displayExtras(doctorData)}
    {this.displayReviews(reviews)}
    <Card>
      <div id="map" className={cardStyle.map}/>
    </Card>
    </div>
  )
  }
}
const DoctorDetailsConnect = connect(
  mapStateToProps
)(DoctorDetails)

export default DoctorDetailsConnect;
