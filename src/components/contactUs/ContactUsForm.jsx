import { useState } from "react";
import { TextField, Button, Grid2, Box, InputAdornment } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DescriptionIcon from "@mui/icons-material/Description";
import ReCAPTCHA from "react-google-recaptcha";

const schema = yup.object({
  nombre: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "El teléfono debe ser de 10 dígitos")
    .required("El teléfono es obligatorio"),
  serviceAddress: yup
    .string()
    .required("La dirección del servicio es obligatoria"),
  descripcion: yup.string().required("La descripción es obligatoria"),
  availability: yup.string().required("La disponibilidad es obligatoria"),
  recaptcha: yup
    .string()
    .required("Debes verificar que no eres un robot")
    .nullable(),
});

const ContactUsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    setValue("recaptcha", value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 600, margin: "auto" }}
    >
      <Grid2 container spacing={2}>
        {/* Nombre */}
        <Grid2 xs={12}>
          <Controller
            name="nombre"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre"
                fullWidth
                error={!!errors.nombre}
                helperText={errors.nombre?.message}
              />
            )}
          />
        </Grid2>

        {/* Email y Phone */}
        <Grid2 xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid2>
        <Grid2 xs={12} sm={6}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid2>

        {/* Service Address */}
        <Grid2 xs={12}>
          <Controller
            name="serviceAddress"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Service Address"
                fullWidth
                error={!!errors.serviceAddress}
                helperText={errors.serviceAddress?.message}
              />
            )}
          />
        </Grid2>

        {/* Descripción */}
        <Grid2 xs={12}>
          <Controller
            name="descripcion"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Descripción"
                multiline
                rows={4}
                fullWidth
                error={!!errors.descripcion}
                helperText={errors.descripcion?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid2>

        {/* Disponibilidad */}
        <Grid2 xs={12}>
          <Controller
            name="availability"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Disponibilidad para cita"
                fullWidth
                error={!!errors.availability}
                helperText={errors.availability?.message}
              />
            )}
          />
        </Grid2>

        {/* <Grid2 xs={12}>
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleCaptchaChange}
          />

          {errors.recaptcha && <span>{errors.recaptcha.message}</span>}
        </Grid2> */}

        {/* Submit */}
        <Grid2 xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!captchaVerified}
          >
            Enviar
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ContactUsForm;
