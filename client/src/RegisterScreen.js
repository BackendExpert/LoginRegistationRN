import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/auth/SignUp', { username, email, password });
      Alert.alert('Registration Successful', 'You can now log in');
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert('Registration Failed', 'Something went wrong');
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold mb-4">Register</Text>
      <TextInput
        className="border rounded px-4 py-2 mb-2 w-64"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="border rounded px-4 py-2 mb-2 w-64"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="border rounded px-4 py-2 mb-2 w-64"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;
