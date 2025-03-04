import {
  TextField,
  Button,
  Grid,
  Box,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DescriptionIcon from "@mui/icons-material/Description";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  serviceAddress: yup.string().required("Service address is required"),
  description: yup.string().required("Description is required"),
  availability: yup.array().min(2, "Please select a date range"),
});

const ContactUsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 600, margin: "auto" }}
    >
      <Grid container spacing={2}>
        {/* Name */}
        <Grid item xs={12}>
          <Typography>Name</Typography>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6}>
          <Typography>Email</Typography>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
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
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={6}>
          <Typography>Phone</Typography>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
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
        </Grid>

        {/* Service Address */}
        <Grid item xs={12}>
          <Typography>Service Address</Typography>
          <Controller
            name="serviceAddress"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                error={!!errors.serviceAddress}
                helperText={errors.serviceAddress?.message}
              />
            )}
          />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <Typography>Description</Typography>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                multiline
                rows={4}
                fullWidth
                error={!!errors.description}
                helperText={errors.description?.message}
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
        </Grid>

        {/* Submit */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsForm;
