import { useEffect } from "react";

import Loader from "../../components/loader/Loader";
import LocationTable from "./LocationTable/LocationTable";
import SpotChoice from "./SpotChoice/SpotChoice";
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
      <SpotChoice />
      <LocationTable />
    </>
  );
};

export default Location;
