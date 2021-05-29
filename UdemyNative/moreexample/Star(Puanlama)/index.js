import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import StarRating from 'react-native-star-rating'



class App extends Component {

    state={
        star:2
    }

    

    render() {

        
        return (
            <View>
                <StarRating
                maxStars={5}
                rating={this.state.star}
                daisabled={false} //su an tıklanabiliyor
                selectedStar={(star)=>this.setState({star})}
                emptyStar={'car'}
                emptyStarColor={'green'}
                fullStarColor={'red'}
                >

                </StarRating>

            </View>
        )
    }
}



export default App;