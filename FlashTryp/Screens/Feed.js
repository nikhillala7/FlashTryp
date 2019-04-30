/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, SafeAreaView, FlatList, Image, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import DescData from '../Data/data.json';
import _ from 'lodash';
const { height, width } = Dimensions.get('window')



class Feed extends Component{
  constructor(props){
    super(props);

    this.state={
      loading: false,
      data: [],
      error:null,
      query:"",
      fullData:[],

    };

  }

  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({ search });
  };

    render() {
      const { search } = this.state;
  
      return (
        <ScrollView>
        <SafeAreaView style={{ flex: 1, padding:10}}>
        <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    <View style={{padding: 10, backgroundColor: 'white'}}>
           <Image source={require('./assets/flash-3.png')} style={{ alignSelf: 'center',height:50, width:50}}/>


         </View>
                    </View>
                    </View>
        
        <SearchBar
        containerStyle={{backgroundColor: 'white',flexDirection: 'row', padding:0, }}
          placeholder="Type Here..."
          lightTheme
          onChangeText={this.handleSearch}
          value={search}
        />
                    <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#BDBBBB' }}>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 , paddingBottom:20}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, paddingBottom:10}}>
                                What can we help you find, Nikhil?
                            </Text>
        
                    
                    
                    </View>
                            
                            </View>
                            </View>

            
           <FlatList
           style={{ flex: 1, backgroundColor: 'white'}}
             data={DescData}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
                 <View >
                   <View style={{paddingBottom:20, paddingTop:20, left:20}}>
                 <Image source={{uri:item.paid}} style={{height:50, width:50 ,paddingBottom:0} } />
                 </View>
                 <View style={{ paddingHorizontal: 20 ,alignItems:'center'}}>


                                <Text style={{ fontSize: 24, fontWeight: '700', alignItems:'center'}}>

                                {item.Title}


                                </Text>

                               

                               

                                <Text style={{ fontWeight: '100', marginTop: 10, alignItems:'center' }}>

                                {item.Tags}

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image source={{uri:item.source}}
                                        style={{ flex: 1, height: null, width: null,  borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        
                                    />
 
                                </View>
                               
                                </View>
                                <View style={{paddingTop:20,left:20, paddingBottom:20}}>




                                <View style={styles.row}>
                                <View style={styles.inputWrap}>
                                 <Image source={{uri:item.share}} style={{height:40, width:40, left:300} }/ >   

                                </View>

                                <View style={styles.inputWrap}>
                                <Image source={{uri:item.like}} style={{height:40, width:40, left:70, } }/ >   

                                </View>
                                <Text style={{ fontWeight: '600', marginTop: 10, right:335, fontSize:15}}>

{item.likes}

</Text>
                              </View>




















                                </View>
                            </View>


             }
             keyExtractor={(item, Title) => Title.toString()}
             ItemSeparatorComponent={this.renderSeparator} 
                  ListHeaderComponent={this.renderHeader}                             


           />
        </SafeAreaView>
        </ScrollView>
      );
    }
  }
  

export default Feed;
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  inputWrap: {
    flex: 1,
    borderColor: "#000000",
    borderBottomWidth: 1
  },
});


