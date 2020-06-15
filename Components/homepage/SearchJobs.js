import React, {useState} from 'react';
import {TextInput, View, ImageBackground, StyleSheet} from 'react-native';

 function SearchJobs() {
   const [value, onChangeText] = useState('Search for job')
   const image = require('../../img/black-claw-hammer-on-brown-wooden-plank-209235.jpg')
  return (
  <ImageBackground source={image} style={styles.image}>       
    <View style={{padding: 30}}>           
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          height: 40,
          borderRadius: 15,
          borderColor: 'white',
          color: 'white'
          }}
        onChangeText={text => onChangeText(text)}
        value={value}
        
        />
    </View>
  </ImageBackground> 
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    aspectRatio: 1.1,
    resizeMode: 'contain',
  },
})

export default SearchJobs;