import React from 'react';

import Card from 'react-bootstrap/Card';

export default function Books(props) {
   return (
      <Card>
         <div className="colors" style={{ height: '100%', paddingBottom: '0' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
               <Card.Title>
                  <a href={props.link}>{props.title}</a>
               </Card.Title>
               <Card.Text>{props.description}</Card.Text>
               <Card.Text>Published Date {props.publishedDate}</Card.Text>
               <Card.Text> Publisher {props.publisher}</Card.Text>
               <Card.Text>{props.ratings}</Card.Text>{' '}
               <Card.Text>Pages {props.pageCount}</Card.Text>
            </Card.Body>
         </div>
      </Card>
   );
}
