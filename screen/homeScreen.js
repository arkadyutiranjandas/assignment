import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Home({ navigation }) {
  return (
    <View style={{backgroundColor:'#fff'}}>
      <Text style={{fontSize:20,paddingLeft:15,paddingTop:16,fontWeight:'bold'}}>Coose Your Best</Text>
      <Text style={{fontSize:20,paddingLeft:15,paddingTop:10,fontWeight:'bold'}}>Furniture</Text>
      <Text style={{fontWeight:13,paddingLeft:15,paddingTop:10,color:'#c0bfbf'}}>High quality Furniture</Text>
      {/* <Text  onPress={() => navigation.navigate('Product')} >Go to product</Text> */}
      <View style={{marginLeft:23,paddingTop:20}}>
         <TextInput
            style={{ height: 50,width:'93%', borderWidth: .2,borderRadius: 20,padding:10,color:'#c0bfbf'}}
            placeholder ='Search'
        /> 
      </View>
      <View style={{paddingTop:20}}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                    <Text style={{margin:20,color:'#fff',backgroundColor:'#f3a300',fontSize:15,padding:10,paddingLeft:30,paddingRight:30,borderRadius:15}}>Chair</Text>
                    <Text style={{margin:20,color:'#000',backgroundColor:'#f5f6fb',fontSize:15,padding:10,paddingLeft:30,paddingRight:30,borderRadius:15}}>Bed</Text>
                    <Text style={{margin:20,color:'#000',backgroundColor:'#f5f6fb',fontSize:15,padding:10,paddingLeft:30,paddingRight:30,borderRadius:15}}>Items</Text>
                    <Text style={{margin:20,color:'#000',backgroundColor:'#f5f6fb',fontSize:15,padding:10,paddingLeft:30,paddingRight:30,borderRadius:15}}>Cupt</Text>
            </ScrollView>
      </View>

      <View style={{flexDirection:"row",marginLeft:35,marginTop:25,backgroundColor:'#f5f6fb',width:'80%',padding:20,borderRadius:15}} >
        <Image
            style={{height:120,width:120,marginRight:10,borderRadius:10}}
            source={{
            uri: 'https://homedesignlover.com/wp-content/uploads/2012/12/12-La-Divine.jpg',
            }}
        />
        <View>
            <Text style={{fontSize:15,fontWeight:'bold',marginLeft:15}}  onPress={() => navigation.navigate('Product')}>Gray Chari</Text>
            <Text style={{fontSize:10,fontWeight:'bold',marginLeft:15,color:'#c0bfbf'}}>Comfortable</Text>
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>$7,83</Text>
        </View>
      </View>

      <View style={{flexDirection:"row",marginLeft:35,marginTop:25,backgroundColor:'#f5f6fb',width:'80%',padding:20,borderRadius:15}}  onPress={() => navigation.navigate('Product')}>
        <Image
            style={{height:120,width:120,marginRight:10,borderRadius:10}}
            source={{
            uri: 'https://homedesignlover.com/wp-content/uploads/2012/12/12-La-Divine.jpg',
            }}
        />
        <View>
            <Text style={{fontSize:15,fontWeight:'bold',marginLeft:15}}  onPress={() => navigation.navigate('Product')}>Gray Chari</Text>
            <Text style={{fontSize:10,fontWeight:'bold',marginLeft:15,color:'#c0bfbf'}}>Comfortable</Text>
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>$7,83</Text>
        </View>
      </View>

      <View style={{flexDirection:"row",marginLeft:35,marginTop:25,backgroundColor:'#f5f6fb',width:'80%',padding:20,borderRadius:15}}  onPress={() => navigation.navigate('Product')}>
        <Image
            style={{height:120,width:120,marginRight:10,borderRadius:10}}
            source={{
            uri: 'https://homedesignlover.com/wp-content/uploads/2012/12/12-La-Divine.jpg',
            }}
        />
        <View>
            <Text style={{fontSize:15,fontWeight:'bold',marginLeft:15}}  onPress={() => navigation.navigate('Product')}>Gray Chari</Text>
            <Text style={{fontSize:10,fontWeight:'bold',marginLeft:15,color:'#c0bfbf'}}>Comfortable</Text>
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>$7,83</Text>
        </View>
      </View>
      
      
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
