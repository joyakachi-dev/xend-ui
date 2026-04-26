import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";

export default function HomeScreen() {
    const [isEnabled, setIsEnabled] = useState(false);

    const account = [
        { icon: 'person-add-outline', name: 'Account Settings', subtitle: 'Edit your profile and next of kin', color: '#2b2b2b' },
        { icon: 'shield-checkmark-outline', name: 'Verify Phone Number', subtitle: 'Enable OTP notifications', color: '#2b2b2b' },
        { icon: 'card-outline', name: 'KYC verification', subtitle: 'Complete your KYC', color: '#2b2b2b' },
        { icon: 'chatbubble-ellipses-outline', name: 'Support', subtitle: 'Chat with our support agents', color: '#2b2b2b' },
        { icon: 'finger-print-outline', name: 'Biometrics', subtitle: 'Enable Secure Login', color: '#2b2b2b', hasSwitch: true },
        { icon: 'shield-outline', name: 'Security', subtitle: 'Add an extra layer of security', color: '#2b2b2b' },
    ];

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.title}>Account</Text>
                <Ionicons name="ellipsis-vertical" size={28} color='white' />
            </View>

            <View style={styles.profileview}>
                <View style={styles.userpic}>
                    <Ionicons name='person' size={45} color='grey' />
                </View>

                <Text style={styles.userName}>@Nelson_Chidiogo</Text>

                <Ionicons style={styles.copyIcon} name="copy-outline" size={24} color='grey' />
            </View>

            <Pressable style={styles.saving}>
                <View>
                    <Text style={styles.refTitle}>Referral</Text>
                    <Text style={styles.refSub}>Refer friends and earn points</Text>
                </View>

                <View style={styles.ricon}>
                    <Ionicons name="trophy" size={22} color='orange' />
                    <Ionicons name="chevron-forward" size={22} color='white' />
                </View>
            </Pressable>

            <View style={styles.card}>
                {account.map((item) => (
                    <Pressable key={item.name} style={styles.row}>
                        
                        <View style={styles.iconBox}>
                            <Ionicons name={item.icon as any} size={22} color='#007AFF' />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.mapText}>{item.name}</Text>
                            <Text style={styles.subText}>{item.subtitle}</Text>
                        </View>

                        {item.hasSwitch ? (
                            <Switch
                                value={isEnabled}
                                onValueChange={() => setIsEnabled(!isEnabled)}
                                trackColor={{ false: '#767577', true: '#007AFF' }}
                            />
                        ) : (
                            <Ionicons name="chevron-forward" size={20} color='#515151' />
                        )}

                    </Pressable>
                ))}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 15,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
    },

    profileview: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
    },

    userpic: {
        backgroundColor: '#2b2b2b',
        borderWidth: 3,
        borderColor: '#007AFF',
        borderRadius: 40,
        height: 75,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },

    userName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    copyIcon: {
        marginLeft: 'auto',
    },

    saving: {
        padding: 15,
        backgroundColor: '#2043C0',
        borderRadius: 15,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    refTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

    refSub: {
        color: 'white',
        fontSize: 13,
        opacity: 0.8,
    },

    ricon: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },

    card: {
        backgroundColor: '#111111',
        borderRadius: 12,
        paddingVertical: 5,
        marginTop: 15,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },

    iconBox: {
        backgroundColor: '#2b2b2b',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },

    mapText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },

    subText: {
        color: 'grey',
        fontSize: 12,
    },
});