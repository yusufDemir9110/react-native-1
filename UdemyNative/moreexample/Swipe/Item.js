import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';

const Item = ({ item }) => {
    return (
        <SwipeListView
            data={[item]}
            renderItem={(data) => (
                <View style={style.item}><Text>{item}</Text></View>
            )}
            renderHiddenItem={(data) => (
                <View style={style.rowBack}>
                    <TouchableOpacity
                        style={[style.BackLeftBtn]}
                    ><Text style={{ color: 'white' }}>Arşivle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[style.BackRightBtn,{right:70, backgroundColor:'blue'}]}
                    ><Text style={{ color: 'white' }}>Düzenle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.BackRightBtn}
                    ><Text style={{ color: 'white' }}>Sil</Text>
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={80}
            rightOpenValue={-150}
        />
    )


}

const style = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd'

    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BackRightBtn: {
        paddingVertical: 13,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: 60,
        margin: 5,
        right: 0,
        backgroundColor: 'red',
        borderRadius:5
    },
    BackLeftBtn:{
        paddingVertical: 13,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: 60,
        margin: 5,
        left: 0,
        backgroundColor: 'green',
        borderRadius:5

    }
})

export default Item;