import Loader from "../../components/loader/Loader";
import LocationTable from "./LocationTable/LocationTable";
import SpotType from "./SpotType/SpotType";
import useLocation from "./Location.logic";
import useSpotType from "./SpotType/SpotType.logic";
import { useEffect } from "react";

const Location = () => {
  const {
    singleLocation,
    isLoading: loadingLocation,
    error: errorLocation,
  } = useLocation();
  const {
    spotTypeByLocationId,
    isLoading: loadingSpotType,
    error: errorSpotType,
  } = useSpotType();

  useEffect(() => {
    // returns undefined
    console.log(spotTypeByLocationId);
  }, [spotTypeByLocationId]);

  if (loadingLocation || loadingSpotType) {
    return <Loader />;
  }

  if (errorLocation || errorSpotType) {
    return <div>Error loading location</div>;
  }

  return (
    <>
      <SpotType name={singleLocation?.name} spotTypeData={spotTypeByLocationId} />
      <LocationTable />
    </>
  );
};

export default Location;
