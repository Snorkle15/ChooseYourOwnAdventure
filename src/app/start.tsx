import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>It's Friday afternoon, and you're about to leave school when you receive a strange text from your best friend, Ryan.
        {"\n\n"}
        "Help me. I'm trapped somewhere in the school. Don't trust anyone."
        {"\n\n"}
        You try calling him, but he doesn't answer.
        {"\n\n"}
        You decide to look for him before leaving. As you walk through the empty hallways, you hear a loud noise coming from the gym.
        {"\n\n"}
        You realize something is seriously wrong.
        {"\n\n"}
        What do you do?
        </Text>
      <Link href="/gym" style={styles.button}> Go inside the gym</Link>

      <Link href="/basement" style={styles.button}> Check the basement</Link>

      <Link href="/guard" style={styles.button}> Find the security guard</Link>

      <Link href="/police" style={styles.button}> Call the police</Link>

      <Link href="/home" style={styles.button}> Go home and ignore the message</Link>
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
});
