import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native'


import Item from './Item'

class App extends Component{

    renderItem=({item})=>{
        return <Item item={item}/>
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'#f5f5f5', padding:10}}>
              <FlatList
              style={{flex:1}}
                data={['elma','armut', 'muz']}
                renderItem={this.renderItem}
              />
            </View>
        )
    }
}

export default App;