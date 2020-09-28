import React, { useState, useEffect } from 'react';
import Drawer from '../Drawer';
import Todo from './Todo';
import './TodoList.css';
import Row from 'react-bootstrap/Row';

import { withStyles } from '@material-ui/styles';
import UseInputState from './UseInputState';
const styles = {
   main: {
      marginLeft: '300px',
   },
};

function TodoList(props) {
   const initialTodos = JSON.parse(window.localStorage.getItem('List') || '[]');

   const [List, setList] = useState(initialTodos);
   const [input, handleChange, reset] = UseInputState('');
   const handleSubmit = (evt) => {
      setList([
         ...List,
         { text: input, id: Math.random() * 1000, completed: false },
      ]);

      reset();
   };
   const handleReload = (evt) => {
      evt.preventDefault();
   };
   useEffect(() => {
      window.localStorage.setItem('List', JSON.stringify(List));
   }, [List]);

   const { classes } = props;
   return (
      <div className="colors">
         <div className={classes.main}>
            <Drawer />
            <h1>TodoList</h1>

            <form onClick={handleReload}>
               <Row>
                  {' '}
                  <input
                     className="todoInput"
                     value={input}
                     placeholder="New Todo"
                     onChange={handleChange}
                  ></input>
                  <button className="Addbutton" onClick={handleSubmit}>
                     Add
                  </button>
               </Row>
               <br></br>
               <br></br>
               {List.map((todo) => (
                  <Todo
                     text={todo.text}
                     id={todo.id}
                     key={todo.id}
                     completed={todo.completed}
                     setList={setList}
                     todo={todo}
                     List={List}
                  />
               ))}
            </form>
         </div>
      </div>
   );
}

export default withStyles(styles)(TodoList);
