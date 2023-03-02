import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
// import { TouchableOpacity } from 'react-native-web';



const RegEdit = ({EditName}) => {

  console.log(EditName)

  const [FN, setFN] = useState('')

  return (
    <>
      <Text>{EditName}</Text>
      <TextInput style={styles.edit}
        placeholder="First"

        value={FN}
        onChangeText={(value) => setFN(value)}
      ></TextInput>
    </>


  )


}


export default function App() {

 
  const [LN, setLN] = useState('')
  const [PSW, setPSW] = useState('')
  const [EM, setEM] = useState('')
  const [PSWC, setPSWC] = useState('')
  const [errorM, seterrorM] = useState('Please provide signup data')

  // const CheckProps = () => {

  //   if (FN == '') {

  //     seterrorM('Please Enter first name')

  //   } else if (PSWC != PSW) {
  //     seterrorM('Wrong passcode')

  //   }
  //   else if (!EM.includes('@') || !EM.includes('.')) {
  //     seterrorM('Incorrect mail')
  //   }
  //   else {
  //     seterrorM('Successful registration')
  //   }
  // }

  return (
    <View style={styles.main}>
      <RegEdit EditName="Firstname"></RegEdit>
      <RegEdit EditName="LastName"></RegEdit>
      <RegEdit EditName="email"></RegEdit>     
      <RegEdit EditName="PSW"></RegEdit>
      <RegEdit EditName="Confirm PSW"></RegEdit>
    


      <TouchableOpacity
        onPress={() => CheckProps()}
        style={styles.btn}


      >
        <Text >Sign Up</Text>
      </TouchableOpacity>
      <Text>{errorM}</Text>

    </View>

  );
}







const styles = StyleSheet.create({
  btn: {
    height: 50,
    backgroundColor: "#AAAAAA",
    width: "50%",
    margin: 20,
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",




  },
  edit: {


    backgroundColor: "#FFFFFF",
    width: "70%",
    height: 50,
    borderRadius: 10,
  },

  main: {
    flex: 1,
    backgroundColor: "#FF00AA",
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    paddingTop: 50,
  },



});














