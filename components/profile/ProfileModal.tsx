import React from "react";
import {Avatar, Overlay} from "react-native-elements";

import {Answer} from "../../types";
import {View, Text} from "../Themed";
import {StyleSheet} from "react-native";


interface ProfileModalProps {
    visible: boolean
    person: Answer
    onClose: () => void
}

export const ProfileModal = (props: ProfileModalProps) => {
    return <Overlay isVisible={props.visible} onBackdropPress={props.onClose}>
        <View style={styles.container}>
            <Avatar
                title={props.person.name.title}
                source={{uri: props.person.picture.medium}}
            />
            <View style={styles.personContainer}>
                <Text>{props.person.name.first + " " + props.person.name.last}</Text>
                <Text style={{color: 'grey'}}>email: {props.person.email}</Text>
            </View>
        </View>
    </Overlay>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center"
    },
    personContainer: {
        margin: 5
    }

});
