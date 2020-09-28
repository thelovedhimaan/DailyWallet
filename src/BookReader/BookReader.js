import React, { useState } from 'react';
import Drawer from '../Drawer';
import Books from './Books';
import './Book.css';
import { withStyles } from '@material-ui/styles';
const axios = require('axios').default;
const styles = {
   main: {
      marginLeft: '300px',
   },
};
function BookReader({ classes }) {
   const [state, setstate] = useState('');
   const [Book, setBook] = useState('');
   const [Store, setStore] = useState([]);
   const [Load, setLoad] = useState(false);
   const handleChange = (evt) => {
      setstate(evt.target.value);
   };
   const handleSubmit = (evt) => {
      evt.preventDefault();
      setBook(state);
      getBook(evt.target.value);
      // setLoad(true);
   };

   const getBook = async (book) => {
      // setLoad(true);
      // try {
      let Books = await axios.get(
         `https://www.googleapis.com/books/v1/volumes?q=${Book}`
      );

      setStore(Books.data.items);
      setLoad(false);
      // } catch (e) {
      //    alert(e);
      //    setLoad(false);
      //    window.location.reload(false);
      // }
   };
   if (Load) {
      return (
         <div className="colors" style={{ paddingTop: '200px' }}>
            <div className="JokeList-spinner">
               <i className="far fa-8x fa-laugh fa-spin"></i>
               <h1 className="JokeList-title">Loading...</h1>
            </div>
         </div>
      );
   } else {
      return (
         <div className="colors">
            <div className={classes.main}>
               <Drawer />
               <h1>Book Reader</h1>
               <form onSubmit={handleSubmit}>
                  <input
                     className="bookbutton"
                     placeholder="Search Book"
                     value={state}
                     onChange={handleChange}
                  ></input>
                  <br></br>
                  <br></br>
                  <button className="bookbutton">Search</button>
               </form>
               <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {Store.map((book) => (
                     <div
                        style={{
                           width: '280px',
                           display: 'flex',
                           flexWrap: 'wrap',
                           margin: '20px',
                           height: '30%',
                        }}
                     >
                        <Books
                           title={book.volumeInfo.title}
                           id={book.volumeInfo.title}
                           key={book.volumeInfo.title}
                           publisher={book.volumeInfo.publisher}
                           ratings={book.volumeInfo.ratingscount}
                           description={book.volumeInfo.description}
                           pageCount={book.volumeInfo.pageCount}
                           publishedDate={book.volumeInfo.publishedDate}
                           image={book.volumeInfo.imageLinks.thumbnail}
                           link={book.accessInfo.webReaderLink}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}
export default withStyles(styles)(BookReader);
