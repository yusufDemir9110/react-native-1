import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native'

import VersionNumber from 'react-native-version-number'


class App extends Component{

    componentDidMount(){
        console.log(VersionNumber.appVersion)
        console.log(VersionNumber.buildVersion)
        console.log(VersionNumber.bundleIdentifier)

    }
    
    render(){
        return(
            <View>
              <Text>App Version: {VersionNumber.appVersion}</Text>
              <Text>build Version: {VersionNumber.buildVersion}</Text>
              <Text>bundle identifier: {VersionNumber.bundleIdentifier}</Text>
            </View>
        )
    }
}

export default App;