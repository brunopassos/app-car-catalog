import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={{fontSize: 30}}>Logo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
    },
  });
  