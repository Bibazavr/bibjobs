export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};


export interface Answer {
  index: number
  email: string
  gender: string
  name: { title: string, first: string, last: string }
  nat: string
  picture: { large: string, medium: string, thumbnail: string }
}