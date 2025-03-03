import TitleContentComponent from "../common/TitleContentComponent";
import notFoundInformation from "../../config/siteContent/notFoundInformation";

const NotFound = () => (
  <TitleContentComponent
    main
    title={notFoundInformation.title}
    subtitle={notFoundInformation.subtitle}
  >
    <p>Sorry, the page you are looking for does not exist.</p>
  </TitleContentComponent>
);

export default NotFound;
