import React,{Component} from 'react'
import {Consumer} from '../context'
import axios from 'axios'
import wall1 from '.././wall1.jpg'

export default class AddToDo extends Component{
    state={
        id:4,
        title:"",
        dueDate:"",
        priority:"",
        complete:"false"
    }
    update=(e)=>{
this.setState({title:e.target.value})
    }
    update1=(e)=>{
        this.setState({dueDate:e.target.value})
            }
            update2=(e)=>{
                this.setState({priority:e.target.value})
                    }
    add=(dispatch,e)=>{
        e.preventDefault()
        const newTodo=this.state
        axios.post("/todos",newTodo)
        .then(res=>dispatch({type:'ADD',payload:res.data}))
        
        this.setState({title:""})
        this.setState({dueDate:""})
        this.setState({priority:""})
    }
    render(){
        return(
            <Consumer>{value=>{
                const {dispatch} =value
                return  <div><form onSubmit={this.add.bind(this,dispatch)}>
                <div className="card" style={{backgroundImage:`url(${wall1})`,opacity:"90%"}}>
                <div className="input">
                <div className="i1">
                <input type="text" className="form-control rounded-0" placeholder="Task Title"
                onChange={this.update} value={this.state.title} />
                </div>
                <div className="i2">
                <input type="text" className="form-control rounded-0" placeholder="Due Date"
                onChange={this.update1} value={this.state.dueDate} />
                </div>
                <div className="i3">
                <input type="text" className="form-control rounded-0" placeholder="Priority Level"
                onChange={this.update2} value={this.state.priority} />
                </div>
                </div>
                <div className="i4">
                <button className="form-control rounded-0 btn-primary" type="submit"><b>Add ToDo</b></button>
                </div>
                </div>
                </form>
                <div className="card card1">
                <table>
                <tr>
                
                <td ><b>TaskTitle</b></td>
                <td><b>DueDate</b></td>
                <td><b>PriorityLevel</b></td>
                </tr>
                </table>
                </div>
                </div>
            }}</Consumer>
        
        )
    }
}