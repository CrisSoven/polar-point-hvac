import AppBarIcon from "./AppBarIcon";
import generalInformation from "../../../config/siteContent/generalInformation";

const CallUsBarIcon = () => {
  return (
    <AppBarIcon
      iconName="Phone"
      title={`${generalInformation.companyPhone.fieldContent}`}
      subtitle="The Service You Need, Just a Call Away"
    />
  );
};

export default CallUsBarIcon;
