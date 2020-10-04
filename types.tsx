export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
};

export type BottomTabParamList = {
    UsersList: undefined;
    AboutMe: undefined;
};

export type UserListParamList = {
    UsersListScreen: undefined;
};

export type AboutMeParamList = {
    AboutMeScreen: undefined;
};


export interface Answer {
    index: number
    email: string
    gender: string
    name: { title: string, first: string, last: string }
    nat: string
    picture: { large: string, medium: string, thumbnail: string }
}