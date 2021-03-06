/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image} from 'react-native';


class Itenary extends Component{
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    <View style={{padding: 10, backgroundColor: 'white'}}>
           <Image source={require('./assets/flash-3.png')} style={{ alignSelf: 'center',height:50, width:50}}/>


         </View>
                    </View>
                    </View>
                    </SafeAreaView>
    );
  }
}
export default Itenary;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
