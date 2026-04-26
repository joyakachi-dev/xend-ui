import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    const router = useRouter();
    const [showBalance, setShowBalance] = useState(false);

    const actions = [
        { icon: 'bank-outline', label: 'Add Funds', library: 'MaterialCommunity', route: "/addFunds" },
        { icon: 'arrow-down-circle-outline', label: 'Withdraw', library: 'Ionicons' },
        { icon: 'swap-vertical-outline', label: 'Swap', library: 'Ionicons' },
        { icon: 'document-text-outline', label: 'Statement', library: 'Ionicons' },
    ];

    return (
        <ScrollView style={{ backgroundColor: "black" }}>
            <View style={{ padding: 10 }}>

                {/* Header */}
                <View style={styles.profileview}>
                    <View style={styles.userpic}>
                        <Ionicons name='person' size={35} color='grey' />
                    </View>

                    <Pressable style={styles.chatIcon}>
                        <Ionicons name='chatbubble-outline' size={25} color='black' />
                    </Pressable>
                </View>

                <View style={styles.headingText}>
                    <Text style={styles.userName}>Hi, @Nelson_Chidiogo</Text>
                    <Text style={styles.subtitle}>Start Saving now</Text>
                </View>

                {/* Balance Card */}
                <View style={styles.portfolio}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "white" }}>My Asset Portfolio</Text>

                        <Pressable onPress={() => setShowBalance(!showBalance)}>
                            <Ionicons
                                name={showBalance ? "eye-off-outline" : "eye-outline"}
                                size={22}
                                color="white"
                            />
                        </Pressable>
                    </View>

                    <Text style={styles.balance}>
                        {showBalance ? "₦1,200.00" : "*******"}
                    </Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionsRow}>
                    {actions.map((item) => (
                        <Pressable
                            key={item.label}
                            style={styles.actionButton}
                            onPress={() => item.route && router.push(item.route)}
                        >
                            <View style={styles.actionIcon}>
                                {item.library === "Ionicons" ? (
                                    <Ionicons name={item.icon as any} size={22} color="#B084F5" />
                                ) : (
                                    <MaterialCommunityIcons name={item.icon as any} size={22} color="#B084F5" />
                                )}
                            </View>

                            <Text style={styles.actionText}>{item.label}</Text>
                        </Pressable>
                    ))}
                </View>

                {/* Wallet list */}
                <View style={{ marginTop: 25 }}>
                    <Text style={styles.walletTitle}>Stablecoins</Text>

                    {["CNGN", "USDT", "USDC"].map((coin) => (
                        <View key={coin} style={styles.coinRow}>
                            <View style={styles.coinIcon}>
                                <Text style={{ color: "white", fontWeight: "bold" }}>
                                    {coin[0]}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.coinName}>{coin}</Text>
                                <Text style={styles.coinSub}>Compliant Naira</Text>
                            </View>

                            <View style={{ marginLeft: "auto" }}>
                                <Text style={styles.coinAmount}>1,200.00</Text>
                                <Text style={styles.coinSub}>= $1,200</Text>
                            </View>
                        </View>
                    ))}
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profileview: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    userpic: {
        backgroundColor: "#2b2b2b",
        borderWidth: 3,
        borderColor: "#007AFF",
        borderRadius: 38,
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    headingText: {
        marginLeft: 70,
        marginTop: -60,
    },

    userName: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },

    subtitle: {
        color: "gray",
        fontSize: 13,
    },

    chatIcon: {
        backgroundColor: "white",
        height: 45,
        width: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },

    portfolio: {
        backgroundColor: "#2043C0",
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
    },

    balance: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 10,
    },

    actionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },

    actionButton: {
        alignItems: "center",
    },

    actionIcon: {
        backgroundColor: "#1c1c1c",
        padding: 14,
        borderRadius: 14,
    },

    actionText: {
        color: "white",
        marginTop: 5,
    },

    walletTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
    },

    coinRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    coinIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#7C3AED",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    coinName: {
        color: "white",
        fontWeight: "bold",
    },

    coinSub: {
        color: "gray",
        fontSize: 12,
    },

    coinAmount: {
        color: "white",
        fontWeight: "bold",
    },
});