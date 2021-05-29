/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Platform,
  View,
  PermissionsAndroid,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { PERMISSIONS, check, checkMultiple, request, requestMultiple } from 'react-native-permissions';

class App extends Component {

  request_permission=async()=>{
    const granted=await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title':'camera permission',
        'message':'need your access camera'
      }
    )
    if(granted===PermissionsAndroid.RESULTS.GRANTED){
      Alert.alert("permission granted");
    }
    else{
      Alert.alert("permission not granted")
    }
  }

  async componentDidMount() {

    await request_permission()
    // check(Platform.select({
    //   android:PERMISSIONS.ANDROID.CAMERA,
    //   ios:PERMISSIONS.IOS.CAMERA
    // }))
    // .then((res)=>{
    //   console.log(res);
    // })
    // .catch((e)=>console.log(e))



    // const CameraPermission=Platform.select({
    //      android:PERMISSIONS.ANDROID.CAMERA,
    //      ios:PERMISSIONS.IOS.CAMERA
    // });

    // const MicrophonePermission=Platform.select({
    //   android:PERMISSIONS.ANDROID.RECORD_AUDIO,
    //   ios:PERMISSIONS.IOS.MICROPHONE
    // });


    // checkMultiple([CameraPermission, MicrophonePermission])
    // .then((status)=>{
    //   console.log('Camera',status[CameraPermission]);
    //   console.log('Microphone',status[MicrophonePermission]);
    // })

    // const CameraPermission = Platform.select({
    //   android: PERMISSIONS.ANDROID.CAMERA,
    //   ios: PERMISSIONS.IOS.CAMERA
    // });

    // request(CameraPermission).then((result)=>{
    //   console.log(result);
    // })


    // const CameraPermission=Platform.select({
    //      android:PERMISSIONS.ANDROID.CAMERA,
    //      ios:PERMISSIONS.IOS.CAMERA
    // });

    // const MicrophonePermission=Platform.select({
    //   android:PERMISSIONS.ANDROID.RECORD_AUDIO,
    //   ios:PERMISSIONS.IOS.MICROPHONE
    // });

    // requestMultiple([CameraPermission,MicrophonePermission]).then((status)=>{
    //   console.log('Camera',status[CameraPermission]),
    //   console.log('Microphone',status[MicrophonePermission])
      
    // })
  }

  render() {
    return (
      <View></View>
    )
  }
}

export default App;
