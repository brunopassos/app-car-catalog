import React, { useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Header from "../../components/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";
import { Api } from "../../service/api";
import { AuthContext } from "../../context/auth";
import { useNavigation } from "@react-navigation/native";

const schema = yup.object({
  name: yup.string().required("O nome não pode ser vazio."),
  brand: yup.string().required("A marca não pode ser vazia."),
  model: yup.string().required("O modelo não pode ser vazio."),
  //   imageLink: yup.string().required("A foto não pode ser vazio."),
});

const AddVehicleScreen = () => {

  const navigation = useNavigation();

  const { getData, vehicleToEdit, fetchData } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: vehicleToEdit.name,
      brand: vehicleToEdit.brand,
      model: vehicleToEdit.model,
      year: vehicleToEdit.year,
      color: vehicleToEdit.color,
      city: vehicleToEdit.city,
      state: vehicleToEdit.state,
      value: vehicleToEdit.value,
      km: vehicleToEdit.km    
    },
    resolver: yupResolver(schema),
  });

 
  const onSubmit = async (data) => {
    const token = await getData();

    const res = await Api.get("/users/me", {
      headers: {
        Authorization: token,
      },
    });
    data.user = res.data;
    data.imageLink = "teste"

    await Api.post("/vehicles", data, {
      headers: {
        Authorization: token,
      },
    }).then(() => fetchData())
      .then((_) => navigation.navigate("Home"))
      .catch((err) => console.error(err));
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const img = result.assets[0].uri;
    // console.log(img.substring(5));
    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Header />
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
          <Text style={styles.errorMessage}>{errors.name?.message}</Text>
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
          <Text style={styles.errorMessage}>{errors.brand?.message}</Text>
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
          <Text style={styles.errorMessage}>{errors.model?.message}</Text>
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

        <Button labelButton={"Cadastrar"} onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </>
  );
};

export default AddVehicleScreen;

const styles = StyleSheet.create({
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
    width: "80%",
    margin: 20,
  },
  addPhoto: {
    fontSize: 16,
    margin: 17,
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 12,
    color: "rgba(200,0,50,1)",
    textAlign: "center",
    marginTop: 5,
  },
  btn: {
    marginBottom: 20,
  },
});
