import React, { Component } from 'react';
import contentStyle from "../css/mainContent.css";
import appStyle from "../css/app.css";
import Card from "../uic/Card";
import Head from "../uic/Head";
import Footer from "../uic/Footer";
import CardContent from "../uic/CardContent";


class MainContent extends Component {
  render() {
    return (
        <div className={appStyle.container}>
          <Card>
              <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
              <CardContent/>
              <Footer>
                test footer
              </Footer>
          </Card>
          <Card>
              <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
              <CardContent/>
              <Footer>
                test footer
              </Footer>
          </Card>
          <Card>
              <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
              <CardContent/>
              <Footer>
                test footer
              </Footer>
          </Card>
          <Card>
              <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
              <CardContent/>
              <Footer>
                test footer
              </Footer>
          </Card>
          <Card>
              <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
              <CardContent/>
              <Footer>
                test footer
              </Footer>
          </Card>
          <Card>
              <Head name="Dr.V.P.Gangadharan" speciality="Oncologist" rating="4" picture="http://bestdoctorz.com:8080/api/getsmallphoto/4.jpg"/>
              <CardContent/>
              <Footer>
                test footer
              </Footer>
          </Card>
        </div>
    );
  }
}

export default MainContent;
