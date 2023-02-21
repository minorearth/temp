import { Text, View, } from 'react-native';
import { useState, useEffect } from 'react';



export default function App() {

  const ff = () => {

    const zu = fetch('http://mskko2021.mad.hakta.pro/api/user/login',
      {
        method: "POST",
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          "email": "junior@wsr.ru",
          "password": "junior"
        })

      }).then(res => res.json()).then(res => console.log(res))
    return zu

  }


  useEffect(() => {
    const zu=ff()
    console.log('here we go',zu)



  }, [])

  return (

    <View>
      <Text>
            blah

      </Text>



    </View>


  )


}