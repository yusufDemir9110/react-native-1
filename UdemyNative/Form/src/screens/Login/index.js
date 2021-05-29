import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {inject, observer} from 'mobx-react'
@inject('MainStore', 'SecondStore')
@observer


export default class Login extends Component{
    _handleSubmit=()=>{
        alert('form post edildi')
    }
    state={
        hidePassword:true
    }
   
    render(){
        return (
        <View style={style.body}>
            <ScrollView>
            <View style={style.header}>
                <Text style={style.title}>Sıgn In</Text>
                <Text>{this.props.MainStore.fullName}</Text>
                <TouchableOpacity onPress={()=>this.props.MainStore.setName("yusuf")}>
                    <Text>yusuf</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.MainStore.setName("sevcan")}>
                    <Text>sevcan</Text>
                </TouchableOpacity>
            </View>
            <View style={style.logo_area}>
                <Image resizeMethod={"auto"} source={require('../../../assets/images/home.png')}></Image>
            </View>
            <View style={style.board}>

                <Formik 
                    initialValues={{
                        username:'',
                        password:''
                    }}
                    onSubmit={this._handleSubmit}
                    validationSchema={Yup.object().shape({
                        username:Yup.string().required("Username gereklidir"),
                        password:Yup.string().required("Password gereklidir")
                    })}>
                    {({values, errors, handleSubmit, handleChange})=>(
                        <View>
                    <View style={style.item}>
                    <TextInput 
                        value={values.username}
                        onChangeText={handleChange('username')}
                        style={style.input}
                        placeholder={"Username"}
                        ></TextInput>
                        {(errors.username)&&<Text style={style.alert}>{errors.username}</Text>}
                </View>
                <View style={style.item}>
                    <TextInput
                        secureTextEntry={this.state.hidePassword} 
                        value={values.password}
                        onChangeText={handleChange('password')}
                        style={style.input}
                        placeholder={"Password"}
                        ></TextInput>
                        {(errors.password)&&<Text style={style.alert}>{errors.password}</Text>}
                    <TouchableOpacity onPress={()=>this.setState({hidePassword:!this.state.hidePassword})} style={{position:"absolute", right:10, top:15}}>
                        <Icon name={(this.state.hidePassword)?"eye-slash":"eye"} size={20}></Icon>
                    </TouchableOpacity>
                </View>
                <View style={[style.item, {flexDirection:"row", justifyContent:"flex-end"}]}>
                    <Text style={{color:"#525464", fontSize:16}}>Forget Your Password?</Text>
                </View>
                <View style={style.item}>
                    <TouchableOpacity onPress={handleSubmit} style={style.button}><Text style={style.text}>Login</Text></TouchableOpacity>
                </View>
                        </View>
                        
                    )}

                </Formik>
                


                
                <View style={[style.item],{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:"#525464"}}>Or</Text>
                </View>
                <View style={style.social}>
                    <TouchableOpacity style={style.socialItem}><Icon name={"facebook"} color={"#3b5999"} size={20}></Icon></TouchableOpacity>
                    <TouchableOpacity style={style.socialItem}><Icon name={"twitter"} color={"#55acee"} size={20}></Icon></TouchableOpacity>
                    <TouchableOpacity style={style.socialItem}><Icon name={"linkedin"} color={"#0077b5"} size={20}></Icon></TouchableOpacity>
                </View>
                <View style={[style.item], {justifyContent:'center', alignItems:'center', marginTop:30}}>
                    <TouchableOpacity>
                        <Text style={{fontSize:17, fontWeight:'500', color:'#525464'}}>Don't have an account? <Text style={{color:'#ffb19d', fontWeight:'700'}}>Sign Up</Text> </Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
            
            </ScrollView>
            

        </View>
        
        )
    }
}

const style=StyleSheet.create({
    body:{backgroundColor:'white', flex:1},
    header:{padding:15, justifyContent:'center', alignItems:'center' },
    title:{fontWeight:'500', fontSize:20, color:'#525464'},
    logo_area:{alignItems:'center', marginTop:40},
    board:{marginTop:30, paddingHorizontal:30},
    item:{marginBottom:20},
    input:{borderWidth:1, borderColor:"#b0b0c3", backgroundColor:'#f7f7f7', paddingVertical:10, paddingHorizontal:30, height:50},
    button:{backgroundColor:"#20c3af", paddingVertical:20, justifyContent:'center', alignItems:'center'},
    text:{textAlign:'center', color:'white', fontSize:17, fontWeight:'700'},
    social:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20
    },
    socialItem:{
        padding:10,
        borderWidth:1,
        borderColor:"#e2e2e0",
        width:100,
        height:60,
        justifyContent:'center',
        alignItems:'center'


    },
    alert:{
        color:"red", fontSize:15
    }
})

