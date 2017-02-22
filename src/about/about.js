import React from 'react';
import ReactDOM from 'react-dom';
require('../styles.css');
//import './my_son.jpg';

class MyRoot extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (<div>
      Hello, I am {this.props.name}
    </div>);
  }
}

ReactDOM.render(<MyRoot name='Charles' />, document.getElementById('a'));

// //var $ = require('jquery');
// //import $ from 'jquery';
// const name = 'Charles';
// var sayHello = () => `Hello, ${name}`;
// //$('#a').html(sayHello);
// document.getElementById("a").innerHTML = sayHello();
