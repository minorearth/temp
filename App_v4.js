import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,Alert } from 'react-native';

export default function App() {
  const [EditValue, setEditValue] = useState('ssd')

  useEffect(() => {
    console.log(EditValue)



  }, [EditValue])

  const handleLogout = () => {

  }


  const confirmLogout = () => Alert.alert(EditValue,
    "Вы действительно хотите выйти",
    [{
      title: {EditValue},
      onPress: handleLogout,
    },
    {
      title: 'Нет',
    }
    ]
  );




  return (
    <View style={styles.main}>
      <TextInput style={{ backgroundColor: "#FFFFFF" }} value={EditValue} onChangeText={() => { setEditValue() }}></TextInput>
      <Text style={{ backgroundColor: "#FFFFFF" }}>{EditValue}</Text>
      <TouchableOpacity
      onPress={confirmLogout}

      >
        <Text>нажми на меня</Text>

      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
  like: {
    height: '20%',
    width: '20%',
    resizeMode: 'contain',
    position: "absolute",
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-end",
    top: "5%", right: '5%'
  },


  image: {
    backgroundColor: "#AAFFAA",
    borderRadius: 10,
    marginBottom: 10,
    height: "70%",

  },

  textblock: {
    backgroundColor: "#AAFF11",
    height: "25%",
  },

  main: {
    flex: 1,
    backgroundColor: "#FF00AA",
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
  },

  card: {
    backgroundColor: "#FF00FF",
    margin: 10,
    padding: 10,
    flexDirection: "column",
    aspectRatio: 1,
    flex: 1,
  }


});