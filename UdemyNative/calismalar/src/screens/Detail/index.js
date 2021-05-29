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

class Detail extends Component{
  static navigationOptions=({navigation})=>{
    return{
      title:'Detay',
      headerLeft:()=><TouchableOpacity onPress={()=>navigation.goBack()}><Text>Geri</Text></TouchableOpacity>,
      headerRight:()=><Text>Ekle</Text>
    }
  }
  componentDidMount(){
    alert(this.props.navigation.getParam("id"));
  }
    render(){
      return(
        <View>
          <Text>Merhaba2</Text>
          
        </View>
      )
    }
  }

export default Detail;