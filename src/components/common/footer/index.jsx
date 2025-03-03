import { Box, Container, Typography, Grid2 } from "@mui/material";
import FooterContactInfo from "./FooterContactInfo";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import FooterTitle from "./FooterTitle";
import FooterSubtitle from "./FooterSubtitle";
import PolarPointLogo from "../PolarPointLogo";
import generalInformation from "../../../config/siteContent/generalInformation";
import imagesPath from "../../../config/siteContent/imagesPath";
import useFormattedPhoneNumber from "../../../hooks/usePhoneNumber";

const FooterLinks = ({ links }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links.map(({ to, label }) => (
          <li key={to} style={{ marginBottom: "8px" }}>
            <Link
              to={to}
              onClick={(e) => {
                // Evita el comportamiento predeterminado de navegación
                e.preventDefault();
                // Navega de forma programática con desplazamiento suave
                navigate(to);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              <Typography variant="body2">{label}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

FooterLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Footer = () => {
  const quickLinks = generalInformation.quickLinks.map(
    ({ id, title, url }) => ({
      key: id,
      to: url,
      label: title,
    })
  );

  return (
    <Box
      sx={{
        pt: 4,
        pb: 2,
        bgcolor: "primary.main",
        color: "white",
        width: "100%",
      }}
    >
      <Container>
        <Grid2 container spacing={4} justifyContent="space-evenly">
          <Grid2 size={{ xs: 12, sm: 4, md: "auto" }}>
            <FooterTitle>{generalInformation.footerTitles[0]}</FooterTitle>
            <FooterLinks links={quickLinks} />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 4, md: "auto" }}>
            <FooterTitle>{generalInformation.footerTitles[1]}</FooterTitle>
            <FooterSubtitle>
              {generalInformation.footerTitles[2]}
            </FooterSubtitle>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {Object.entries(generalInformation.businessHours.schedule).map(
                ([day, hours]) => (
                  <li key={day}>
                    <Typography variant="body2">
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        - {day}:
                      </Typography>{" "}
                      {hours}
                    </Typography>
                  </li>
                )
              )}
            </ul>

            <FooterSubtitle>
              {generalInformation.footerTitles[3]}
            </FooterSubtitle>
            <Typography variant="body2" sx={{ ml: 2, fontWeight: "bold" }}>
              - {generalInformation.businessHours.afterHours}
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 4, md: "auto" }}>
            <FooterTitle>{generalInformation.footerTitles[4]}</FooterTitle>
            <PolarPointLogo sx={{ height: 40, mb: 2 }} src={imagesPath.logo} />
            <FooterContactInfo
              iconName={generalInformation.companyAddress.iconName}
              title={generalInformation.companyAddress.fieldContent}
              url={`https://www.google.com/maps?q=${encodeURIComponent(
                generalInformation.companyAddress.fieldContent
              )}`}
              sx={{ mb: 1 }}
            />
            <FooterContactInfo
              iconName={generalInformation.companyEmail.iconName}
              title={generalInformation.companyEmail.fieldContent}
              url={`mailto:${generalInformation.companyEmail.fieldContent}`}
            />
            <FooterContactInfo
              iconName={generalInformation.companyPhone.iconName}
              title={useFormattedPhoneNumber(
                generalInformation.companyPhone.fieldContent
              )}
              url={`tel:${generalInformation.companyPhone.fieldContent}`}
            />
          </Grid2>
        </Grid2>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" fontWeight="bold" textAlign="center">
            {generalInformation.companyName} &copy;{" "}
            {generalInformation.copyright.year} -{" "}
            {generalInformation.copyright.text}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
