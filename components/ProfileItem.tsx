import * as React from "react";
import {Avatar, ListItem} from "react-native-elements";

import {Answer} from "../types";

const asd = () => {console.log("asd");
};
export const ProfileItem = (props: {person: Answer}) => {
    return (
        <ListItem bottomDivider>
            <Avatar
                title={props.person.name.title}
                source={{uri: props.person.picture.medium}}
            />
            <ListItem.Content>
                <ListItem.Title>
                    {props.person.name.first + " " + props.person.name.last}
                </ListItem.Title>
                <ListItem.Subtitle>{props.person.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );
};
