import { Typography, Button } from "@mui/material";
import TitleContentComponent from "../common/TitleContentComponent";
import notFoundInformation from "../../config/siteContent/notFoundInformation";

const NotFound = () => (
  <TitleContentComponent
    main
    title={notFoundInformation.title}
    subtitle={notFoundInformation.subtitle}
  >
    <Typography>{notFoundInformation.content}</Typography>
    <Button variant="contained" color="secondary" href="/">
      Go to Homepage
    </Button>
  </TitleContentComponent>
);

export default NotFound;
