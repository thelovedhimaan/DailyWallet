import React, { useState, useEffect } from 'react';
import Drawer from '../Drawer';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import News from './News';
import './TopNews.css';
const styles = {
   main: {
      marginLeft: '300px',
   },
};

function TopNews(props) {
   const [Load, setLoad] = useState(true);
   const [news, setnews] = useState([]);

   useEffect(() => {
      getNews();
   }, []);

   const getNews = async () => {
      try {
         const newsapi = await axios.get(
            'http://newsapi.org/v2/top-headlines?' +
               'country=us&' +
               'apiKey=a1eba2b29f594657a16853d9067f229f'
         );
         setnews(newsapi.data.articles);
         console.log(newsapi.data.articles);
         setLoad(false);
      } catch (e) {
         alert(e);
         setLoad(false);
         window.location.reload(false);
      }
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
            <div className={props.classes.main}>
               <Drawer />
               <h1>Top Headlines</h1>
               <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {news.map((news) => (
                     <div
                        style={{
                           width: '280px',
                           display: 'flex',
                           flexWrap: 'wrap',
                           margin: '20px',
                           height: '500px',
                        }}
                     >
                        {' '}
                        <News
                           key={news.title}
                           id={news.title}
                           author={news.author}
                           title={news.title}
                           image={news.urlToImage}
                           description={news.description}
                           time={news.publishedAt}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(TopNews);
