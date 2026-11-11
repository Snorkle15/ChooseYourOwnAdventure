import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';


const HomeImage = require('@/assets/images/home.png');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={HomeImage} style={styles.image} />
      <Text style={styles.text}>
        You assume Ryan is playing a prank and decide to go home.
        {"\n\n"}
        The next morning, you arrive at school and notice police cars outside.
        {"\n\n"}
        You find out that Ryan never made it home, and nobody knows where he is.
        {"\n\n"}
        You look at your phone and read his message again.
        {"\n\n"}
        You realize you might have been his only chance to escape.
        {"\n\n"}
        THE END — Ryan Is Still Missing!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00620a',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,

  },
  text: {
    color: '#fff',
    padding: 20,
  },  
  image: {
    width:200,
    height: 200,
    borderRadius: 18,
    
  },
});