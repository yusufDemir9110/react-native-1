import React, {Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';

class Home extends Component{

  componentDidMount(){
    this.props.navigation.addListener('willFocus',()=>{
      alert('indexe geri geldin')
    })
    this.props.navigation.addListener('willBlur',()=>{
      alert('Indexten çıktın')
    })
  }
    render(){
      return(
        <View>
          <Text>Merhaba</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}><Text>Menu</Text></TouchableOpacity>
        </View>
      )
    }
  }

export default Home;