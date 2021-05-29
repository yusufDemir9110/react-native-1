

import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import ItemList from './ItemList'





class App extends Component{
  constructor(){
    super();
    this.state={
      text:'',
      data:[]
    }
  }
  
  handleSave=()=>{
    const{text, data}=this.state;
    data.push({text});
    this.setState({data, text:''});

  }

  render(){
    const{text, data}=this.state;
    return(
      <View style={{flex:1}}>
         <View style={style.title}><Text style={style.title_text}>To-Do App</Text></View>
         <View style={{backgroundColor:"#ccc", padding:10, flexDirection:"row"}}>
           <TextInput style={style.input} value={text} onChangeText={(text)=>{this.setState({text})}}/>
           <TouchableOpacity onPress={this.handleSave} style={style.button}><Text style={style.title_text}>Ekle</Text></TouchableOpacity>
         </View>
         <View>
           {
             data.map((item)=>{
               return <ItemList text={item.text}/>
             })
           }
         </View>
      </View>
      
    )
  }
}

const style=StyleSheet.create({
  title:{backgroundColor:"orange", padding:10},
  title_text:{color:"white", textAlign:"center", fontSize:16, fontWeight:"700"},
  input:{padding:10, backgroundColor:"white", flex:1},
  button:{padding:10, marginLeft:10, backgroundColor:"blue", borderRadius:5},
 
})

export default App;
