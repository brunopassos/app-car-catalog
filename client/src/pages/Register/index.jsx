import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Header from "../../components/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { Api } from "../../service/api";
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não são iguais")
    .required("Confirme a senha"),
});

const RegisterScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    Api.post("/users/register", data)
      .then(() => showToast())
      .then((_) => {
        navigation.navigate("Login");
      })
      .catch((err) => console.error(err));
  }

  const showToast = () => {
    Toast.show({
      type: "success",
      text2: "Cadastro realizado com sucesso!",
    });
  };

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
              placeholder={"Senha - Min 6 dígitos"}
              secureTextEntry={true}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorMessage}>{errors.password?.message}</Text>
        )}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              value={value}
              placeholder={"Confirme a senha"}
              secureTextEntry={true}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorMessage}>
            {errors.confirmPassword?.message}
          </Text>
        )}
        {/* <Button title="Logar" onPress={handleSubmit(onSubmit)} /> */}
        <Button labelButton={"Registrar"} onPress={handleSubmit(onSubmit)} />
      </View>
    </>
  );
};

export default RegisterScreen;

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
});
