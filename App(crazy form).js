import { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { CART, PATIENTS } from './data';



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

export const Products = ({ newsd, setshowNews }) => {
  const handleScroll = (event) => {
    event.nativeEvent.contentOffset.y > 200 ? setshowNews(false) : setshowNews(true)
  };
  if (newsd.length == 0) {
    return <Text>...Loading</Text>
  }
  return (
    <FlatList
      data={newsd}
      renderItem={({ item }) => <ProductImage image={item.image} />}
      keyExtractor={(item, index) => index.toString()}
      style={{ width: "100%" }}
      onScroll={(event) => handleScroll(event)}
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



const CheckedItem = ({ item, orders, cart, person, setData }) => {
  const checkFull = (id, orders, cart) => {
    const qty = cart.filter(item => item.id == id)[0]['qty']
    const ordersQty = [].concat(...orders.map(itm => itm.order)).filter(itm => itm.assign == 'checked' && itm.id == item.id).length
    ordersQty == qty ? orders
      .filter(nm => nm.name != person)
      .forEach(person => person.order
        .filter(itm => itm.id == item.id && itm.assign == 'notChecked')
        .forEach(item => item.assign = 'disabled')) :
      orders.forEach(person => person.order.filter(itm => itm.id == item.id && itm.assign == 'disabled').forEach(item => item.assign = 'notChecked'))
    setData(data => [...data])
  }

  const assign = (item) => {
    if (item.assign == 'checked') {
      item.assign = 'notChecked'
    } else if (item.assign == 'notChecked') {
      item.assign = 'checked'
    }
    checkFull(item.id, orders, cart)

  }

  return (
    <TouchableOpacity style={{ backgroundColor: "#FFAA00" }}
      onPress={() => assign(item)}>
      <Text> {`${item.name}  ${item.assign}`} </Text>
    </TouchableOpacity>
  )
}

const OrderSetup = ({ order, orders, cart, setData }) => {
  const [hide, setHide] = useState(false)

  return (
    <View style={{ width: '100%', backgroundColor: "#FF0000", flexDirection: "column" }}>
      <TouchableOpacity
        style={{ height: 50, backgroundColor: "#FF00AA" }}
        onPress={() => setHide(!hide)}>
        <Text>{order["name"]}</Text>
      </TouchableOpacity>
      {hide && <FlatList
        data={order.order}
        renderItem={item => <CheckedItem
          item={item.item}
          orders={orders}
          cart={cart}
          person={order.name}
          setData={setData}
        />}

      ></FlatList>}
    </View>


  )



}
export default function App() {
  const [newsdata, setnewsdata] = useState([]);
  const [showNews, setshowNews] = useState(true)
  const [data, setData] = useState()
  const formOrder = (CART, PATIENTS) => {
    return PATIENTS.map(item => ({ name: item, order: CART.map(item => ({ ...item, assign: 'notChecked' })) }))
  }
  useEffect(() => {
    getNews(setnewsdata)
    setData(formOrder(CART, PATIENTS))
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      {false && <View style={styles.topbar}>
        <SearchBar />
        {showNews && <News newsd={newsdata} />}
      </View>}
      {false && <Products newsd={newsdata} setshowNews={setshowNews} />}
      <Text></Text>
      <FlatList
        data={data}
        renderItem={(item) => <OrderSetup
          order={item.item}
          orders={data}
          cart={CART}
          setData={setData}
        />}
      ></FlatList>
    </SafeAreaView>
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
  },

  container: {
    flex: 1,
    backgroundColor: '#fffAAB',
    flexdirection: 'column',
    justifyContent: 'flex-start',
  }


})



