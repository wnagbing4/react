import React, {Component} from 'react';
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"
export default class App extends Component {
    // 状态在哪里操作状态的方法就在哪里

    //初始化状态
    state={
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'敲代码',done:false},
            {id:'004',name:'逛街',done:true}
        ]
    }
    // addTodo用于添加一个todo，接收的参数是todo对象
    addTodo=(todoObj)=>{
        console.log('App',todoObj)
        const {todos} =this.state
    //     追加todo
        const newTodos=[todoObj,...todos]
    //     更新状态
        this.setState({todos:newTodos})
    }
     // updateTodo用于更新一个todo对象
     updateTodo=(id,done)=>{
     // 获取状态中的todos
         const {todos} =this.state
       const newTodos=  todos.map((todoObj)=>{
             if(todoObj.id===id)return {...todoObj,done}
             else return todoObj
         })
         this.setState({todos:newTodos})
     }
    render() {
        return (
            <div className='todo-container'>
            <div className='todo-wrap'>
                <Header addTodo={this.addTodo}/>
                <List todos={this.state.todos} updateTodo={this.updateTodo}/>
                <Footer/>
            </div>
            </div>
        );
    }
}
