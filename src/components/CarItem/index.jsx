import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const CarItem = (props) => (
    <View style={styles.container}>
      <Image style={styles.img} source={props.imageLink} />
      <Text>
        {props.brand} {props.name} {props.model}
      </Text>
      <Text>
        {props.year} - {props.km} km - {props.city}-{props.state}
      </Text>
      <Text>
        R$ {props.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
      </Text>
    </View>
  );


  const styles = StyleSheet.create({
    container:{
        borderRadius: 6,
        marginEnd: 8,
        
    },
    img: {
      borderRadius: 2
    },
    searchBar: {
      backgroundColor: "#fff",
      width: "70%",
      height: 48,
      borderRadius: 8,
      paddingLeft: 10,
    }
  });
  

