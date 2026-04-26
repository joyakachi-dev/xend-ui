import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../../components/xend/PrimaryButton";

export default function Welcome() {
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: "#000", flex: 1 }}>
      <View style={{ padding: 20 }}>

        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.profile}
        />

        <Text style={styles.heading}>Welcome to the</Text>
        <Text style={styles.heading2}>Future of finance</Text>

        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            color: "white",
          }}
        >
          To get started create an account, if you already have an account we
          will log you in
        </Text>

        <PrimaryButton
          title="Continue with Email"
          icon={<Ionicons name="mail-outline" size={20} color="white" />}
          onPress={() => router.push("/(auth)/email")}
        />

        <PrimaryButton
          title="Continue with Google"
          icon={<AntDesign name="google" size={20} color="white" />}
          onPress={() => {}}
        />

        <PrimaryButton
          title="Continue with Apple"
          icon={<AntDesign name="apple-1" size={20} color="white" />}
          onPress={() => {}}
        />

        <Text style={styles.end}>
          <Ionicons name="shield-checkmark" size={20} color="green" /> Deposits
          insured by NDIC
        </Text>

        <Text style={styles.end}>Reviewed by</Text>
        <Text style={styles.end}>Google Play store & App store</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    position: "relative",
    width: 110,
    height: 110,
    borderRadius: 55,
    marginTop: 10,
    alignSelf: "center",
  },

  heading: {
    marginTop: 13,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },

  heading2: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },

  end: {
    textAlign: "center",
    marginTop: 10,
    color: "white",
  },
});