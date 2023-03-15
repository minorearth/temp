import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
// import { TouchableOpacity } from 'react-native-web';



const RegEdit = ({EditName, SE,setRegData}) => {

  // const [FN, setFN] = useState('')

  // setRegData(state=>)
  return (
    <>
      <Text>{EditName}</Text>
      <TextInput style={styles.edit}
        placeholder="First"
        secureTextEntry={SE}

        value={FN}
        onChangeText={(value) => setFN(value)}
      ></TextInput>
    </>


  )


}


export default function App() {

  const [errorM, seterrorM] = useState('Please provide signup data')
  const [RegData, setRegData] = useState('{Firstname: "",LastName:"",email:"",PSW:"",Confirm PSW:""}')



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
      <RegEdit EditName="Firstname" SE={false} onChange={setRegData}></RegEdit>
      <RegEdit EditName="LastName" SE={false} onChange={setRegData}></RegEdit>
      <RegEdit EditName="email" SE={false} onChange={setRegData}></RegEdit>     
      <RegEdit EditName="PSW" SE={true} onChange={setRegData}></RegEdit>
      <RegEdit EditName="Confirm PSW" SE={true} onChange={setRegData}></RegEdit>
    


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














