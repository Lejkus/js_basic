import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component{

    state = {
        elements: [
            {id:'83274', Zakonczone:true, title:'zrobić zakupy'},
            {id:'64274', Zakonczone:false, title:'nakarmić psa'}
        ],
        inputValue:''
    }

    markCompleted(id){
        const index = this.state.elements.findIndex(element => element.id == id)
        const newElements = this.state.elements
        newElements[index].Zakonczone = true

        this.setState({elements : newElements})
    }

    addItem(){
        const item = {
            id:Math.random(),
            title:this.state.inputValue
        }
        const newElements = [item, ...this.state.elements]
        this.setState({elements:newElements})
        this.setState({inputValue: ''})
    }

    inputHandler(input){
        const newvalue = input.target.value
        this.setState({inputValue:newvalue})
    }

    render(){
        const elementy = this.state.elements.map(element =>{
            return <TodoItem element={element}  Clicked={this.markCompleted.bind(this)}/>
        })

        return(
            <div>
                Todo app
                <input typu='text' value={this.state.inputValue} onChange={this.inputHandler.bind(this)} ></input>
                <button onClick={this.addItem.bind(this)} >Dodaj do listy</button>
                {elementy}
            </div>
        )
    }
}

export default Todo

//[]