import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Header from "../../components/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { Api } from "../../service/api";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/auth";
import Toast from "react-native-toast-message";

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

const LoginScreen = () => {
  const { login, storeData, fetchData } = useContext(AuthContext);

  const showToast = () => {
    Toast.show({
      type: "success",
      text2: "Seja bem vindo(a) 👋",
    });
  };

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    Api.post("/users/login", data)
      .then((res) => {
        storeData(res.data.token);
        login();
      })
      .then(() => fetchData())
      .then(() => showToast())
      .then(() => navigation.navigate("Home"))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <Header />
      <View style={styles.mainContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              value={value}
              placeholder={"Email"}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorMessage}>{errors.email?.message}</Text>
        )}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              value={value}
              placeholder={"Senha"}
              secureTextEntry={true}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorMessage}>{errors.password?.message}</Text>
        )}
        <Button labelButton={"Logar"} onPress={handleSubmit(onSubmit)} />

        <TouchableOpacity
          onPress={() => navigation.navigate("Registrar")}
          style={styles.button}
        >
          <Text>Não tem uma conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  errorMessage: {
    fontSize: 12,
    color: "rgba(200,0,50,1)",
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    marginTop: 20,
  },
});
