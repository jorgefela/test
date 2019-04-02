import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Text
} from 'react-native';
var window = Dimensions.get('window');

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount = () => {
    this.timeoutCheck = setTimeout(() => {
      this.props.navigation.navigate('Login')
    },
      1000);
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onfrontPage}>
          <View style={styles.container}>
            <Image style={styles.splashImage} source={require('../assest/images/waltlog.png')} />
            <Text style={styles.welcomestyle}>Welcome to</Text>
            <Text style={styles.mobileBanking}>Mobile Banking</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop:150,
    alignItems: 'center',
  },
  welcomestyle:{
  color:'brown',
  paddingTop:40
  },
  mobileBanking:{
  color:'brown',
  paddingTop:10,
  fontSize: 20,
  }

  
});