
import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Canvas, Circle, Group, Path, CornerPathEffect, DashPathEffect, DiscretePathEffect, useCanvasRef } from "@shopify/react-native-skia";


export default function App() {
  useEffect(() => {
    (async () => {
      const permission = await MediaLibrary.requestPermissionsAsync()
    })()


  }, [])
  const [tGestureStart, setTGestureStart] = useState();
  const [tGestureMove, setTGestureMove] = useState();
  const [tGestureUpdate, setTGestureUpdate] = useState();
  const [tGestureEnd, setTGestureEnd] = useState();

  const [pathes, setPathes] = useState('')
  const canvasRef = useCanvasRef()

  const pan = Gesture.Pan()
    onStart((g) => {
      setPathes(`${pathes} M ${g.x} ${g.y}`)
    })
    .onUpdate((g) => {
      setPathes(`${pathes} L ${g.x} ${g.y}`)

    }).minDistance(1)
    ;

  const ClearPathes = () => {

    setPathes('')


  }

  const SaveImage = () => {
    const image = canvasRef.current.makeImageSnapshot()
    const strToSave = image.encodeToBase64()
    const filename = FileSystem.documentDirectory + "some_unique_file_name5.png"
    // console.log(filename)
    const t = async () => {
      await FileSystem.writeAsStringAsync(filename, strToSave, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const mediaResult = await MediaLibrary.saveToLibraryAsync(filename);
 
    }
    t()


    




  }


  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GestureDetector gesture={pan}>
          <View style={{ flex: 1, backgroundColor: "#000000" }}>
            <Canvas style={{ flex: 1 }} ref={canvasRef}>
              <Path
                path={pathes}
                strokeWidth={5}
                color="white"
                style="stroke"

              >
                {/* <CornerPathEffect r={50} /> */}
                {/* <DiscretePathEffect length={10} deviation={2} /> */}
                {/* <DashPathEffect intervals={[4, 4]} /> */}

              </Path>

            </Canvas>

          </View >
        </GestureDetector>
      </GestureHandlerRootView>
      <View style={styles.controlPanel}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => ClearPathes()}>
          <Text>Очистить</Text>
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