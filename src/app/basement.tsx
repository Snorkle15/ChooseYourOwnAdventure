import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';


const PlaceholderImage = require('@/assets/images/locker.jpeg');

export default function BasementScreen() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>
        You walk down the dark basement stairs and notice a door slightly open.
        {"\n\n"}
        You step inside and find Ryan's backpack on the floor. Suddenly, the door slams shut behind you.
        {"\n\n"}
        YYou try opening it, but it's locked. Your phone has no service, and nobody can hear you yelling.
        {"\n\n"}
        THE END — Now You're Trapped Too!
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