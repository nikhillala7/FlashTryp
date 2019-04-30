/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Feed from "./Screens/Feed";
import Itenary from "./Screens/Itenary";
import Fav from "./Screens/Fav";
import Mike from "./Screens/Mike";


class App extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Mike:{
    screen:Mike,
    navigationOptions: {
      tabBarLabel: 'MIKE',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/mike.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Feed:{
    screen:Feed,
    navigationOptions: {
      tabBarLabel: 'FEED',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/flash.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Fav:{
    screen:Fav,
    navigationOptions: {
      tabBarLabel: 'FAV',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/heart.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Itenary:{
    screen:Itenary,
    navigationOptions: {
      tabBarLabel: 'ITENARY',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/calendar.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  
},{
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
