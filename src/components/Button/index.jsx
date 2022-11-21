import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({labelButton, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text>{labelButton}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#8ab2f2",
        width: "80%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        color: "#fff",
        marginTop: 15,
    }
})