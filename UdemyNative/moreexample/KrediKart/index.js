import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import {CreditCardInput} from 'react-native-credit-card-input'



class App extends Component {

    state={
        valid:false,
        status:{
            cvc:false,
            expiry:false,
            name:false,
            number:false
        }
    }

    _onChange=(form)=>{
        this.setState({
            valid:form.valid,
            status:{
                cvc:form.status.cvc=='valid'?true:false,
                expiry:form.status.expiry=='valid'?true:false,
                name:form.status.name=='valid'?true:false,
                number:form.status.number=='valid'?true:false
            }
        })
    }

    render() {
        
        
        return (
            <View>
                <CreditCardInput
                    autoFocus={true}
                    placeholders={{
                        number:'Kart numarası',
                        expiry:'expriy'
                    }}
                    invalidColor={'red'}
                    validColor={'green'}
                    placeholderColor={'blue'}
                    labels={{
                        number:'kart numarası',
                        expiry:'son',
                        cvc:'cvc',
                        name:'ad soyad'
                    }}
                    requiresName={true}
                    onChange={this._onChange}
                />
                <Text>{(this.state.valid)?'devam edebilirsin':'devam edemezsin'}</Text>
                <Text>{(this.state.status.number)?'no doğru':'no yanlış'}</Text>
                <Text>{(this.state.status.expiry)?'expiry doğru':'expiry yanlış'}</Text>
                <Text>{(this.state.status.cvc)?'cvc doğru':'cvc yanlış'}</Text>
                <Text>{(this.state.status.name)?'ad doğru':'ad yanlış'}</Text>
            </View>
        )
    }
}



export default App;