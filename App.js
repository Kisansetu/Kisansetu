import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import logo from "./assets/LogoName.png"

import { Picker } from "@react-native-picker/picker";

export default function App() {

  const [country, setCountry] = useState('Unknown');

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions} >Choose You Language</Text>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select your country" value="Unknown" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Belgium" value="Belgium" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Japan" value="Japan" />
      </Picker>
      <TouchableOpacity onPress={() => alert('Page Coming soon!')} style={styles.button}>
        <Text style={styles.buttonText}>PROCEED</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    color: '#000',
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  button: {
    width: 370,
    height: 50,
    backgroundColor: "#009788",
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  }, 
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});
