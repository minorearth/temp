
import React, { useState, useEffect,useCallback } from "react";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { Canvas, Circle, Group, Path, CornerPathEffect, DashPathEffect, DiscretePathEffect, useCanvasRef } from "@shopify/react-native-skia";
import { TextInput } from "react-native-gesture-handler";


export default function App() {
  const [regProps, SetRegProps]=useState({name:"",surname:""})




  return (
    <View style={styles.container}>
      <RegEdit name={"name"} onChangeProps={SetRegProps} propsValue={regProps}/>
      <RegEdit name={"surname"} onChangeProps={SetRegProps} propsValue={regProps}/> 
    </View>
  );

}


export const  RegEdit= ({name,onChangeProps,propsValue})=>{


  const onChange = (value) => {
    console.log(value)

    zu={...propsValue,[name]: value}
    
    console.log(zu)


    onChangeProps(zu)


  }

  return(
    <View style={{}}>
    <Text>
      {name}
    </Text>
    <TextInput value={propsValue[name]} style={{ width: '50%', backgroundColor: "#FFAAFF", height: 40 }} onChangeText={(value) => onChange(value)}>

    </TextInput>
  </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40

  }






})