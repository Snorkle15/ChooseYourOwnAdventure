import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';


const GuardImage = require('@/assets/images/guard.png');

export default function GuardScreen() {
  return (
    <View style={styles.container}>
      <Image source={GuardImage} style={styles.image} />
      <Text style={styles.text}>
        You find the security guard near the parking lot and explain that Ryan is missing.
        {"\n\n"}
        He tells you he knows where Ryan is and asks you to follow him.
        {"\n\n"}
        You follow him into an empty classroom. Suddenly, he locks the door behind you.
        {"\n\n"}
        You realize the security guard was responsible for Ryan's disappearance.
        {"\n\n"}
        THE END — You Trusted the Wrong Person!
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