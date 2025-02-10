import { Button } from "@mui/material";
import generalInformation from "../../config/siteContent/generalInformation";

const CallUsNowButton = () => {
  return (
    <Button
      variant="contained"
      color="error"
      href={`tel:${generalInformation.companyPhone}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Call us now
    </Button>
  );
};

export default CallUsNowButton;
