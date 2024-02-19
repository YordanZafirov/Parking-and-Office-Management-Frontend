import { useEffect } from "react";
import useLocation from "./Location.logic";
import Loader from "../../components/loader/Loader";
import LocationTable from "./LocationTable/LocationTable";
import SpotChoice from "./SpotChoice/SpotChoice";

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
