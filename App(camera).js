
import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Camera } from 'expo-camera'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Canvas, Circle, Group, Path, CornerPathEffect, DashPathEffect, DiscretePathEffect, useCanvasRef } from "@shopify/react-native-skia";


export default function App() {

  const [permission, requestPermission] = useState();
  console.log(permission)
  useEffect(() => {
    (async () => {


      const perm = await Camera.requestCameraPermissionsAsync()
      console.log(perm)
    })()



  }, [])



  return (
    <View style={styles.container}>
      <Camera style={{ flex: 1 }}>

      </Camera>
      <View style={styles.controlPanel}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => ClearPathes()}>
          <Text>Очистить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => ClearPathes()}>
          <Text>Камера</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => SaveImage()}>
          <Text>Сохранить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  controlPanel: {
    height: '10%',
    flexDirection: "row",
    backgroundColor: "#000000"




  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    margin: 10



  },
  container: {
    flex: 1

  }






})