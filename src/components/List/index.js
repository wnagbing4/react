import React, {Component} from 'react';
import Item from "../Item"
import "./index.css"
import PropTypes from "prop-types";

export default class List extends Component {
    // 对接收的props进行类型的必要性的限制
    static  propTypes={
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        const {todos,updateTodo,deleteTodo} =this.props
        return (
          <ul className='todo-main'>
              {
                  todos.map((todo)=>{
                      return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                  })
              }
          </ul>
        );
    }
}
