import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Button,
  Text,
  Image,
} from 'react-native';

export default class Forget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      email:'',
    };
  }
  passwordreset() {
    this.props.navigation.navigate('Cards')
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.emailContainer}>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            placeholder={'Email'}
            placeholderTextColor={'black'}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <Text style={styles.orText}>or</Text>

        <View style={styles.contineuContainer}>


          <View style={styles.mobileContainer}>
            <TextInput
              value={this.state.mobile}
              onChangeText={(mobile) => this.setState({ mobile })}
              placeholder={'Mobile'}
              placeholderTextColor={'black'}
              secureTextEntry={true}
              style={styles.input}
              keyboardType='numeric'
            />
          </View>
          <TouchableHighlight
            style={{
              height: 40,
              width: 160,
              backgroundColor: "#731c26",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 60,
              borderRadius: 50,
              borderWidth: 0
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 5,
                fontSize: 20,

              }} onPress={this.passwordreset.bind(this)}>Continue</Text>

          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contineuContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  emailContainer: {
    paddingTop: "30%",
  },
  orText: {
    padding: 10,
    fontSize:20

  }, 
  input: {
    width: 200,
    height: 40,   
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderColor: 'grey',
   
  },



});
