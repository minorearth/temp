import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, PanResponder,FlatList } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import Word from './comps/Word'
import WordList from './comps/WordList';


const words = [
  { id: 1, word: "Ihr" },
  { id: 8, word: "hungrig" },
  { id: 2, word: "isst" },
  { id: 7, word: "er" },
  { id: 6, word: "weil" },
  { id: 9, word: "ist" },
  { id: 5, word: "," },
  { id: 3, word: "einen" },
  { id: 4, word: "Apfel" },
];




export default function App() {

  const [json, setJson] =useState()

  useEffect(()=>{

    getMoviesFromApi()

  },
   
  [])
  
  const getMoviesFromApi = () => {
    return fetch('http://mskko2021.mad.hakta.pro/api/quotes')
      .then(response => response.json())
      .then(json => {
        console.log(json.data)
        setJson(json.data)
      })
      .catch(error => {
        console.error(error);
      });
  };

  

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({title, image}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image}/>
 
    </View>
  );
  
    return (
    <View style={{ flex: 1, backgroundColor: '#AAFFAA' }}  >
        <FlatList
          data={json}
          renderItem={({item}) => {return <Item title={item.title} image={item.image}/> } }
          keyExtractor={item => item.id}
        />



      {/* <WordList>
      {words.map((word) => (
        <Word key={word.id} {...word} />
        // <Word/>

      ))}
      </WordList> */}


    </View>
  )



};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


