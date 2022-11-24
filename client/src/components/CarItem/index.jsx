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
  TextInput,
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

import { AuthContext } from "../../context/auth";

import { Api } from "../../service/api";

export const CarItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [carModalVisible, setCarModalVisible] = useState(false);
  const { isLoggedin } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const schema = yup.object({
    email: yup
      .string()
      .email("Email inválido")
      .required("O email não pode ser vazio."),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos.")
      .required("A senha não pode ser vazia."),
  });
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const img = result.assets[0].uri;
    console.log(img.substring(5));
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const removeCar = async (vehicle) => {
    Api.delete(`/vehicles/${vehicle.id}`)
      .then()
      .catch((err) => console.error(err));
  };

  function editCar() {
    console.log("edited");
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCarModalVisible(true)}>
        <Image style={styles.img} source={props.imageLink} />
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
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
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
          visible={modalVisible}
          
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView contentContainerStyle={styles.mainContainer}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Nome (Obrigatório)"}
                    />
                  )}
                />
                {errors.name && (
                  <Text style={styles.errorMessage}>
                    {errors.name?.message}
                  </Text>
                )}
                <Controller
                  control={control}
                  name="brand"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Marca (Obrigatório)"}
                    />
                  )}
                />
                {errors.brand && (
                  <Text style={styles.errorMessage}>
                    {errors.brand?.message}
                  </Text>
                )}
                <Controller
                  control={control}
                  name="model"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Modelo (Obrigatório)"}
                    />
                  )}
                />
                {errors.model && (
                  <Text style={styles.errorMessage}>
                    {errors.model?.message}
                  </Text>
                )}
                <Controller
                  control={control}
                  name="imageLink"
                  render={({ field: { onChange, value } }) => (
                    <TouchableOpacity onPress={pickImage} style={styles.input}>
                      <Text style={styles.addPhoto}>Adicionar Foto</Text>
                    </TouchableOpacity>
                  )}
                />
                <Controller
                  control={control}
                  name="year"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Ano"}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="km"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Km"}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="color"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Cor"}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="city"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Cidade"}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="state"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Estado"}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="value"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      style={styles.input}
                      value={value}
                      placeholder={"Valor"}
                    />
                  )}
                />
                <View style={styles.btnsModal}>
                  <TouchableOpacity
                    onPress={() => editCar(props)}
                    style={styles.button}
                  >
                    <Text>Confirmar</Text>
                  </TouchableOpacity>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancelar</Text>
                  </Pressable>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={carModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setCarModalVisible(!carModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView contentContainerStyle={styles.mainContainer}>
                <View>
                  <Image style={styles.img} source={props.imageLink} />
                  <Text style={styles.textTitleStyle}>
                    {props.brand} {props.name} {props.model}
                  </Text>
                  <Text style={styles.textDataStyle}>
                    {props.year} - {props.km} km - {props.city}-{props.state}
                  </Text>
                  <Text style={styles.textValueStyle}>
                    R${" "}
                    {props.value
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </Text>
                </View>
                <View>
                  <Text>Detalhes</Text>
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
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
    borderRadius: 20,
    padding: 10,
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
});
