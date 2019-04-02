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
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // passwordreset() {
  //   this.props.navigation.navigate('Login')
  // }
  render() {
    return (
      <Container>
        <Content >
          <Card style={styles.cardItemContainer}>
            <CardItem header style={styles.cardItemContainer}>
              <View  style={styles.cardHeder} >
                <Text style={styles.visnameText}>Visa Classic Credit</Text>
                <Text style={styles.cardnumText}>4532 **** **** 3242</Text>
              </View>
            </CardItem>
            <CardItem style={styles.cardItemContainer}>
              <Body>
                <Text style={styles.balanceText}>
                  your balance
              </Text>
                <Text style={styles.amountText}>
                  $ 21,332.00
              </Text>
              </Body>
            </CardItem>

          </Card>



          <Card style={styles.cardItemSecondContainer}>
            <CardItem header style={styles.cardItemContainer}>
              <View  style={styles.cardHeder} >
                <Text style={styles.visnameText}>Visa Classic Credit</Text>
                <Text style={styles.cardnumText}>4532 **** **** 3242</Text>
              </View>
            </CardItem>
            <CardItem style={styles.cardItemContainer}>
              <Body>
                <Text style={styles.balanceText}>
                  your balance
              </Text>
                <Text style={styles.amountText}>
                  $ 21,332.00
              </Text>
              </Body>
            </CardItem>

          </Card>
        </Content>
      </Container>

    );
  }
}
{/* <Text>
NativeBase is a free and open source framework that enable
</Text> */}


const styles = StyleSheet.create({

  cardItemContainer: {
    borderRadius: 20,
    borderWidth: 0,

    backgroundColor: '#731c26',
    color: '#731c26',

  },
  cardItemSecondContainer:{
    backgroundColor: "#731c26",
    borderRadius: 20,
    borderWidth: 0,
  },
  visnameText: {
    fontSize: 20,
    color: 'white'

  },
  cardHeder:{
    justifyContent:'center',
    alignItem:'center'

  },
  cardnumText: {
    fontSize: 15,
    color: 'white'

  },
  balanceText: {
    fontSize: 18,
    color: 'white'

  },
  amountText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'

  }
  // container: {
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // contineuContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center', 
  // },
  // emailContainer: {
  //   paddingTop: "30%",
  // },
  // orText: {
  //   padding: 10,
  //   fontSize:20

  // }, 
  // input: {
  //   width: 200,
  //   height: 40,   
  //   borderBottomColor: 'grey',
  //   borderBottomWidth: 1,
  //   borderColor: 'grey',

  // },



});
