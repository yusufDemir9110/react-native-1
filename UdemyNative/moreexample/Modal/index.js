import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native'
//import Modal from 'react-native-modal'
import Modal from 'react-native-modalbox'



class App extends Component {

    constructor() {
        super();
        this.state = {
            modalVisible: false
        }
    }

    // render(){
    //     return(
    //         <View>
    //             <TouchableOpacity onPress={()=>this.setState({modalVisible:true})}>
    //                 <Text>Show modal</Text>
    //             </TouchableOpacity>

    //             <Modal 
    //             //backdropTransitionInTiming={1000}
    //             backdropOpacity={0.2}  //default 0.7
    //             //backdropColor={'red'}
    //             //animationOutTiming={100}
    //             //animationInTiming={100}
    //             isVisible={this.state.modalVisible}
    //             //onBackButtonPress={()=>alert('geri gitti')}
    //             //onModalShow={()=>alert('modal acildi')}
    //             style={{justifyContent:'center', alignItems:'center'}}
    //             customBackdrop={<TouchableWithoutFeedback onPress={()=>this.setState({modalVisible:false})}><View style={{flex:1, backgroundColor:'blue'}}></View></TouchableWithoutFeedback>}
    //             >

    //                 <TouchableOpacity onPress={()=>this.setState({modalVisible:false})}>
    //                 <Text>Hide modal</Text>
    //                 </TouchableOpacity>
    //                     <Text>Modal burası</Text>


    //             </Modal>


    //         </View>
    //     )
    // }

    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => this.refs.modal1.open()}>
                    <Text>Open modal</Text>
                </TouchableOpacity>

                <Modal
                //swipeToClose={false}  //kaydırarak kapatmayı iptal eder
                style={[styles.modal, styles.modal2]}
                position={'bottom'}
                ref={'modal1'} 
                backdrop={false}
                swipeArea={50}
                entry={'top'}
                //isDisabled={true} çalışmasını önler

                >
                
                    <Text>Burası modal</Text>
                    <TouchableOpacity onPress={() => this.refs.modal1.close()}>
                        <Text>close modal</Text>
                    </TouchableOpacity>
                </Modal>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    modal:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    modal2:{
        height:200,
        backgroundColor:'blue'
    }

})

export default App;