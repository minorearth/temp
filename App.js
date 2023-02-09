import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.card}>
        <ImageBox></ImageBox>
        <View style={styles.textblock} >
        </View>
      </View>
      <View style={styles.card}>
        <ImageBox></ImageBox>
        <View style={styles.textblock} >
        </View>
      </View>
    </View>

  );
}


const ImageBox = () => {
  return (
    <View style={styles.image} >
      <Image
        style={styles.tinyLogo}
        source={require('./assets/11.png')}

      />
      <Image
        style={styles.like}
        source={require('./assets/11.png')}

      />

    </View>
  )


}

const wid=10
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
  tinyLogo: {
    borderRadius: wid,
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
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
    flexDirection: "row",
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