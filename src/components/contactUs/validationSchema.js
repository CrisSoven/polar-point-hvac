import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits").required("Phone is required"),
  serviceAddress: yup.string().required("Service address is required"),
  description: yup.string().required("Description is required"),
});

export default validationSchema;
