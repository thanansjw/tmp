import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Health from './screens/week5/Health;

export default function App() {
  return (
    <Health />
  );
  import React, { useState } from 'react';
...
export default function Bmi() {
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    ...
    port default function Bmi() {
        ...
        console.log("STATE : ", weight, height, bmi);
    
        const onPressButton = () => {
            console.log("Calculate button is pressed!!!");
            let output = (weight/ (height/100 * height/100));
            setBmi(output.toFixed(2));
        };
    
        return (
        <View ...>
    
            ...
    
            <Button title="Calculate" onPress={ onPressButton } />
        </View>
        );
    }
<TouchableOpacity onPress={onPressButton}>
    <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
        <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
            Calculate
        </Text>
    </View>
</TouchableOpacity>
    
}
