import { SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import HomePageSecond from './jsFiles/HomePageSecond'

function HomePage({navigation})
{
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() =>navigation.navigate('HomePageSecond')} style={styles.button}>
       <Text style={styles.buttonText}>PROCEED</Text>
     </TouchableOpacity>
    </SafeAreaView>
  );
} 

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="HomePageSecond" component={HomePageSecond} />
      </Stack.Navigator>
      </NavigationContainer>
  );
  }

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
    width: 305,
    backgroundColor: "#009788",
    padding: 20,
    borderRadius: 40,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  }, 
});
