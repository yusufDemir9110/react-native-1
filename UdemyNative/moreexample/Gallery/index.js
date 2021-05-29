import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { ImageGallery } from '@nlabs/react-native-image-gallery'




class App extends Component {



    render() {

        const images = [];
        images.push(
            {
                url: 'https://klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png',
                id: 1,
                title: 'deneme resim',
                description: 'aciklama'
            },
            {
                url: 'https://www.studiomasterpiece.com/store/wp-content/uploads/2020/05/resim_banksy-300x300.jpg',
                id: 2,
                title: 'deneme resim',
                description: 'aciklama'
            },
            {
                url: 'https://i2.wp.com/bedirhaber.com/wp-content/uploads/2019/08/G%C3%BCzel-bir-resim.jpg?fit=480%2C480&ssl=1',
                id: 3,
                title: 'deneme resim',
                description: 'aciklama'
            }
        )
        return (
            <View style={{ flex: 1 }}>
                <ImageGallery style={{ flex: 1 }} images={images} />

            </View>
        )
    }
}



export default App;