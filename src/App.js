import React, { Component } from 'react'
import { connect } from "react-redux";
import { addGun, rmGun, addGunAsync } from "./index.redux";

@connect(
  (state) => ({num: state}),
  { addGun, rmGun, addGunAsync }
)
class App extends Component {
  render() {
    return (
      <div>
        <h1>现在有机枪 {this.props.num} 把</h1>
        <button onClick={this.props.addGun}>加机关枪</button>
        <button onClick={this.props.rmGun}>减机关枪</button>
        <button onClick={this.props.addGunAsync}>过几天再给</button>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({num: state});
// const actionCreates = { addGun, rmGun, addGunAsync };
// App = connect(mapStateToProps, actionCreates)(App);

export default App;