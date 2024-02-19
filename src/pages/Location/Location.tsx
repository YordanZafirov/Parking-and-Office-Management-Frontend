import { useEffect } from "react";

import Loader from "../../components/loader/Loader";
import LocationTable from "./LocationTable/LocationTable";
import SpotType from "./SpotType/SpotType";
import useLocation from "./Location.logic";

const Location = () => {
  const { singleLocation, isLoading, error } = useLocation();

  useEffect(() => {
    console.log(singleLocation);
  }, [singleLocation]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading location</div>;
  }

  return (
    <>
      <SpotType name={singleLocation?.name} />
      <LocationTable />
    </>
  );
};

export default Location;
