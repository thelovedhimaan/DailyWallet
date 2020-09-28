import React from 'react';

import Card from 'react-bootstrap/Card';

export default function News(props) {
   return (
      <Card>
         <div
            className="colors"
            style={{ height: '500px', paddingBottom: '0' }}
         >
            <Card.Img variant="top" src={props.image} />

            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.description}</Card.Text>
               <br></br>
            </Card.Body>
         </div>
      </Card>
   );
}
