import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native'

const Item = ({item}) => {
    return (<View style={ style.card }>
        <Image style={style.avatar} source={{uri:item.profile_image}}/>
        <View style={{marginLeft:10}}>
            <Text>{item.display_name}</Text>
            <Text>{item.location}</Text>
        </View>
        
       
    </View>)
};

const style=StyleSheet.create({
    card:{
        flex:1, 
        padding: 15, 
        backgroundColor: 'lightblue', 
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'blue',
        alignItems:'center'

    },
    avatar:{
        width:50, 
        height:50,
        borderRadius:100
    }
})

export default Item;