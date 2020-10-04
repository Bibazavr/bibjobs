import * as Linking from "expo-linking";

export default {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    UsersList: {
                        screens: {
                            UsersListScreen: "UsersList",
                        },
                    },
                    AboutMe: {
                        screens: {
                            AboutMeScreen: "AboutMe",
                        },
                    },
                },
            },
            NotFound: "*",
        },
    },
};
