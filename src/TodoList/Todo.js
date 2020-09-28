import React from 'react';
import './TodoList.css';

function Todo({ text, todo, List, setList }) {
   const handleDelete = () => {
      setList(List.filter((e) => e.id !== todo.id));
   };
   const handleComplete = () => {
      setList(
         List.map((item) => {
            if (item.id === todo.id) {
               return {
                  ...item,
                  completed: !item.completed,
               };
            }
            return item;
         })
      );
   };

   return (
      <div>
         <li className={`${todo.completed ? 'completed' : 'uncompleted'}`}>
            <button className="Todobutton" onClick={handleComplete}>
               <i className="fas fa-check"> Completed</i>
            </button>
            <button className="Todobutton" onClick={handleDelete}>
               <i className="fas fa-trash">Delete</i>
            </button>{' '}
            <span>{text}</span>
         </li>
      </div>
   );
}
export default Todo;
