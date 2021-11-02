import React, {useState} from 'react';
import {Text} from 'react-native';

const UserForm = ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return <Text style={{color: '#222'}}>{user.id}</Text>;
};

export default UserForm;
