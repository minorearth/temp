import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    margin:50,
    backgroundColor:'#AAFFFF',flex:1

  },
 
});



const WordList = ({children}) => {
  // console.log(props)

  return(
  <View style={styles.root}>
    {children.map((item)=>(<View key={item.id}>{item}</View>)   )}
   
  </View>)
};

export default WordList;
