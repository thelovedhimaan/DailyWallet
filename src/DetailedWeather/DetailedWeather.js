import React, { Component } from 'react';
import Drawer from '../Drawer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Weather.css';
const axios = require('axios').default;

class DetailedWeather extends Component {
   constructor(props) {
      super(props);
      this.state = {
         city: '',

         humidity: null,
         temp_f: null,
         temp_c: null,
         precip_in: null,
         condition: null,
         icon: null,
         localtime: null,
         region: null,
         country: null,
         loading: false,
      };
   }

   handleChange = (evt) => {
      this.setState({ city: evt.target.value });
   };
   handleSubmit = async (evt) => {
      try {
         evt.preventDefault();
         this.setState({ loading: true });
         let weather = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=bebb257d09ee44659d672924201709&q=${this.state.city}`
         );

         this.setState({
            humidity: `Humidity : ${weather.data.current.humidity}`,
            temp_f: `Temprature F : ${weather.data.current.temp_f} `,
            temp_c: `Temprature C : ${weather.data.current.temp_c} `,
            precip_in: `Precipitation : ${weather.data.current.precip_in}`,
            condition: `${weather.data.current.condition.text}`,
            icon: `${weather.data.current.condition.icon}`,
            localtime: `Date & Time : ${weather.data.location.localtime}`,
            region: `Region : ${weather.data.location.region}`,
            country: `Country : ${weather.data.location.country}`,
         });
         this.setState({ loading: false });
      } catch (e) {
         alert(e);
         this.setState({ loading: false });
         window.location.reload(false);
      }
   };
   render() {
      const {
         humidity,
         temp_f,
         temp_c,
         precip_in,
         condition,
         icon,
         localtime,
         region,
         country,
      } = this.state;

      if (this.state.loading) {
         return (
            <div
               className="JokeList-spinner colors"
               style={{ paddingTop: '200px' }}
            >
               <i className="far fa-8x fa-laugh fa-spin"></i>
               <h1 className="JokeList-title">Loading...</h1>
            </div>
         );
      } else {
         return (
            <div className="colors">
               <Drawer />
               <Container>
                  <Row>
                     <Col lg={1}></Col>
                     <Col lg={11}>
                        <Row>
                           <h1>Here's Your Weather</h1>
                        </Row>
                        <Row>
                           <form onSubmit={this.handleSubmit}>
                              <input
                                 className="weather"
                                 placeholder="City"
                                 value={this.state.city}
                                 onChange={this.handleChange}
                              />
                              <br></br>
                              <br></br>
                              <button className="weather">Search</button>
                           </form>
                        </Row>
                        <Row>
                           {this.state.loading ? (
                              ''
                           ) : (
                              <img
                                 src={icon}
                                 alt={this.state.loading ? 'Weather' : ''}
                              />
                           )}
                        </Row>
                        <Row>
                           <h2>{condition}</h2>
                        </Row>

                        <Row>
                           <Col> {temp_c}</Col>
                           <Col> {temp_f}</Col>
                        </Row>
                        <Row>
                           <Col>{region} </Col>
                           <Col>{country}</Col>
                        </Row>
                        <Row>
                           <Col> {humidity}</Col>
                           <Col> {precip_in}</Col>
                        </Row>
                        <Row>{localtime}</Row>
                     </Col>
                  </Row>
               </Container>
            </div>
         );
      }
   }
}
export default DetailedWeather;
