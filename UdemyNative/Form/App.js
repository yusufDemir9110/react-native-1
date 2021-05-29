
import React, {Component} from 'react';
import Route from './src/Route'
import STORE from './src/store'
import {Provider} from 'mobx-react';



class App extends Component{
 
  render(){
    return <Provider {...STORE}><Route/></Provider> 
  }
}

export default App;
