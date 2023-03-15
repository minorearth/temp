import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';


export default function App() {

  return (<MyPager />




  )




}


const selectPage = (e) => {
  console.log(e)


}



const MyPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager}

        initialPage={1}
        onPageSelected={(e) => { selectPage(e) }}

      >
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
