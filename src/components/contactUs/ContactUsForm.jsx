import {
  TextField,
  Button,
  Grid2,
  Card,
  CardContent,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema";
import AccountOutline from "mdi-material-ui/AccountOutline";
import EmailOutline from "mdi-material-ui/EmailOutline";
import PhoneOutline from "mdi-material-ui/PhoneOutline";
import MapMarkerOutline from "mdi-material-ui/MapMarkerOutline";
import ToolboxOutline from "mdi-material-ui/ToolboxOutline";
import PropTypes from "prop-types";

const FormField = ({
  name,
  label,
  control,
  errors,
  placeholder,
  icon,
  multiline = false,
  rows,
}) => (
  <Grid2 size={{ xs: 12, sm: name === "email" || name === "phone" ? 6 : 12 }}>
    <Typography fontWeight={600} variant="body2">
      {label}
    </Typography>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          multiline={multiline}
          rows={rows}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          placeholder={placeholder}
          slotProps={{
            input: {
              startAdornment: icon ? (
                <InputAdornment position="start">{icon}</InputAdornment>
              ) : null,
            },
          }}
          aria-label={label}
        />
      )}
    />
  </Grid2>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

const ContactUsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Card
      sx={{
        padding: 2,
        display: "flex",
        height: "100%",
        width: { xs: "100%", md: "60%" },
        borderRadius: 4,
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid2 container spacing={2}>
            <FormField
              name="name"
              label="Name"
              placeholder="Your full name"
              control={control}
              errors={errors}
              icon={<AccountOutline />}
            />
            <FormField
              name="email"
              label="Email"
              placeholder="Your email address"
              control={control}
              errors={errors}
              icon={<EmailOutline />}
            />
            <FormField
              name="phone"
              label="Phone"
              placeholder="Your phone number"
              control={control}
              errors={errors}
              icon={<PhoneOutline />}
            />
            <FormField
              name="serviceAddress"
              label="Service Address"
              placeholder="Your service address"
              control={control}
              errors={errors}
              icon={<MapMarkerOutline />}
            />
            <FormField
              name="description"
              label="Description"
              control={control}
              errors={errors}
              placeholder="Describe your issue"
              icon={<ToolboxOutline />}
              multiline
              rows={4}
            />
            <Grid2 size={{ xs: 12 }}>
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactUsForm;
