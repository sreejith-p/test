/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  openCamera = () => {
    ImagePicker.showImagePicker(options, (response) => {
     console.log('Response = ', response);
    
     if (response.didCancel) {
       console.log('User cancelled image picker');
     } else if (response.error) {
       console.log('ImagePicker Error: ', response.error);
     } else if (response.customButton) {
       console.log('User tapped custom button: ', response.customButton);
     } else {
       const source = { uri: response.uri };
  //  alert(response.uri);
       // You can also display the image using data:
       // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
       this.setState({
         avatarSource: source,
       });
     }
   });
   }

  // openCamera = () => {
  //   // Launch Camera:
  //   ImagePicker.launchCamera(options, (response) => {
  //     // Same code as in above section!
  //   });
 

  //  }
  //  openGallery = () => {
  //     // Open Image Library:
  //     ImagePicker.launchImageLibrary(options, (response) => {
  //       // Same code as in above section!
  //     });
  // }
  
  render() {
    return (
      <View style={styles.container}>
      
      <Button
        onPress={() => {this.openCamera()}}
        title="Select ID"
        color="#841584"
      />

   
      
    </View>
    );
  }
}
const options = {
  title: 'Select ID Card',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
