import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class KomponenSatu extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('nama'),
            headerTintColor: 'gray',
            headerStyle: {
            backgroundColor: 'yellow',
            },
            headerTitleStyle: {
            fontStyle: 'italic',
            fontWeight: 'bold'
            }
        } 
    }

    render(){

        var name = this.props.navigation.getParam('nama')
        var age = this.props.navigation.getParam('usia')

        return(
            <View>
                <Text style={{fontSize: 30}}>
                    Hi {name}
                </Text>
                <Button title = 'Ke halaman satu' onPress={() => {
                    this.props.navigation.navigate('HalSatu')
                }}/>
                <Text style={{fontSize: 25}}>
                    Halo, {name} ({age} th)
                </Text>
            </View>
        )
    }
}

export default KomponenSatu;