import React, {Component} from 'react';
import "./index.css"
export default class Footer extends Component {
    render() {
        return (
            <div className='todo-fotter'>
                <label>
                    <input type='checkbox'/>
                </label>
                <span>
                    <span>已完成0</span>  /  全部2
                </span>
                <button className='btn btn-danger'>清除已完成任务</button>
            </div>
        );
    }
}
