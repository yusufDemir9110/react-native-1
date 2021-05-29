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

const ItemList=({text})=>{
  return(<View style={style.card}><Text>{text}</Text></View>)
}

const style=StyleSheet.create({
    card:{padding:10, backgroundColor:'#ddd', margin:5}
})

export default ItemList;