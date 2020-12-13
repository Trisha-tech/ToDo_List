import React,{Component} from 'react'
import {Consumer} from '../context'
import axios from 'axios'
export default class ToDo extends Component{
  style=()=>{
    const {complete}=this.props.todo
    return {
      textDecoration:complete ? "line-through" :"none"
    }
  }
    toggle=(id,dispatch)=>{
      dispatch({type:"TOGGLE", payload:id})
    }
    remove=(id,dispatch)=>{
      axios.delete(`/todos/${id}`)
      .then(()=>dispatch({type:"REMOVE", payload:id}))
      
    }

    render(){
      const {title,dueDate,priority,_id}=this.props.todo
        return(
          <Consumer>{value=>{
            const {dispatch} = value
  
            return  <div className="todo"> <h4 className="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
           
         <input type="checkbox" className="m-2 float-right" style={{width:"30px",float:"left"}} onChange={this.toggle.bind(this,_id,dispatch)}/>
         <div className="card card2">
            <table>
            <tr>
            <td >{title}</td>
            <td>{dueDate}</td>
            <td>{priority}</td>
         
            </tr>
            </table>
            </div>
          
            <i className="fas fa-trash" style={{float:"right",marginTop:"-35px",marginRight:"5px"}} onClick={this.remove.bind(this,_id,dispatch)}></i>
            
           
            </h4>   
           
            </div>
            
          }}</Consumer>
  
        )
    }
}