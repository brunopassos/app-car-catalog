import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const CarItem = (props) => (
  <View style={styles.container}>
    <Image style={styles.img} source={props.imageLink} />
    <Text style={styles.textTitleStyle}>
      {props.brand} {props.name} {props.model}
    </Text>
    <Text style={styles.textDataStyle}>
      {props.year} - {props.km} km - {props.city}-{props.state}
    </Text>
    <Text style={styles.textValueStyle}>
      R$ {props.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 15,
    borderBottomColor: "#171717",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  img: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textTitleStyle: {
    fontSize: 16,
    paddingLeft: 15,
    color: "#333",
    fontWeight: "700",
    margin: 2,
  },
  textDataStyle: {
    fontSize: 14,
    color: "#898989",
    fontWeight: "500",
    paddingLeft: 15,
    margin: 2,
  },
  textValueStyle: {
    fontSize: 20,
    color: "#3374db",
    fontWeight: "500",
    paddingLeft: 15,
    margin: 2,
  }
});
