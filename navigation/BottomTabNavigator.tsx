import * as React from "react";
import {Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {Button, Icon} from "react-native-elements";


import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {AboutMeParamList, Answer, BottomTabParamList, UserListParamList} from "../types";
import {loadData} from "../utils/loadData";
import {getRandomInt} from "../utils/getRandomInt";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="UsersList"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}
        >
            <BottomTab.Screen
                name="UsersList"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="ios-people" color={color}/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="AboutMe"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="ios-body" color={color}/>
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<UserListParamList>();

function TabOneNavigator() {
    const [data, setData] = React.useState<Answer[]>([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [selectedPerson, setSelectedPerson] = React.useState<Answer | null>(null)
    const [error, setError] = React.useState<string | null>(null)

    const loadMore = () => {
        setError(null)
        setRefreshing(true)

        loadData(
            "https://randomuser.me/api/?page=3&results=10&inc=gender,name,nat,email,picture",
            {}
        ).then((e: { results?: Answer[]; info: {} }) => {
            setData((data) => {
                return [
                    ...data,
                    ...(e?.results ?? []).map((person, index) => {
                        return {
                            ...person,
                            id: index,
                        };
                    }),
                ];
            });
        }).catch(e => {
            console.debug("loadMore", e);
            setError("Ошибка при загрузке данных")
        });
        setRefreshing(false);

    };

    const refresh = () => {
        setError(null)
        setRefreshing(true)

        loadData(
            "https://randomuser.me/api/?page=3&results=10&inc=gender,name,nat,email,picture",
            {}
        ).then((e: { results?: Answer[]; info: {} }) => {
            setData([
                ...(e?.results ?? []).map((person, index) => {
                    return {
                        ...person,
                        id: index,
                    };
                }),
            ]);
        }).catch(e => {
            console.debug("refresh", e);
            setError("Ошибка при загрузке данных")
        });

        setRefreshing(false);
    };

    React.useEffect(() => {
        loadMore();
    }, []);

    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="UsersListScreen"
                children={() =>
                    <TabOneScreen
                        data={data}

                        loadMore={loadMore}
                        refresh={refresh}
                        refreshing={refreshing}

                        isModalOpen={isModalOpen}
                        onCloseModal={() => setIsModalOpen(false)}

                        selected={selectedPerson}
                        onSelect={(person) => {
                            setIsModalOpen(true)
                            setSelectedPerson(person)
                        }}

                        error={error}
                    />
                }
                options={{
                    headerTitle: "Users list",
                    headerTitleStyle: {textAlign: 'center'},
                    headerLeft: () => {
                        return <Button
                            type={'clear'}
                            onPress={() => {
                                setSelectedPerson(data[getRandomInt(data.length)])
                                setIsModalOpen(true)
                            }}
                            icon={
                                <Icon
                                    name="favorite"
                                    size={30}
                                    color="red"
                                />
                            }/>
                    },
                    headerRight: () => {
                        return <Button
                            type={'clear'}
                            onPress={() => {
                                setRefreshing(true)
                                refresh()
                            }}
                            icon={
                                <Icon
                                    name="sync"
                                    size={30}
                                    color="black"
                                />
                            }/>
                    }
                }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<AboutMeParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="AboutMeScreen"
                component={TabTwoScreen}
                options={{headerTitle: "AboutMe"}}
            />
        </TabTwoStack.Navigator>
    );
}
