import * as React from "react";
import {Avatar, ListItem} from "react-native-elements";

import {Answer} from "../../types";

export const ProfileItem = (props: { person: Answer, onSelect: (person: Answer) => void }) => {
    return (
        <React.Fragment>
            <ListItem bottomDivider onPress={() => props.onSelect(props.person)}>
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
                <ListItem.Chevron/>
            </ListItem>
        </React.Fragment>
    );
};
