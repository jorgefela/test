import React, { Component } from 'react';
import { View, } from 'react-native'
import {
   StyleSheet,
   Text,
   TouchableHighlight,

} from 'react-native';
class Logout extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }


   onLogout() {
      this.props.navigation.navigate('Dashboard')  
   }
   render() {
      return (

         <View style={styles.container}>     
            <TouchableHighlight
               style={{

                  backgroundColor: "#731c26",
                  //  marginTop: 40,
                  height: 40,
                  width: 160,
                  borderRadius: 50,
                  borderWidth: 0
               }} underlayColor='#fff'>

               <View>
                  <View >
                     <Text
                        style={{
                           color: 'white',
                           textAlign: 'center',
                           marginTop: 5,
                           fontSize: 20,

                        }} onPress={this.onLogout.bind(this)}>Logout</Text>
                  </View>

               </View>
            </TouchableHighlight>

         </View>
      );
   }
}
export default Logout

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 20
   },
   text: {
      color: '#41cdf4',
   },
   capitalLetter: {
      color: 'red',
      fontSize: 20
   },
   wordBold: {
      fontWeight: 'bold',
      color: 'black'
   },
   italicText: {
      color: '#37859b',
      fontStyle: 'italic'
   },
   textShadow: {
      textShadowColor: 'red',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 5
   }
})