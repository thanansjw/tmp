import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
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
function ex1(){
    let a = "hello world";
    let b = 123;
    let c = true;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a,b,c);
    View style={{ flex: 1, flexDirection: 'column' }}>
    {/* Fixed Size */}
    <View style={{ flexDirection: 'row' , justifyContent : 'space-between' , marginTop : 50}}>
        <Image style={{ width: 150, height: 100 }} source={require('...')} />
        <Image style={{ width: 150, height: 150}} source={require('...')} />
        <Image style={{ width: 150, height: 150, borderRadius: 150 / 2 }} source={require('...')} />
    </View>
    
</View>
View style={{ flex: 1, flexDirection: 'column' }}>
    
    <View style={{ flexDirection: 'row' , marginTop : 20 }}>
        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={require('...')} />
    </View>

    <View style={{ flexDirection: 'row' , marginTop : 20 }}>
        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={require('...')} />
    </View>

    <View style={{ flexDirection: 'row' , marginTop : 20, backgroundColor : 'gray' }}>
        <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={require('...')} />
    </View>

</View>
xport default function Greeting (props){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
}

    }
