import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'




class App extends Component {



    render() {

        const images = [
            'https://klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png',
            'https://www.studiomasterpiece.com/store/wp-content/uploads/2020/05/resim_banksy-300x300.jpg',
            'https://i2.wp.com/bedirhaber.com/wp-content/uploads/2019/08/G%C3%BCzel-bir-resim.jpg?fit=480%2C480&ssl=1'
        ];
       
        return (
            <View>
                <SliderBox 
                sliderBoxHeight={300}
                onCurrentImagePressed={index=>alert(index)}
                currentImageEmitter={index=>console.warn('current pos'+index)}
                dotColor={'red'}
                inactiveDotColor={'blue'}
                autoplay
                dotStyle={{
                    width:30
                }}
                images={images} />

            </View>
        )
    }
}



export default App;