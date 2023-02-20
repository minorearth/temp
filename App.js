import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function App() {

  const [emailValue, setemailValue] = useState('')
  const [errorMsg, seterrorMsg] = useState('Здесь будет сообщение об ошибке')
  const [pswValue, setpswValue] = useState('')
  const onChange = (val) => {
    setemailValue(val)
  }

  const SignUP = () => {

    if (emailValue.includes('@') == true) {
      seterrorMsg('Всё ок')
    } else {
      seterrorMsg('Введите правильно email')
    }

  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20 }}>
        e-mail
      </Text>
      <TextInput style={styles.edit1}
        value={emailValue}
        onChangeText={(value) => onChange(value)}
        placeholder="Введите e-mail"
 
      // autoCapitalize='characters'
      >
      </TextInput>
      <Text style={{ marginTop: 20 }}>
        psw
      </Text>
      <TextInput style={styles.edit1}
        value={pswValue}
        onChangeText={(value) => setpswValue(value)}
        placeholder="Введите пароль"
        secureTextEntry
      // autoCapitalize='characters'
      >
      </TextInput>
      <Text>{errorMsg}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => SignUP()}>
        <Text >Sign Up</Text>
      </TouchableOpacity>


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


