import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function FilterOptions() {
  const [selectedOption, setSelectedOption] = useState("lowestPrice");
  return (
    <View>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
        style={styles.option}
      >
        <Picker.Item label="Relevância" value="relevance" />
        <Picker.Item label="Menor preço" value="lowestPrice" />
        <Picker.Item label="Maior preço" value="biggestPrice" />
        <Picker.Item label="Mais antigos" value="oler" />
        <Picker.Item label="Mais novos" value="younger" />
        <Picker.Item label="Menor KM" value="lowestKm" />
        <Picker.Item label="Maior KM" value="biggestKm" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
