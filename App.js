import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen></WelcomeScreen>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
