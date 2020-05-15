import React from 'react';
//import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading: false
      });
    }, 6000);
  }
  
  render(){
    const { isLoading } = this.state;
    return (
      <div>
        <span>{ isLoading ? "loading..." : "completed!!!" }</span>
      </div>
    );
  }
}

export default App;
