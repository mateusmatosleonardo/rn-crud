import React from 'react';
import {FlatList, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import users from '../data/users';

const UserList = props => {
  function getUserItem({item: user}) {
    return (
      <ListItem bottomDivider>
        <Avatar title={user.name} source={{uri: user.avatarURL}} rounded />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;
