import React ,{Component} from "react";
import Hello from "./components/Hello/Hello"
import Wellcome from "./components/Wellcome/Wellcome"
//创建外壳组件
export  default  class App extends Component{
  render(){
    return(
    <div>
    <Hello/>
      <Wellcome/>
    </div>
    )
  }
}
