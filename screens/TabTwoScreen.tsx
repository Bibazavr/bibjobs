import * as React from "react";
import {StyleSheet} from "react-native";

import {Text, View} from "../components/Themed";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bibazavr</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.aboutMe}>
                <Text style={styles.aboutTest}>Работаю хорошо asdqawdewdaw</Text>
                <Text style={styles.aboutTest}>Учусь быстро</Text>
            </View>
            <Text style={styles.aboutTest}>Тестовое задание сделано на скорую руку за пару часиков связи с нехваткой времени</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    aboutMe: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        width: '80%',
    },
    aboutTest: {
        textAlign: "center",
        color: 'grey'
    }
});
