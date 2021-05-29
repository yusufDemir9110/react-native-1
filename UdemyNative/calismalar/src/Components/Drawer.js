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


class Drawer extends Component{
    render(){
      return(
        <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail',{
            id:5,
            name:"yusuf"
          })}>
            <Text>Go to Detail</Text>
          </TouchableOpacity>
          <Text>Merhaba3</Text>
          
        </View>
      )
    }
  }

  export default Drawer;