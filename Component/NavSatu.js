import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Myicons from 'react-native-vector-icons/Ionicons';

class KomponenSatu extends Component {
    static navigationOptions = {
        title: 'Komponen Satu',
        headerTintColor: 'blue',
        headerStyle: {
          backgroundColor: 'yellowgreen',
        },
        headerTitleStyle: {
          fontStyle: 'italic',
          fontWeight: 'bold'
        },
        headerRight: (
            <Button
                onPress = {
                    () => {Alert.alert('Tombol diklik!')}
                }
                title = 'klik'
                color = 'black'
            />
        )
      }

      constructor(){
          super();
          this.state = {
              namaku: 'Caca',
              usiaku: 21
          }
      }

    render(){
        return(
            <View>
                <Text style={{fontSize: 30}}>
                    Ini Komponen Satu
                </Text>
                {/* <Myicons name='logo-instagram' size={30} color='red'/> */}
                <Button title = 'Ke halaman dua andi' onPress={() => {
                    this.props.navigation.navigate('HalDua', {
                        nama: 'Andi', usia: 28
                    })
                }}/>
                <Button title = 'Ke halaman dua caca' onPress={() => {
                    this.props.navigation.navigate('HalDua', {
                        nama: this.state.namaku, 
                        usia: this.state.usiaku
                    })
                }}/>
            </View>
        )
    }
}

export default KomponenSatu;