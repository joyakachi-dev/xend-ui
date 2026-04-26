import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <Text style={styles.welcome}>Welcome, Nelson</Text>

      <Text style={styles.title}>Enter your password</Text>
      <Text style={styles.label}>Your Password</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" />
        
        <TextInput
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          style={styles.input}
        />

        <Ionicons name="eye-outline" size={20} color="gray" />
      </View>

      <Text style={styles.forgot}>Forgot Password?</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Text style={styles.switch}>
        Not you? <Text style={{ color: "orange" }}>Switch account</Text>
      </Text>

      <View style={styles.footerRow}>
        <Ionicons name="shield-checkmark" size={18} color="green" />
        <Text style={styles.footerText}> Deposits insured by NDIC</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "black",
    flex: 1,
  },
  welcome: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  label: {
    color: "gray",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
  },
  input: {
    flex: 1,
    color: "white",
    marginLeft: 10,
  },
  forgot: {
    color: "white",
    textAlign: "right",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#1677ff",
    padding: 18,
    borderRadius: 30,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  switch: {
    color: "white",
    textAlign: "center",
    marginTop: 15,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  footerText: {
    color: "white",
  },
});