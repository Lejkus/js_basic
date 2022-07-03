const Names = props => {
    //34
    //zwraca wartość statu   , zwraca funkcje do edytowania stanu
    
    //const [showNameState, setShowNameState] = React.useState(true)
    
    const names = ['kevin','marian','janek']
    const nameList = names.map(name => <li key={name}>{name}</li> )
    //const showName = true
    //gdy chcemy ukryć
    //const toogleNames = () => {setShowNameState(false)}
    //gdy toogle
    //const toogleNames = () => {setShowNameState(!showNameState)}

    return (
      <div>
        {props.test ? <ul>{nameList}</ul> : 'brak imion'}
      </div>
      )
}


  class Headline extends React.Component{
      state = {
        title:'Siemandero',
        showNames: true
      }

      toogleNames(){
        this.setState({showNames: !this.state.showNames})
      }

      render(){ //JSX
        const changeTitle = () => { 
        this.setState({title: 'slakdfblais'})
        }

          return (
            <div>
              <h1>Hello {this.state.title}</h1>
                <Names test={this.state.showNames}/>
                <button onClick={changeTitle} >Change titel</button>
                <button onClick={() => this.toogleNames()}>Toogle names</button>
            </div>
          )
      }
}

ReactDOM.render(<Headline />,document.querySelector('#app'))
