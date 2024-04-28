import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';




export default function WelcomeScreen() {

    const [fontsLoaded] = useFonts({
        "MilkyCofee": require("../assets/fonts/MilkyCoffee.ttf"),
        "AmaticSC": require("../assets/fonts/AmaticSC-Regular.ttf"),
        "Cellina": require("../assets/fonts/Cellina.ttf")//assets\fonts\AmaticSC-Regular.ttf
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }
    return (

        <View style={styles.mainContainer}>
            <Text style={{
                marginTop: "30%",
                fontFamily: 'MilkyCofee',
                fontSize: 40,
                color:"#31363F"
            }}>Welcome To Hello QR</Text>
            <View style={styles.animationView}>
                <LottieView style={{ flex: 1 }} source={require('../assets/Animation - 1714223085419.json')} autoPlay loop />
            </View>
            <Text style={{
                fontFamily: "MilkyCofee",
                fontSize: 24,
                marginTop: 100,
                color:"#31363F"
                

            }}>
                Let's craft your QR code journey!
            </Text>
            <TouchableOpacity style={styles.goButon}>
                <Text style={{
                fontFamily: "MilkyCofee",
                fontSize: 20,
                marginTop:15,
                marginHorizontal:45,
                color:"#fff"

                

            }}>Start</Text>
            </TouchableOpacity>

        </View>

    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#EEEDEB',
        //justifyContent: "center",
        alignItems: "center",
    },
    animationView: {
        height: 300,
        
        aspectRatio: 1,
        
        borderColor: "#111",
        //borderWidth:1,
        borderRadius: 40
    },
  
    goButon:{
        backgroundColor:"#31363F",
        marginTop:20,
        height:50,
        width:150,
        borderRadius:50
    }
});


