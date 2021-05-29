
import React, { Component } from 'react';

import Geolocation from '@react-native-community/geolocation'
import MapView, { PROVIDER_GOOGLE, Marker, Polygon, Circle } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'

import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: ''
    }
  }

  componentDidMount() {

    if (Platform.OS == 'android') {
      PermissionsAndroid.request('ACCESS_FINE_LOCATION')
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 41.0538538,
            longitude: 28.8056053,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {/* <Marker
            onPress={() => alert("marker tıklandı")}
            title={'212'}
            description={'AVM'}
            pinColor={'blue'}
            opacity={0.8}
            coordinate={{
              latitude: 41.0477744,
              longitude: 28.8117198,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }} /> */}

          {/* <Polygon
            onPress={() => alert('tıklandı')}
            strokeWidth={3}
            strokeColor={'red'}
            fillColor={'yellow'}
            tappable={true}
            coordinates={[
              { latitude: 41.051873, longitude: 28.809529 },
              { latitude: 41.050525, longitude: 28.809171 },
              { latitude: 41.051896, longitude: 28.812319 },
            ]}>
          </Polygon> */}

          {/* <Circle 
          center={{latitude: 41.051873, longitude: 28.809529 }}
          strokeWidth={3}
          strokeColor={'red'}
          fillColor={'yellow'}
          radius={300}
          >
          </Circle> */}

          {/* <Marker
            draggable={true}
            onDrag={(e)=>console.log(`drag:${e.nativeEvent.coordinate}`)}
            onDragStart={(e)=>console.log(`start:${e.nativeEvent.coordinate}`)}
            onDragEnd={(e)=>console.log(`end:${e.nativeEvent.coordinate}`)}
            title={'212'}
            description={'AVM'}
            coordinate={{
              latitude: 41.0477744,
              longitude: 28.8117198,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }} >
              <View style={{width:80, height:80, backgroundColor:'red', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', padding:10, fontSize:15}}>1</Text>
              </View>
            </Marker> */}
            {/* <MapViewDirections 
            apikey={"AIzaSyCrQ-TYsVuzIU8g3oEsY08x5gi5bSrvEkk"}
            origin={{latitude:41.040058, longitude:28.809457}}
            destination={{latitude:41.050725, longitude:28.808352}}
            /> */}
           
          

        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default App;
