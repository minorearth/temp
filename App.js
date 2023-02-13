import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState,useEffect,useRef } from 'react';

export default function App() {

  const [EditText, setEditText]=useState(1000)



  


  return (
    <View style={styles.main}>
      <TextInput style={styles.edit}
        value={EditText}
        onChangeText = {(value)=>setEditText(value)}

      >
      </TextInput>
      <Text style={{width: Number(EditText), backgroundColor: '#FFFFFF'}}> Hello</Text>
      <Text>{EditText}</Text>
      <Text>{EditText}</Text>
      <Text>{EditText}</Text>
      <Text>{EditText}</Text>
      <Text>{EditText+'asdasd'}</Text>

    
      <Text>Hello</Text>

    </View>

  );
}

const styles = StyleSheet.create({
edit:{


  backgroundColor: "#FFFFFF",
  width: "70%",
  height: 50,
  borderRadius:10,
},

  main: {
    flex: 1,
    backgroundColor: "#FF00AA",
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
    paddingTop:50,
  },



});