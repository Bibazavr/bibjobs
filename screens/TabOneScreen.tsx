import * as React from "react";
import {FlatList, StyleSheet} from "react-native";

import {Answer} from "../types";
import {loadData} from "../utils/loadData";
import {ProfileItem} from "../components/ProfileItem";

export default function TabOneScreen() {
    const [data, setData] = React.useState<Answer[]>([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const loadMore = () => {
        try {
            loadData(
                "https://randomuser.me/api/?page=3&results=10&inc=gender,name,nat,email,picture",
                {}
            ).then((e: {results: Answer[]; info: {}}) => {
                setData((data) => {
                    return [
                        ...data,
                        ...e.results.map((person, index) => {
                            return {
                                ...person,
                                id: index,
                            };
                        }),
                    ];
                });
            });
        } catch (e) {
            console.error(e);
        }
    };

    const refresh = () => {
        try {
            loadData(
                "https://randomuser.me/api/?page=3&results=10&inc=gender,name,nat,email,picture",
                {}
            ).then((e: {results: Answer[]; info: {}}) => {
                setData([
                    ...e.results.map((person, index) => {
                        return {
                            ...person,
                            id: index,
                        };
                    }),
                ]);
            });
        } catch (e) {
            console.error(e);
        }
        setRefreshing(false);
    };

    React.useEffect(() => {
        loadMore();
    }, []);

    return (
        <FlatList
            data={data}
            renderItem={(data) => {
                return <ProfileItem person={data.item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
            refreshing={refreshing}
            onRefresh={() => {
                setRefreshing(true);
                refresh();
            }}
            onEndReached={(e) => loadMore()}
            onEndReachedThreshold={0}
        />
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
});
