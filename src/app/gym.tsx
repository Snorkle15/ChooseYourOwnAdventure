import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';


const GymImage = require('@/assets/images/gym.png');

export default function GymScreen() {
  return (
    <View style={styles.container}>
      <Image source={GymImage} style={styles.image} />
      <Text style={styles.text}>
        You slowly open the gym doors and hear someone yelling for help. You follow the noise into the locker room and find Ryan locked inside a storage closet.
        {"\n\n"}
        You break the lock using a metal bar and free him. Ryan explains that someone had locked him inside as a prank.
        {"\n\n"}
        You both leave school safely.
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