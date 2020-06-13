import React from 'react';
import {Text, View} from 'react-native';



function header() {
  return (
    <View style={{backgroundColor: '#E63946',flex: 0.1, marginTop: 45,}}>
      <Text style={{color: 'white' , textAlign: 'center', paddingTop: 25, fontSize: 30}}>
          Electrical Estimator 
      </Text>
    </View>
  )
}



export default header;