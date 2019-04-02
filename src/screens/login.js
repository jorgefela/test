import React, { Component } from "react";
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Animated,
  Switch,
  AlertIOS,
  // ActivityIndicator,

} from 'react-native';
import { Form } from 'native-base';
// import { Container, Form, Icon, Input, Item, Header, Title } from 'native-base';
import Toast, { DURATION } from 'react-native-easy-toast'
// https://www.npmjs.com/package/react-native-easy-toast
import moment from 'moment'
import TouchID from "react-native-touch-id";
// https://www.npmjs.com/package/react-native-touch-id
var window = Dimensions.get('window');
var DomParser = require('react-native-html-parser').DOMParser
var uuid = require('react-native-uuid');
function authenticate() {
  return TouchID.authenticate()
    .then(success => {
      AlertIOS.alert('Authenticated Successfully');
    })
    .catch(error => {
      console.log(error)
      AlertIOS.alert(error.message);
    });
}
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      xmlText: '',
      showPassword: true,
      loginValue: ''
    };
  }


  toggleSwitch = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }
  submitForm = () => {
    // if (this.state.loginValue != 'true') {
    //   this.setState({
    //     showIndicator: true
    //   });

    // } else if (this.state.loginValue == 'true' || this.state.loginValue == null || this.state.loginValue == undefined || this.state.loginValue == '') {
    //   this.setState({
    //     showIndicator: false
    //   })
    // } else {
    //   this.setState({
    //     showIndicator: false
    //   })
    // }
    let sr = `<?xml version="1.0" encoding="utf-8"?>
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Header>
      <AuthHeader xmlns="http://www.tsbestcardsystems.net/CEMSGS/">
      <ClientId>${uuid.v4()}</ClientId>
      <StationId>CARDSTATION6908</StationId>
      <LoginName>${this.state.login}</LoginName>
      <Password>${this.state.password}</Password>
      <LocalTime>${moment().format('YYYY-MM-DDTHH:MM:SS')}</LocalTime>
      </AuthHeader>
      </soap12:Header>
      <soap12:Body>
      <UserAuthentication xmlns="http://www.tsbestcardsystems.net/CEMSGS/">
      <strLoginId>${this.state.login}</strLoginId>
      <strPassword>${this.state.password}</strPassword>
      <stationId>CARDSTATION6908</stationId>
     </UserAuthentication>
     </soap12:Body>
      </soap12:Envelope>`
    console.log(sr)
    axios
      .post('https://tsbestcardsystems.net/CEMSGlobalServices/CEMSGS.asmx', sr, {
        headers: {
          'Content-Type': 'text/xml',
          SOAPAction: 'http://www.tsbestcardsystems.net/CEMSGS/UserAuthentication'
        }
      })
      .then(response => {
        console.log('_______reponseAxios', response)
        this.setState({
          xmlText: response.data
        }, () => {
          let doc = new DomParser().parseFromString(this.state.xmlText, 'text/html')
          var logAuth = doc.getElementsByTagName("UserAuthenticationResult")[0].childNodes[0].nodeValue
          console.log(logAuth)
          // this.setState({
          //   loginValue: logAuth,
          // })
          if (logAuth == 'true') {
            this.props.navigation.navigate('Logout')
          } else {
            this.refs.toast.show(<View><Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Wrong username or password!</Text></View>, DURATION.LENGTH_LONG);
            // this.setState({
            //   showIndicator: false
            // })

          }
        })
      })
      .catch((err) => {
        console.log('fetch', err)
      })
  }

  componentDidMount() {
    console.log(uuid.v4())
    // alert(moment().format('YYYY-MM-DDTHH:MM:SS'))
  }
  clickHandler = () => {
    TouchID.authenticate('')
      .then(success => {
        if (success === true || success == 'true') {
          this.props.navigation.navigate('Logout')
        } else {
          alert('fail')
        }
        AlertIOS.alert('Authenticated Successfully');
      }, () => {
      })
      .catch(error => {
        AlertIOS.alert('TouchID not supported');
      });
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={{}}>
          <Toast
            ref="toast"
            style={{ backgroundColor: 'red', width: 250, marginTop: 30 }}
            position='top'
            positionValue={200}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={0.8}
            textStyle={{ color: 'red' }} />
        </View>

        <View style={styles.middelContainer}>
          <Image style={styles.topImage} source={require('../assest/images/waltlog.png')} />
        </View>


        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.logininContinueText}>to log in continue</Text>
        </View>
        <View style={styles.loginActivationContainer}>
          <Text style={styles.loginText}>Log in</Text>
          <Text style={styles.activationText}>Activation</Text>
        </View>

        <View style={styles.loginContainer}>
          {/* <Image style={styles.touchId} source={require('../assest/icons/user.eps')} /> */}
          {/* <Image style={styles.ImageStyle} source={require('../assest/images/iconfinder_Touch_ID_363335.png')} /> */}

          <TextInput
            value={this.state.login}
            onChangeText={(login) => this.setState({ login })}
            placeholder={'Email'}
            placeholderTextColor={'black'}
            required=""
            style={styles.input}
            required={true} />
          {/* <Image style={styles.touchId} source={require('../assest/icons/lock.eps')} /> */}
          <TextInput
            secureTextEntry={this.state.showPassword}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            required={true}
            placeholder={'Password'}
            placeholderTextColor={'black'}
            style={styles.input} />

          <TouchableOpacity
            style={styles.showText}
            value={!this.state.showPassword}
            onPress={this.toggleSwitch} >
            <Text style={{ color: '#731c26' }}> SHOW</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.touchIdContainerouter}>
          <TouchableOpacity onPress={this.clickHandler} style={styles.touchIDContainerInmner}>
            <View style={styles.touchIDContainer}>
              <Image style={styles.touchId} source={require('../assest/images/iconfinder_Touch_ID_363335.png')} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.loginButtonWrap}>
          <TouchableOpacity
            style={styles.EnterButton}
            underlayColor='#fff'>
            <View>
              <View>
                <Text style={styles.enterText} onPress={this.submitForm}>Log in</Text>
              </View>
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.FoterSlider}>
          <Text onPress={() => this.props.navigation.navigate('Forget')}>Forget your password</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  middelContainer: {
    height: "20%",
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 20,
    // paddingBottom: "10%",
    // paddingTop: "10%"
  },
  topImage: {
    // height: "100%",
    resizeMode: 'contain',
    width: (window.width - 10) / 2,
  },
  welcomeTextContainer: {
    height: "10%",
    justifyContent: 'center',
    paddingLeft: "15%",
    paddingBottom: 10
  },
  welcomeText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  },
  logininContinueText: {
    fontSize: 20,
  },
  loginActivationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: "10%",
    justifyContent: 'space-between',
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingTop: 15,
    paddingBottom: 5
    // paddingTop: 20,
    // paddingBottom: 20
  },
  activationText: {
    fontSize: 15,
    paddingRight:70

    
  },
  loginText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  loginContainer: {
    flex: 1,
    // height: "40%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: "10%",
    paddingTop: 50,


    

  },
  input: {
    width: "70%",
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },

  showText: {
    color: '#731c26',
    marginLeft: "52%",
    bottom: "90%",
  },
  loginButtonWrap: {
    flex: 1,
    height: "10%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20

  },
  touchIdContainerouter: {
    flex: 1,
    height: "10%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  EnterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: "#731c26",
    borderRadius: 50,
    borderWidth: 0,
    // marginRight: 25,
    width: (window.width - 30) / 3,
  },

  enterText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  touchId: {
    height: 55,
    width: (window.width - 60) / 6,
  },
  FoterSlider: {
    height: "10%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10

  },

ImageStyle: {
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'
},
});

