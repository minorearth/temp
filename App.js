import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [image, setImage] = useState(null);
  const storeData = async (value) => {
    await AsyncStorage.setItem('Image1', value)
    const zu = await AsyncStorage.getItem('Image1')
    // console.log(zu);
    LoadData()
  }

  const LoadData = async () => {
    const zu = await AsyncStorage.getItem('Image1')
    var base64Icon = `data:image/png;base64,${zu}`;
    setImage(base64Icon);
  }

  useEffect(() => {
    LoadData()


  }, [])


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    // console.log(result.assets[0].base64);

    if (!result.canceled) {
      storeData(result.assets[0].base64)

    }
  };



  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camra roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>


    </View>
  )
}


const styles = StyleSheet.create({
  edit1: {
    width: "70%",
    height: 50,
    backgroundColor: "#AA88AA",
  },
  btn: {
    width: '50%',
    height: 50,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10

  }

  ,
  container:

  {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFAAAA",
    flexDirection: "column",

    // justifyContent: "flex-end"
  },




})


