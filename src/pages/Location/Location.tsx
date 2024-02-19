import { useEffect } from "react";

import Loader from "../../components/loader/Loader";
import LocationTable from "./LocationTable/LocationTable";
import SpotChoice from "./SpotType/SpotType";
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
      <SpotChoice name={singleLocation?.name} />
      <LocationTable />
    </>
  );
};

export default Location;
