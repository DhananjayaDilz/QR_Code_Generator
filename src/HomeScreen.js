import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



const QRCodeGenerator = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  let [qrCodeData, setQRCodeData] = useState('');
  const [fontsLoaded] = useFonts({
    "MilkyCofee": require("../assets/fonts/MilkyCoffee.ttf"),
    "AmaticSC": require("../assets/fonts/AmaticSC-Regular.ttf"),
    "Cellina": require("../assets/fonts/Cellina.ttf")//assets\fonts\AmaticSC-Regular.ttf
  });
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  
  
 

  const generateQRCode = () => {
    // Format the contact details into vCard format
    const contactDetails = `

Name: ${name}
TEL: ${phoneNumber}
EMAIL: ${email}
`;

    setQRCodeData(contactDetails);
  };
 

  const handleSaveQRCode = () => {
    // Perform action to save QR code image (...........)
    Alert.alert('QR Code Saved in your gallery');
    // Reset QR code data to null
    setQRCodeData(null);
    setName("");
    setPhoneNumber("");
    setEmail("");

  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      {qrCodeData ? (
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrCodeData} size={200} />
          <TouchableOpacity style={styles.goButon} onPress={handleSaveQRCode}>
            <Text style={{
              fontFamily: "MilkyCofee",
              fontSize: 20,
              marginTop: 15,
              marginHorizontal: 40,
              color: "#fff"

            }}>Save QR Code</Text>
          </TouchableOpacity>
        </View>
      ) : (

        <TouchableOpacity style={styles.goButon} onPress={generateQRCode}>
          <Text style={{
            fontFamily: "MilkyCofee",
            fontSize: 20,
            marginTop: 10,
            marginHorizontal: 20,
            color: "#fff"
          }}>Generate QR Code</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  goButon: {
    backgroundColor: "#31363F",
    marginTop: 20,
    height: 50,
    width: 210,
    borderRadius: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  qrCodeContainer: {
    marginTop: 50,
    alignItems: 'center',
  },

});

export default QRCodeGenerator;
