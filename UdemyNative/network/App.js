

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

import axios from 'axios'

import Item from './item'

class App extends Component {
  componentDidMount() {
    this.fetchUser();
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((res) => {
  //       this.setState({ data: res.data })

  //     })
  //     .catch((e) => console.log(e))
   }

  fetchUser(page=1, isLoadMore=false){
    this.setState({loading:true})
    setTimeout(()=>{
      const url=`https://api.stackexchange.com/2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`
    axios.get(url).then((res)=>{
      const{data}=this.state;
      let newData=(isLoadMore)?data.concat(res.data.items):res.data.items;
      this.setState({
        page,
        data:newData, 
        loading:false, 
        isRefresh:false})
    })
    },500)
    
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading:true,
      isRefresh:false,
      page:1
    }
  }

  _renderItem = ({ item }) => {
   return <Item item={item}/>
  }

  onRefresh=()=>{
    this.setState({isRefresh:true});
    this.fetchUser();
  }

  loadMore=()=>{
    const {page}=this.state;
    var newPage=page+1;
    this.fetchUser(newPage,true)
  }

  renderFooter=()=>{
    if(!this.state.loading) return null;
    return <ActivityIndicator style={{color:'red'}}/>
  }
  // renderSeperator=()=>{
  //   return (
  //     <View style={{height:3, width:'100%', backgroundColor:'blue'}}/>
  //   )
  // }

  render() {
    const { data, loading, isRefresh } = this.state;
    return (
      <View>
      
        <FlatList
          style={{padding:10}}
          data={data}
          numColumns={1}
          refreshControl={
            <RefreshControl 
            refreshing={isRefresh}
            onRefresh={this.onRefresh}
            ></RefreshControl>
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
          ListEmptyComponent={()=><View><Text>Veri yok</Text></View> }
          ListFooterComponent={this.renderFooter}
          ListHeaderComponent={()=><View><Text>Flatlist başı</Text></View>}
          ListHeaderComponentStyle={{backgroundColor:'blue'}}
          onEndReachedThreshold={0.2}
          onEndReached={this.loadMore}
          //ItemSeparatorComponent={this.renderSeperator}
        />
        
      </View>
    )

  }
}

export default App;
