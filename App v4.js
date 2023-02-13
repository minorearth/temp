import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, PanResponder } from 'react-native';
import { useState, useRef } from 'react';

export default function App() {

  const value = useState(new Animated.ValueXY(0))[0]
  const MoveBall = () => {

    // console.log(value.getLayout())
    // Animated.timing(value, {

    //   toValue: 100,
    //   duration: 1000,
    //   useNativeDriver: false,

    // }).start()


  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) =>
        true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,


      // onPanResponderGrant: () => {
      //   console.log(value.x)
      //   value.setOffset({
      //     x: value.x._value,
      //     y: value.y._value

      //   }



      //   )
      // },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: value.x, // x,y are Animated.Value
          dy: value.y,
        },
      ]),

      onPanResponderRelease: () => {
        console.log('hello')
        value.extractOffset();
      },

    }),
  ).current;





  return (
    <View style={{backgroundColor: "#22AA33", flex:1}}>
      <Animated.View {...panResponder.panHandlers} style={{
        transform: [{ translateX: value.x }, { translateY: value.y }], flex:1,
      }} >
        <View style={[styles.main]}>

        </View>
      </Animated.View>
      {/* <TouchableOpacity
        onPress={() => { MoveBall() }}>
        <Text>PressMe</Text>
        <Text>PressMe</Text>

      </TouchableOpacity> */}
    </View>

  );
}


const styles = StyleSheet.create({

  main: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: "#FF00AA"

  }
}

);