import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BookReader from './BookReader/BookReader';
import Calculator from './Calculator/Calculator';
import Contact from './Contact/Contact';
import DetailedWeather from './DetailedWeather/DetailedWeather';

import TodoList from './TodoList/TodoList';
import TopNews from './TopNews/TopNews';

function App() {
   return (
      <Router>
         <Switch>
            {' '}
            <Route exact path="/BookReader">
               <BookReader />
            </Route>
            <Route path="/Calculator">
               <Calculator />
            </Route>
            <Route path="/About">
               <Contact />
            </Route>
            <Route path="/DetailedWeather">
               <DetailedWeather />
            </Route>
            <Route path="/TopNews">
               <TopNews />
            </Route>
            <Route path="/TodoList">
               <TodoList />
            </Route>
            <Route exact path="/">
               <HomePage />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
