import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';


const PlaceholderImage = require('@/assets/images/locker.jpeg');

export default function PoliceScreen() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>
        You immediately call the police and explain the strange message.
        {"\n\n"}
        Officers arrive and search the school. After checking the security cameras, they discover that Ryan was taken into the basement by a suspicious man.
        {"\n\n"}
        They find Ryan and arrest the man before he can escape.
        {"\n\n"}
        THE END — You Saved Ryan!
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