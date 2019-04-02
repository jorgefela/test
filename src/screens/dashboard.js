import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Button } from 'react-native';
import BottomDrawer from 'rn-bottom-drawer';

const TAB_BAR_HEIGHT = 49;
var window = Dimensions.get('window');
export default class Dashboard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {

      };
   }
   onConfirm() {
      this.props.navigation.navigate('Login')

   }
   onCancle = () => {     
      this.props.navigation.navigate('Logout')
   }
   renderContent = () => {
      return (
         <View style={styles.container}>
            <View>
               <Text style={styles.confirmtext}>Confirm logout?</Text>
            </View>
            <View style={styles.foterPopUpcontainer}>

               <TouchableHighlight
                  style={{
                     height: "50%",
                     width: "40%",
                     marginTop: 40,
                     borderRadius: 50,
                     borderWidth: 1,
                     borderColor: '#731c26',
                  }}>
                  <Text onPress={this.onCancle}
                     style={{
                        color: 'black',
                        textAlign: 'center',
                        marginTop: 10,
                     }}
                  >Cancel</Text>
               </TouchableHighlight>


               <TouchableHighlight
                  style={{
                     height: "50%",
                     width: "40%",
                     backgroundColor: "#731c26",                   
                     marginTop: 40,
                     borderRadius: 50,
                     borderWidth: 0
                  }}>
                  <Text
                     style={{
                        color: 'white',
                        textAlign: 'center',
                        marginTop: 10,
                     }}
                     onPress={this.onConfirm.bind(this)}
                  >Confirm</Text>
               </TouchableHighlight>
            </View>
         </View>
      )
   }

   render() {
      return (
         <BottomDrawer
            containerHeight={110}
            offset={TAB_BAR_HEIGHT}
         >
            {this.renderContent()}
         </BottomDrawer>
      )
   }
}
const styles = StyleSheet.create({
   container: {
      backgroundColor: '#f2f2f2',
      flex: 1
      // width: window.width,
      // height: window.height
   },
   foterPopUpcontainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10
   },
   confirmtext: {
      textAlign: 'center',
      top: 10
   }

});
