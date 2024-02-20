// import { useEffect } from "react";
// import Loader from "../../components/loader/Loader";
// import useLocation from "./Location.logic";

import LocationCreateForm from "./LocationCreate/LocationCreate";

const Location = () => {
    // const { singleLocation, isLoading, error } = useLocation();
    // useEffect(() => {
    //     console.log(singleLocation);
    // }, [singleLocation]);
    // if (isLoading) {
    //     return <Loader />;
    // }
    // if (error) {
    //     return <div>Error loading location</div>;
    // }
    // return <div></div>;

    return (
        <>
            <LocationCreateForm />
        </>
    );
};

export default Location;
