import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

 function SearchJobs() {
   const [value, onChangeText] = useState('Search for job')
  
   
  return (
    <View style={{padding: 30}}>
      <TextInput
        style={{borderWidth: 1, borderColor: 'black', height: 40, borderRadius: 15}}
        onChangeText={text => onChangeText(text)}
        value={value}
  
      />
    </View>
  )
}

export default SearchJobs;