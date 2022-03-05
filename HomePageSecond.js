import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import logo from '../assets/KisanSetuLogo.png'; 
import logoName from '../assets/LogoName.png'; 


function HomePageSecond()
{
  return (
    <SafeAreaView style={styles.container}>
        <Image source={logo} style={{ width: 90, height: 100, justifyContent: 'center', alignItems: 'center' }} /> 
        <Image source={logoName} style={{ width: 200, height: 50, justifyContent: 'center', alignItems: 'center' }} /> 
      <Text style={styles.text}>Choose Your Language</Text>
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
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  }
})

export default HomePageSecond;