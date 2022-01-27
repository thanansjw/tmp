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
    }
    
    //RUN
    ex1();
    function ex21(){
        let cars= {
          color: 'red', 
          wheels: 4, 
          engine: {
            cylinders: 4, 
            size: 2.2
          }
        };
        console.log(cars.color);
        console.log(cars.engine.size);
        }
        
        //RUN
        ex21();
        
        function ex22(){
            let activities = [
                ['Work', 9],
                ['Eat', 1],
                ['Commute', 2],
                ['Play Game', 1],
                ['Sleep', 7]
            ];
            
            console.log(activities[3][0]);
            console.log(activities[2][1]);
            }
            
            //RUN
            ex22();
                        