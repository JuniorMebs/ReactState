import React , {component} from 'react';
import './App.css';

class App extends React.Component {
  state = {
    Fullname: "Sara",
    bio: "", 
    imgSrc:"", 
    profession:"",

  };
  handleClick=()=>this.setState({Fullname:'Arya'})
  render() {
    return(
      <>
      <h1>Hello {this.state.name}</h1>
      <button onClick={this.handleClick}> ClickMe</button>
      </>
    )
  }
 }

export default App;
