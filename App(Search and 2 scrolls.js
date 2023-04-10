import { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';


const getNews = (setnewsdata) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=utf-8 ");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch("https://medic.madskill.ru/api/news", requestOptions)
    .then(response => response.json())
    .then(result => setnewsdata(result))
    .catch(error => console.log('error', error));

}

export const NewsImage = ({ image }) => {

  console.log(image)
  return (
    <Image
      source={{
        uri: image,
      }}
      resizeMode='contain'
      style={styles.NewsImage}
    ></Image>

  )
}


export const ProductImage = ({ image }) => {

  console.log(image)
  return (
    <Image
      source={{
        uri: image,
      }}
      resizeMode='contain'
      style={styles.ProductImage}
    ></Image>

  )
}

export const News = ({ newsd }) => {
  if (newsd.length == 0) {
    return <Text>...Loading</Text>
  }
  return (
    <FlatList
      data={newsd}
     
      renderItem={({ item }) => <NewsImage image={item.image} />}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      
    />
  )

}



export const Products = ({ newsd,setshowNews }) => {



  const handleScroll = (event) => {
    console.log(event.nativeEvent.contentOffset.y)
    event.nativeEvent.contentOffset.y>200?setshowNews(false):setshowNews(true)

    // const positionX = event.nativeEvent.contentOffset.x;
    // const positionY = event.nativeEvent.contentOffset.y;
  };


  if (newsd.length == 0) {
    return <Text>...Loading</Text>
  }
  return (
    <FlatList
      data={newsd}
      renderItem={({ item }) => <ProductImage image={item.image} />}
      keyExtractor={(item, index) => index.toString()}
      style={{width:"100%"}}
      onScroll={(event)=>handleScroll(event)}
      
    />
  )

}

const SearchBar = () => {
  return (<View style={styles.searchbar}>
    <Image
      source={require('./assets/icons.png')}
      resizeMode='contain'
      style={styles.searchicon}
    ></Image>
    <TextInput
      value='sdasd'
      style={styles.input}
    ></TextInput>

  </View>
  )

}


export default function App() {
  const [newsdata, setnewsdata] = useState([]);
  const [showNews,setshowNews]=useState(true)
  useEffect(() => {
    getNews(setnewsdata)
  }, [])

  const ssspl=(ss)=>{

    return ss.replaceAll('.','.\n').replaceAll('!','!\n').replaceAll('?','?\n')

  }

  return (
    // <View >
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <SearchBar />
        {showNews&& <News newsd={newsdata} />}
      </View>
      <Text>{ssspl('Hello World!This is. my? string')}</Text>
      {/* <ScrollView>
        <Text style={{height:200}}>asdasd</Text>
        <Text style={{height:200}}>asdasd</Text>
        <Text style={{height:200}}>asdasd</Text>
        <Text style={{height:200}}>asdasd</Text>
        <Text style={{height:200}}>asdasd</Text>
        <Text style={{height:200}}>asdasd</Text>
      </ScrollView> */}
      <Products newsd={newsdata} setshowNews={setshowNews} />

    </SafeAreaView>
    // </View>
  )
}



const styles = StyleSheet.create({
  topbar: {

    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FF00FF"


  },
  NewsImage: {

    width: 200,
    aspectRatio: 1.5,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 10
  },
  ProductImage: {
    width: "100%",
    // height: 300,
    aspectRatio: 1,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 10
  },


  input: {
    width: 300,
    height: 40,
    backgroundColor: '#AAFFAA',
  },

  searchicon: {
    width: 40
  },

  searchbar: {
    backgroundColor: '#AAFFAA',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 5,
    margin: 5,
    // borderRadius: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#fffAAB',
    flexdirection: 'column',
    justifyContent: 'flex-start',
  }


})



