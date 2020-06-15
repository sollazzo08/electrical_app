import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './Components/navigation/header';
import SearchBar from './Components/homepage/SearchJobs';
import CreateJobButton from './Components/homepage/CreateJob';
import {StyleSheet,SafeAreaView, ImageBackground, View, Text} from 'react-native';
import CreateJob from './Components/homepage/CreateJob';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default SectionListBasics = () => {
    return (
      <NavigationContainer>
         <SafeAreaView>
           <Header/>

        </SafeAreaView>
        
        <Tab.Navigator screenOptions={({route}) =>({tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if(route.name === 'Jobs') {
            iconName = 'ios-flash'
          }
          if(route.name === 'History') {
            iconName = 'ios-paper'
          }
          if(route.name === 'Calendar') {
            iconName = 'ios-calendar'
          }
          if(route.name === 'Profile') {
            iconName = 'ios-person'
          }

          return <Ionicons name={iconName} size={size} color={color}/>;
          
        }})}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor:'gray',
        }}>
        <Tab.Screen name="Jobs" component={SearchBar}/>
        <Tab.Screen name="History" component={CreateJob}/>
        <Tab.Screen name="Calendar" component={CreateJob}/>
        <Tab.Screen name="Profile" component={CreateJob}/>
        </Tab.Navigator>
     </NavigationContainer> 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
})
