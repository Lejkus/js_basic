import React from "react"

const TodoItem = props => {
    const funckja_zmiany_na_zakonczone = () => props.Clicked(props.element.id)

    return (
        <div className={`card $ ${props.element.Zakonczone ? 'wykonane' : ''}`} key={props.element.id} >{props.element.title}
            <button onClick={funckja_zmiany_na_zakonczone} >Zakończone</button>
        </div>
    )
}

export default TodoItem
