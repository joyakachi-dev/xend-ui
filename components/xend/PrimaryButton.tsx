import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

interface PrimaryButtonProps {
  title: string;
  icon?: ReactNode;
  onPress: () => void;
}

export const PrimaryButton = ({ title, icon, onPress }: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: pressed ? "#007AFF" : "transparent",
        borderWidth: 2,
        borderColor: "#007AFF",
        padding: 12,
        borderRadius: 25,
        height: 55,
        marginTop: 12,
      })}
    >
      {icon}
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};