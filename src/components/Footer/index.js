import React, {Component} from 'react';
import "./index.css"

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    // 清空
    handleClearAll=()=>{
        this.props.clearAllDone()
    }
    render() {
        const {todos} = this.props
        // 计算已完成的个数 总数
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <div className='todo-fotter'>
                <label>
                    <input type='checkbox' onChange={this.handleCheckAll} checked={doneCount === total && total !== 0}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span>  /  全部{total}
                </span>
                <button onClick={this.handleClearAll} className='btn btn-danger'>清除已完成任务</button>
            </div>
        );
    }
}
