import React,{Component} from 'react'
import ToDo from './ToDo'
import {Consumer} from '../context'

export default class ToDos extends Component{
    render(){
        return(
            <Consumer>{value=>{
                const {todos}=value
                return todos.map(t=><ToDo todo={t} key={t.id}></ToDo>)
            }}</Consumer>
    
        )
    }
}

