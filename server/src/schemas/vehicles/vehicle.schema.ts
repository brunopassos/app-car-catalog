import * as yup from 'yup';

const vehicleSchema = yup.object().shape({
  name: yup.string().required("Nome é um campo requerido."),
  model: yup.string().required("Modelo é um campo requerido."),
  brand: yup.string().required("Marca é um campo requerido."),
  imageLink: yup.string().required("Foto é um campo requerido")
});

export default vehicleSchema;
