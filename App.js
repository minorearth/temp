import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, PanResponder, FlatList,Pressable } from 'react-native';
import { useState, useRef, useEffect } from 'react';


const SuperView = ({ name, setv }) => {


  const onPress = () => {
    if (name == 'view1') {
      setv({ view1: false, view2: true, view3: false })
    } 
    if (name == 'view2') {
      setv({ view1: false, view2: false, view3: true })
    } 
    if (name == 'view3') {
      setv({ view1: true, view2: false, view3: false })
    }



  }
  return (

    < View style={{ flex: 1, backgroundColor: "#FFAA00", alignItems: 'center', justifyContent: 'center' }} >
      <Pressable style={{ borderRadius: 4, backgroundColor: '#7C9A92', width: 211, height: 58, bottom: 50 }} onPress={onPress}>
        <Text style={{ color: 'white' }}>{name}</Text>
      </Pressable>
    </View >


  )

}




export default function App() {
  const [visib, setVisib] = useState({ view1: true, view2: false, view3: false })


  return (
    <View style={{ flex: 1 }}>
      {visib['view1'] && <SuperView name="view1" setv={setVisib} />}
      {visib['view2']  && <SuperView name="view2" setv={setVisib} />}
      {visib['view3']  && <SuperView name="view3" setv={setVisib} />}

    </View>


  )



};


const styles = StyleSheet.create({

});


