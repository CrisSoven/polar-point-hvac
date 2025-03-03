import AppBarIcon from "./AppBarIcon";
import generalInformation from "../../../config/siteContent/generalInformation";
import useFormattedPhoneNumber from "../../../hooks/usePhoneNumber";

const CallUsBarIcon = () => {
  return (
    <AppBarIcon
      iconName="Phone"
      title={useFormattedPhoneNumber(
        generalInformation.companyPhone.fieldContent
      )}
      subtitle="The Service You Need, Just a Call Away"
    />
  );
};

export default CallUsBarIcon;
