import React from 'react';
import {Text, View} from 'react-native';



function header() {
  return (
    <View style={{backgroundColor: '#E63946'}}>
      <Text style={{color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    fontSize: 30}}>
          Electrical Estimator 
      </Text>
    </View>
  )
}



export default header;