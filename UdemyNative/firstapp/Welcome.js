import React, { Component } from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

class Welcome extends Component {
    
    render() {
        const{name, age}=this.props
        return (
            <View>
                <Text>{name} {age}</Text>
            </View>
        )
    }
}


Welcome.propTypes={
    name:PropTypes.string.isRequired
}
Welcome.defaultProps={
    age:28
}

export default Welcome;