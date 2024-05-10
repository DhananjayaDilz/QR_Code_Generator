
import { StyleSheet } from 'react-native';
import WelcomeScreen from './src/WelcomeScreen';

import QRCodeGenerator from './src/HomeScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator()

export default function App() {

  return (
    
     <NavigationContainer>
        <stack.Navigator initialRouteName="welcome" screenOptions={{headerShown: false}}>
        <stack.Screen name='welcome' component={WelcomeScreen} />
        <stack.Screen name='Home' component={QRCodeGenerator} />
        </stack.Navigator>
    </NavigationContainer>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
