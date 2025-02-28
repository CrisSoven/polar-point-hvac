import TitleContentComponent from "../common/TitleContentComponent";
import equipmentInformation from "../../config/siteContent/equipmentInformation";
import BrandsSlider from "./BrandsSlider";

const EquipmentSection = () => (
  <TitleContentComponent
    main
    title={equipmentInformation.brandsSection.title}
    subtitle={equipmentInformation.brandsSection.subtitle}
  >
    <BrandsSlider />
  </TitleContentComponent>
);

export default EquipmentSection;
