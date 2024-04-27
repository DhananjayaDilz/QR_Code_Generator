import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';



export default function WelcomeScreen() {
   
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.welcomeText}>Welcome To Hello QR</Text>
            <View style={styles.animationView}>
            <LottieView  style={{flex:1}}source={require('../assets/Animation - 1714223085419.json')} autoPlay loop />
            </View>

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
    animationView:{
        height:300,
        aspectRatio:1,
        marginTop: "10%"
    },
    welcomeText:{
        marginTop:"20%",
      
        fontStyle: 'italic',
        fontSize:30
        
    }
});


