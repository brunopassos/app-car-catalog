import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { AuthContext } from "../../context/auth";

import { Api } from "../../service/api";

import { useNavigation } from "@react-navigation/native";

export const CarItem = (props) => {
  const navigation = useNavigation();
  const [carModalVisible, setCarModalVisible] = useState(false);
  const { isLoggedin, getData, setVehicleToEdit } = useContext(AuthContext);

  const removeCar = async (vehicle) => {
    const token = await getData();
    Api.delete(`/vehicles/${vehicle.id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then()
      .catch((err) => console.error(err));
  };

  function editVehicle() {
    setVehicleToEdit(props);
    navigation.navigate("Editar Veículo");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity styles={styles.imageContainer} onPress={() => setCarModalVisible(true)}>
        <Image style={styles.img} source={{ uri: props.imageLink }} />
      </TouchableOpacity>
      <Text style={styles.textTitleStyle}>
        {props.brand} {props.name} {props.model}
      </Text>
      <Text style={styles.textDataStyle}>
        {props.year} - {props.km} km - {props.city}-{props.state}
      </Text>
      <Text style={styles.textValueStyle}>
        R$ {props.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
      </Text>

      {isLoggedin && (
        <View style={styles.buttonsView}>
          <Pressable
            style={styles.button}
            onPress={() => editVehicle()}
          >
            <Text style={styles.textStyle}>Editar</Text>
          </Pressable>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => removeCar(props)}
          >
            <Text>Remover</Text>
          </TouchableOpacity>
        </View>
      )}




      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={carModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView contentContainerStyle={styles.mainContainer}>
                <View>
                  <Image style={styles.imgModal} source={{ uri: props.imageLink }} />
                  <Text style={styles.textTitleStyle}>
                    {props.brand} {props.name} {props.model}
                  </Text>
                  <Text style={styles.textDataStyle}>
                    {props.year} - {props.km} km
                  </Text>
                  <Text style={styles.textValueStyleModal}>
                    R${" "}
                    {props.value
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </Text>
                  <Text style={styles.textPlaceStyleModel}>
                    {props.city}-{props.state}
                  </Text>
                </View>
                <View>
                  <Text style={styles.textDetails}>Características</Text>
                  <View>
                    <Text style={styles.detailsModalText}>Nome: {props.name}</Text>
                    <Text style={styles.detailsModalText}>Modelo: {props.model}</Text>
                    <Text style={styles.detailsModalText}>Montadora: {props.brand}</Text>
                    <Text style={styles.detailsModalText}>Ano: {props.year}</Text>
                    <Text style={styles.detailsModalText}>KM: {props.km} km</Text>
                    <Text style={styles.detailsModalText}>Cor: {props.color}</Text>
                    <Text style={styles.detailsModalText}>Cidade: {props.city}</Text>
                    <Text style={styles.detailsModalText}>Estado: <Text style={styles.stateModal}>{props.state}</Text></Text>
                  </View>
                </View>
                <Pressable
                  style={[styles.button]}
                  onPress={() => setCarModalVisible(!carModalVisible)}
                >
                  <Text style={styles.textStyle}>Fechar</Text>
                </Pressable>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

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
    width: "100%",
    height: 200
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
  textPlaceStyleModel: {
    fontSize: 14,
    color: "#898989",
    fontWeight: "500",
    paddingLeft: 15,
    margin: 2,
    paddingBottom: 50
  },
  textValueStyle: {
    fontSize: 20,
    color: "#3374db",
    fontWeight: "500",
    paddingLeft: 15,
    margin: 2,
  },
  textValueStyleModal: {
    fontSize: 20,
    color: "#3374db",
    fontWeight: "500",
    paddingLeft: 15,
    paddingBottom: 50,
    margin: 2,
  },
  buttonsView: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  logoutButton: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 60,
    fontSize: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    margin: 20,
  },
  btnsModal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addPhoto: {
    fontSize: 16,
    margin: 17,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  imgModal:{
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  textDetails: {
    fontWeight: "500",
    fontSize: 20,
  },
  stateModal: {
    textTransform:"uppercase",
  },
  detailsModalText: {
    margin: 10
  }
});
