import React from "react";
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        width: '100%',
        backgroundColor: "#fff"
    },
    icon: {
        height: 13.91,
        width: 14.38,
        marginLeft: 5
    },
    blurImageStyle: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },
    mainStyle: {
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 10
    },
    backStyle: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: 35
    },
    codeStyle: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '700',
        color: '#000'
    },
    resendStyle: {
        backgroundColor: 'white',
        borderRadius: 1,
        borderColor: '#000',
        borderRadius: 25,
        borderWidth: 1,
        marginLeft: 10
    },
    resendText: {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '700',
        color: '#000',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    borderStyleBase: {
        width: 59,
        height: 50
      },
    
      borderStyleHighLighted: {
        borderColor: "#000",
      },
    
      underlineStyleBase: {
        width: 59,
        height: 50,
        borderWidth: 0,
        borderBottomWidth: 1,
        fontSize:20,
        color:'#000'
      },
    
      underlineStyleHighLighted: {
        borderColor: "#4285F4",
      },
      buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    button: {
        marginVertical: 10,
        width:'90%'

    },
});