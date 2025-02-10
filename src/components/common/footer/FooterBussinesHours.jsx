import { Typography } from "@mui/material";
import FooterTitle from "./FooterTitle";
import FooterSubtitle from "./FooterSubtitle";
import PropTypes from "prop-types";

const FooterBusinessHours = ({ schedule, afterHours }) => (
    <>
      <FooterTitle>Business Hours</FooterTitle>
      <FooterSubtitle>Schedule</FooterSubtitle>
      {Object.entries(schedule).map(([day, hours]) => (
        <Typography key={day} variant="body2" sx={{ mb: 1, ml: 2 }}>
          <Typography component="span" variant="body2" sx={{ fontWeight: "bold" }}>
            - {day}:
          </Typography>{" "}
          {hours}
        </Typography>
      ))}
      <FooterSubtitle>After Hours Service</FooterSubtitle>
      <Typography variant="body2" sx={{ ml: 2, fontWeight: "bold" }}>
        - {afterHours}
      </Typography>
    </>
  );
  
  FooterBusinessHours.propTypes = {
    schedule: PropTypes.object.isRequired,
    afterHours: PropTypes.string.isRequired,
  };

export default FooterBusinessHours;