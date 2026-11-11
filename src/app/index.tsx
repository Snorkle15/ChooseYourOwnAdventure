
import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, View } from "react-native";

const bookCover = require('@/assets/images/Cover.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={bookCover} style={styles.image} />
      <Link href="/start" style={styles.button}>   Start Reading!   </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
  image: {
    width: 320,
    height: 480,
    borderRadius: 4,
  }
});
