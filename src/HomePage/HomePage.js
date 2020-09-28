import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomePage.css';
export default class HomePage extends Component {
   render() {
      return (
         <div>
            <div className="title">
               <Row>
                  <Col lg={6}>
                     <h1 className="mainh1"> Daily Wallet</h1>

                     <br></br>
                     <h3>
                        We Provide all your Basic Necessary Needs on Single
                        WebSite
                     </h3>
                     <p>
                        <ul>
                           <li>TodoList for Your Schedule.</li>
                           <li>Check Weather Anywhere before going out.</li>
                           <li>Top News trending All over world.</li>
                           <li>Find Bookd to read.</li>
                           <li>Calculate Your maths problem.</li>
                        </ul>
                     </p>
                  </Col>
                  <Col lg={6}>
                     <div className="container">
                        <Row>
                           <Col>
                              <Row>
                                 <Col>
                                    <Link Link to="/TodoList">
                                       <Button variant="dark" size="lg" block>
                                          TodoList
                                       </Button>
                                    </Link>
                                 </Col>
                                 <Col>
                                    <Link Link to="/BookReader">
                                       <Button variant="dark" size="lg" block>
                                          {' '}
                                          BookReader
                                       </Button>
                                    </Link>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col>
                                    <Link Link to="/DetailedWeather">
                                       <Button variant="dark" size="lg" block>
                                          {' '}
                                          DetailedWeather
                                       </Button>
                                    </Link>
                                 </Col>
                                 <Col>
                                    <Link Link to="/Calculator">
                                       <Button variant="dark" size="lg" block>
                                          {' '}
                                          Calculator
                                       </Button>
                                    </Link>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col>
                                    <Link Link to="/TopNews">
                                       <Button variant="dark" size="lg" block>
                                          {' '}
                                          TopNews
                                       </Button>
                                    </Link>
                                 </Col>
                                 <Col>
                                    <Link Link to="/About">
                                       <Button variant="dark" size="lg" block>
                                          {' '}
                                          About
                                       </Button>
                                    </Link>
                                 </Col>
                              </Row>
                           </Col>
                        </Row>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>
      );
   }
}
