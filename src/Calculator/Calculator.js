import React, { useState } from 'react';
import Drawer from '../Drawer';
import './Calculator.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withStyles } from '@material-ui/styles';
const styles = {
   main: {
      marginLeft: '300px',
   },
};
function Calculator({ classes }) {
   const [value1, setvalue1] = useState('');
   const [value2, setvalue2] = useState('');
   const [value, setvalue] = useState('');
   const handleChange1 = (evt) => {
      setvalue1(evt.target.value);
   };
   const handleChange2 = (evt) => {
      setvalue2(evt.target.value);
   };
   const handleAdd = () => {
      setvalue('');
      setvalue(parseInt(value1) + parseInt(value2));
   };
   const handleSubtract = () => {
      setvalue('');
      setvalue(value1 - value2);
   };
   const handleMultiply = () => {
      setvalue('');
      setvalue(value1 * value2);
   };
   const handleDivide = () => {
      setvalue('');
      setvalue(value1 / value2);
   };
   const handleModulus = () => {
      setvalue('');
      setvalue(value1 % value2);
   };
   const handlePercentage = () => {
      setvalue('');
      setvalue((value1 / value2) * 100);
   };

   return (
      <div className="colors">
         <div className={classes.main}>
            <Drawer />
            <h1>Calculator</h1>
            <Row>
               <Col lg={6}>
                  <Row>
                     <input
                        className="calinput"
                        placeholder="value1"
                        value={value1}
                        onChange={handleChange1}
                     ></input>
                  </Row>
                  <br></br>
                  <Row>
                     <input
                        className="calinput"
                        placeholder="value2"
                        value={value2}
                        onChange={handleChange2}
                     ></input>
                  </Row>
                  <br></br>
                  <Row>
                     <h3>Answer : </h3>
                  </Row>
                  <Row>
                     <h1 className="answer"> {value}</h1>
                  </Row>
               </Col>
               <Col lg={6}>
                  <div>
                     <Row>
                        {' '}
                        <button className="calbutton" onClick={handleAdd}>
                           Add +
                        </button>
                     </Row>
                     <Row>
                        {' '}
                        <button className="calbutton" onClick={handleSubtract}>
                           Subtract -
                        </button>
                     </Row>
                     <Row>
                        {' '}
                        <button className="calbutton" onClick={handleMultiply}>
                           Multiply *
                        </button>
                     </Row>
                     <Row>
                        {' '}
                        <button className="calbutton" onClick={handleDivide}>
                           Divide /
                        </button>
                     </Row>
                     <Row>
                        {' '}
                        <button className="calbutton" onClick={handleModulus}>
                           Modulus
                        </button>
                     </Row>
                     <Row>
                        <button
                           className="calbutton"
                           onClick={handlePercentage}
                        >
                           Percentage
                        </button>
                     </Row>
                  </div>
               </Col>
            </Row>
         </div>
      </div>
   );
}
export default withStyles(styles)(Calculator);
