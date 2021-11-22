/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import UsersContext from '../context/UsersContext';

const UserForm = ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(UsersContext);
  return (
    <View style={styles.form}>
      <Text style={{color: '#222'}}>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={name =>
          setUser({
            ...user,
            name,
          })
        }
        placeholder="Informe o nome"
        placeholderTextColor="#222"
        value={user.name}
      />
      <Text style={{color: '#222'}}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={email =>
          setUser({
            ...user,
            email,
          })
        }
        placeholder="Informe o email"
        placeholderTextColor="#222"
        value={user.email}
      />
      <Text style={{color: '#222'}}>URL do avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={avatarURL =>
          setUser({
            ...user,
            avatarURL,
          })
        }
        placeholder="Informe a URL do avatar"
        placeholderTextColor="#222"
        value={user.avatarURL}
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  input: {
    color: '#666',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 14,
    borderRadius: 10,
  },
  form: {
    padding: 12,
  },
});
