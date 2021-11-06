import React, {useContext} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Avatar, Button, ListItem, Icon} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

const UserList = props => {
  const {state, dispatch} = useContext(UsersContext);
  function confirmUserDeletion(user) {
    Alert.alert('Excluir usuário', 'Deseja excluir usuário?', [
      {
        text: 'sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'não',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => {
            props.navigation.navigate('UserForm', user);
          }}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => {
            confirmUserDeletion(user);
          }}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar title={user.name} source={{uri: user.avatarURL}} rounded />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;
