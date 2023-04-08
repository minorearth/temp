

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, PanResponder, FlatList, Pressable, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { center } from '@shopify/react-native-skia';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {

  const [splash, setSplashLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {

      setSplashLoaded(true)
    }, 2000);



  }, [])

  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()
  const input4 = useRef()
  const setFocusInput1 = () => {
    input1.current.focus()
  }
  const setFocusInput2 = () => {
    input2.current.focus()
  }
  const setFocusInput3 = () => {
    input3.current.focus()
  }
  const setFocusInput4 = () => {
    input4.current.focus()
  }
  const [data, setData] = useState({ 1: '0', 2: '0', 3: '0', 4: '0', })

  const verifyCode = () => {

    const checkMe = Object.values(data).reduce((summ, item) => (summ + item))
    // Here call some function to verify code

  };

  if (!splash)
    return (
      <LinearGradient style={{ flex: 1, backgroundColor: "#FFAADD" }}
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start ={{ x: 0, y: 1 } }
      end ={{ x: 1, y: 0 } }
      >

      </LinearGradient>

    )
  return (


    <View style={{ flex: 1, alignItems: "center", flexDirection: "column" }}>
      <View style={{ height: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#FFAABB", width: "100%", flexDirection: "row" }}>
        <View style={{ margin: 2, borderWidth: 2, width: 20, height: 20, borderRadius: 10 }}>

        </View>
        <View style={{ margin: 2, borderWidth: 2, width: 20, height: 20, borderRadius: 10 }}>

        </View>
        <View style={{ margin: 2, borderWidth: 2, width: 20, height: 20, backgroundColor: "#FFFF11", borderRadius: 10 }}>

        </View>


      </View>
      <View style={styles.boxholder}>

        <TextInput
          style={styles.box}
          ref={input1}
          onChangeText={(text) => {
            setData({ ...data, 1: text })
            text && setFocusInput2()
          }}
          inputMode="numeric"
          keyboardType='numeric'
          maxLength={1}
        ></TextInput>
        <TextInput
          style={styles.box}
          ref={input2}
          onChangeText={(text) => {
            setData({ ...data, 2: text })
            text ? setFocusInput3() : setFocusInput1()
          }}
          inputMode="numeric"
          keyboardType='numeric'
          maxLength={1}
        ></TextInput>
        <TextInput
          style={styles.box}
          ref={input3}
          onChangeText={(text) => {
            setData({ ...data, 3: text })
            text ? setFocusInput4() : setFocusInput2()
          }}
          inputMode="numeric"
          keyboardType='numeric'
          maxLength={1}
        ></TextInput>
        <TextInput
          style={styles.box}
          ref={input4}
          onChangeText={(text) => {
            !text && setFocusInput3()
          }}
          inputMode="numeric"
          keyboardType='numeric'
          maxLength={1}
        ></TextInput>

      </View>
      <TouchableOpacity
        style={{ width: 200, height: 50, justifyContent: "center", backgroundColor: "#FFAAAA", marginTop: 40, borderRadius: 5 }}
        onPress={() => verifyCode()}

      >
        <Text style={{ alignSelf: "center", }}>Verify</Text>
      </TouchableOpacity>


    </View >


  )



};


const styles = StyleSheet.create({
  box:
  {
    height: 40,
    width: 40,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 5,
    fontSize: 30,
    textAlign: 'center',

  },

  boxholder:
  {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FFAADD"

  }

});


