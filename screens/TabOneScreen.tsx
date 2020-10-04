import * as React from "react";
import {FlatList, StyleSheet} from "react-native";

import {Answer} from "../types";
import {ProfileItem} from "../components/profile/ProfileItem";
import {ProfileModal} from "../components/profile/ProfileModal";
import {Text, View} from "../components/Themed";


interface TabOneScreenProps {
    data: Answer[]

    refreshing: boolean
    refresh: () => void
    loadMore: () => void

    selected: Answer | null
    onSelect: (person: Answer) => void

    isModalOpen: boolean
    onCloseModal: () => void

    error: string | null
}

export default function TabOneScreen(props: TabOneScreenProps) {
    return (
        <React.Fragment>
            <FlatList
                data={props.data}
                renderItem={(data) => {
                    return <ProfileItem person={data.item} onSelect={props.onSelect}/>;
                }}
                keyExtractor={(item, index) => index.toString()}
                refreshing={props.refreshing}
                onRefresh={props.refresh}
                onEndReached={(e) => props.loadMore()}
                onEndReachedThreshold={0.2}
            />
            {props.selected &&
            <ProfileModal
                person={props.selected}

                visible={props.isModalOpen}
                onClose={props.onCloseModal}
            />
            }
            {props.error &&
            <View style={styles.errorContainer}>
                <Text>{props.error}</Text>
            </View>
            }
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    errorContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: '#ef9a9a'
    },
});
