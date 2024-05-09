import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/WelcomeScreen';
import HomeScreen from './src/Screen';
import QRCodeGenerator from './src/Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <QRCodeGenerator></QRCodeGenerator>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
