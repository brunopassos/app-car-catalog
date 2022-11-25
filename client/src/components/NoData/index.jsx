import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function NoData(){  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Cadastre o primeiro carro!</Text>
        <Icon name="car-off" size={100}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
  }
});
