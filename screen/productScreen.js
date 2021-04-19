import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';


export default function Product({ navigation }) {
  return (
    <View style={{backgroundColor:'#fff'}}>
    <View style={{alignItems:'center',alignContent:'center'}}>
        <Image
            style={{height:300,width:'100%',marginRight:10,alignItems:'center'}}
            source={{
            uri: 'https://homedesignlover.com/wp-content/uploads/2012/12/12-La-Divine.jpg',
            }}
        />
        
    </View>
        <Text style={{marginTop:20,marginLeft:20 ,fontSize:20,fontWeight:'bold'}}>Gray Chari</Text>
        <Text style={{paddingLeft:20,paddingTop:15 ,fontSize:15}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
            eap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        </Text>
        <View style={{marginTop:10,paddingLeft:20,flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>color</Text>
            <View style={{borderRadius:'50%',backgroundColor:'#000',padding:10,marginLeft:10}}></View>
            <View style={{borderRadius:'50%',backgroundColor:'#f44336',padding:10,marginLeft:10}}></View>
            <View style={{borderRadius:'50%',backgroundColor:'#3f51b5',padding:10,marginLeft:10}}></View>
        </View>
        <View style={{flexDirection:'row',marginTop:15}}>
            <Text style={{marginLeft:25,fontSize:25,fontWeight:'bold'}}>$7.98</Text>
            <View style={{marginLeft:150}}>
                <Text onPress={() => navigation.navigate('Cart')} style={{fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#faa600',paddingLeft:30,paddingRight:30,padding:6,borderRadius:15}}>Cart</Text>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
