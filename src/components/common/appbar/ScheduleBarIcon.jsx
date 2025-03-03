import AppBarIcon from "./AppBarIcon";
import useStoreStatus from "../../../hooks/useStoreStatus";

const ScheduleBarIcon = () => {
  const status = useStoreStatus(); 

  return (
    <>
      <AppBarIcon
        iconName={status.icon}
        title={status.title}
        subtitle={status.subtitle}
      />
    </>
  );
};

export default ScheduleBarIcon;
