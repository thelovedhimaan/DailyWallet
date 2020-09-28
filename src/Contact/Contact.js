import React, { Component } from 'react';
import Drawer from '../Drawer';

import { withStyles } from '@material-ui/styles';
const styles = {
   main: {
      marginLeft: '300px',
   },
};
class Contact extends Component {
   render() {
      const { classes } = this.props;
      return (
         <div className="colors">
            <div className={classes.main}>
               <Drawer />
               <h1>About</h1>
               <h2>Designed by - Love Dhimaan</h2>
               <h2>
                  Email :
                  <a
                     href="mailto:thelovedhiman@.com"
                     style={{ fontSize: '30px', color: 'white' }}
                  >
                     {' '}
                     thelovedhiman@gmail.com
                  </a>
               </h2>
               <h6>For more Info Search thelovedhimaan on any platform.</h6>
            </div>
         </div>
      );
   }
}
export default withStyles(styles)(Contact);
