import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView,Dimensions  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Cart() {
  return (
    <View>
        <ScrollView style={{height:windowHeight/2}}>
            <View style={{flexDirection:"row",marginLeft:35,marginTop:25,backgroundColor:'#f5f6fb',width:'80%',padding:20,borderRadius:15}} >
            <Image
                style={{height:120,width:120,marginRight:10,borderRadius:10}}
                source={{
                uri: 'https://homedesignlover.com/wp-content/uploads/2012/12/12-La-Divine.jpg',
                }}
            />
            <View>
                <Text style={{fontSize:15,fontWeight:'bold',marginLeft:15}} >Gray Chari</Text>
                <Text style={{fontSize:10,fontWeight:'bold',marginLeft:15,color:'#c0bfbf'}}>Comfortable</Text>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>$7,83</Text>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:8}}>
                    <Text style={{padding:10,borderRadius:'50%',marginRight:10,backgroundColor:'#d3d3d3',fontSize:10}}>-</Text>
                    <Text style={{padding:10,borderRadius:'50%',marginRight:10,fontSize:10}}>1</Text>
                    <Text style={{padding:10,borderRadius:'50%',backgroundColor:'#544181',fontSize:10,color:'#fff'}}>+</Text>
                </View>
            </View>
        </View>

        <View style={{flexDirection:"row",marginLeft:35,marginTop:25,backgroundColor:'#f5f6fb',width:'80%',padding:20,borderRadius:15}} >
            <Image
                style={{height:120,width:120,marginRight:10,borderRadius:10}}
                source={{
                uri: 'https://homedesignlover.com/wp-content/uploads/2012/12/12-La-Divine.jpg',
                }}
            />
            <View>
                <Text style={{fontSize:15,fontWeight:'bold',marginLeft:15}} >Gray Chari</Text>
                <Text style={{fontSize:10,fontWeight:'bold',marginLeft:15,color:'#c0bfbf'}}>Comfortable</Text>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>$7,83</Text>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:8}}>
                    <Text style={{padding:10,borderRadius:'50%',marginRight:10,backgroundColor:'#d3d3d3',fontSize:10}}>-</Text>
                    <Text style={{padding:10,borderRadius:'50%',marginRight:10,fontSize:10}}>1</Text>
                    <Text style={{padding:10,borderRadius:'50%',backgroundColor:'#544181',fontSize:10,color:'#fff'}}>+</Text>
                </View>
            </View>
        </View>

        <View style={{flexDirection:"row",marginLeft:35,marginTop:25,backgroundColor:'#f5f6fb',width:'80%',padding:20,borderRadius:15}} >
            <Image
                style={{height:120,width:120,marginRight:10,borderRadius:10}}
                source={{
                uri: 'https://homedesignlover.com/wp-content/uploads/2012/12/12-La-Divine.jpg',
                }}
            />
            <View>
                <Text style={{fontSize:15,fontWeight:'bold',marginLeft:15}} >Gray Chari</Text>
                <Text style={{fontSize:10,fontWeight:'bold',marginLeft:15,color:'#c0bfbf'}}>Comfortable</Text>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>$7,83</Text>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:8}}>
                    <Text style={{padding:10,borderRadius:'50%',marginRight:10,backgroundColor:'#d3d3d3',fontSize:10}}>-</Text>
                    <Text style={{padding:10,borderRadius:'50%',marginRight:10,fontSize:10}}>1</Text>
                    <Text style={{padding:10,borderRadius:'50%',backgroundColor:'#544181',fontSize:10,color:'#fff'}}>+</Text>
                </View>
            </View>
        </View>
        </ScrollView>
        <View style={{backgroundColor:'#fff',minHeight:windowHeight/2.5,borderTopLeftRadius: 20,borderTopRightRadius: 20}}>
            <Text style={{marginLeft:15,marginTop:25, fontSize:20,fontWeight:'bold'}}>Selected Items</Text>
            <View style={{marginLeft:15,marginTop:25}}>
                <Text style={{fontSize:15}}>Grey Chair </Text>
                <Text style={{position:'absolute',right:15,fontSize:15}}>$7.98</Text>
            </View>
            <View style={{marginLeft:15,marginTop:25}}>
                <Text style={{fontSize:15}}>Laya Chair</Text>
                <Text style={{position:'absolute',right:15,fontSize:15}}>$3.28</Text>
            </View>
            <View style={{marginLeft:15,marginTop:25}}>
               <Text style={{fontSize:18,fontWeight:'bold'}}>Total</Text>
               <Text style={{position:'absolute',right:15,fontSize:18,fontWeight:'bold'}}>$11.26</Text> 
            </View>
            <Text style={{backgroundColor:'#f3a300',marginLeft:90,width:'60%',color:'#fff',alignItems:'center',alignContent:'center',padding:10,paddingLeft:80,borderRadius:15,marginTop:15}}>CheckOut</Text>
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
