import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, PanResponder, FlatList } from 'react-native';
import { useState, useRef, useEffect } from 'react';






const CustomSplash = () => {


  return (
    <View style={{ flex: 1, backgroundColor: '#AAFFAA' }} >
      <Image
        source={require('./assets/1.png')}
        style={{ resizeMode: "cover", flex: 10, width: "100%" }}
      >

      </Image>
      <View style={{ backgroundColor: "#253334", flex: 2 }}></View>
      <Image
        source={require('./assets/Logo.png')}
        style={{ resizeMode: "cover", position: "absolute", alignSelf: "center", marginTop: '30%' }}
      >

      </Image>
    </View>

  )



}



const WelcomeScreen = () => {


  return (

    <View style={{ flex: 1, flexDirection: "column", justifyContent:"flex-start" }} >
      <Image
        source={require('./assets/1.png')}
        style={{ resizeMode: "cover", position: "absolute", width: "100%", height: "75%" }}
      >
      </Image>

      <View style={{ backgroundColor: "#253334",position: "absolute", top: '75%', height: '25%', left: 0, right: 0 }}></View>

      <Image
        source={require('./assets/Logo.png')}
        style={{ resizeMode: "cover",  }}
      >

      </Image>
      <Image
        source={require('./assets/Logo.png')}
        style={{ resizeMode: "cover", }}
      ></Image>

    </View>

  )



}


export default function App() {

  const [wnd1, setWnd1] = useState(false)
  const [wnd2, setWnd2] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setWnd2(true)
      setWnd1(false)
    }, 2000)





  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: '#AAFFAA' }}  >
      {wnd1 && <CustomSplash />}
      {wnd2 && <WelcomeScreen />}

    </View>
  )



};


const styles = StyleSheet.create({

});


