import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/SignIn', { email, password });
      Alert.alert('Login Successful', `Welcome ${res.data.user.username}`);
      // Navigate to another screen or save the token
    } catch (err) {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold mb-4">Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
