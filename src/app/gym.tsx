import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';


const PlaceholderImage = require('@/assets/images/locker.jpeg');

export default function LockerScreen() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>
        Alex spins the combination on Locker 114 and tugs it open. Behind a stack of heavy textbooks is a hollowed-out compartment containing a glowing vintage rotary phone on a velvet pad. 
        {"\n\n"}
        The moment the locker door clicks open, the phone rings sharply. Alex picks up the receiver, and a frantic voice whispers, "Don't look behind you. 
        
        {"\n\n"}
        The vice principal is carrying a briefcase of encrypted drive chips. The handoff is at the gym lobby in two minutes."
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