import { View, Text, StyleSheet } from "react-native";

export default function XendLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Xend</Text>
      <Text style={styles.sub}>Send money across Africa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111",
  },
  sub: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});