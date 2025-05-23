import React from "react";
import { StyleSheet, View } from "react-native";

const TryCodeScreen = () => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.secondContainer}>
                <View style={styles.blueBox}/>
                <View style={styles.redBox}/>
                <View style={styles.blueBox}/>
                <View style={styles.blueBox}/>
            </View>
        </View>
    );
};

export default TryCodeScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'skyblue'
    },
    secondContainer:{
        padding:16,
        margin:16,
        flex:1,
        flexDirection:'row',
        backgroundColor:'mistyrose'
    },
    blueBox:{
        backgroundColor:'blue',
        width:'25%',
        height:'25%',
        borderWidth:1
    },
    redBox:{
        backgroundColor:'red',
        width:'25%',
        height:'25%',
        borderWidth:1,
        bottom:0,
        left:20,
        right:0,
        zIndex:1,
        position:'absolute'   
    }
});