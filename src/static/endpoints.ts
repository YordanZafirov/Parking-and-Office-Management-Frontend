import { BASE_URL } from './constants';

export const endpoints = {
    // AUTH
    login: `${BASE_URL}/user/signin`,
    register: `${BASE_URL}/user/signup`,

    // USER
    user: `${BASE_URL}/user`,
    getSingleUser: `${BASE_URL}/user/:userId`,
    deleteUser: `${BASE_URL}/user/:userId`,
  changePassword: `${BASE_URL}/user/change-password`,

    // LOCATION
    getLocations: `${BASE_URL}/location`,
    getSingleLocation: `${BASE_URL}/location/:locationId`,
    createLocation: `${BASE_URL}/location`,
    updateLocation: `${BASE_URL}/location/:locationId`,
    deleteLocation: `${BASE_URL}/location/:locationId`,

    // FLOOR_PLAN
    getFloorPlans: `${BASE_URL}/floor-plan`,
    getSingleFloorPlan: `${BASE_URL}/floor-plan/:floorPlanId`,
    getBySpotTypeAndLocation: `${BASE_URL}/floor-plan/search?`,
    createFloorPlan: `${BASE_URL}/floor-plan`,
    deleteFloorPlan: `${BASE_URL}/floor-plan/:floorPlanId`,

    // SPOT_TYPE
    getSpotTypes: `${BASE_URL}/spot-type`,
    getSingleSpotType: `${BASE_URL}/spot-type/:spotTypeId`,
    getSpotTypeByLocation: `${BASE_URL}/spot-type/search/:locationId`,
    createSpotType: `${BASE_URL}/spot-type`,

    // SPOT
    getSpots: `${BASE_URL}/spot`,
    getSingleSpot: `${BASE_URL}/spot/:spotId`,
    createSpot: `${BASE_URL}/spot`,
    updateSpot: `${BASE_URL}/spot/:spotId`,
    deleteSpot: `${BASE_URL}/spot/:spotId`,
    checkSpot: `${BASE_URL}/spot/check`,
    getBySpotTypeAndFloorPlan: `${BASE_URL}/spot/by-type-and-floorplan/search`,

    // RESERVATION
    reservation: `${BASE_URL}/reservation`,
    getPastReservationsByUser: `${BASE_URL}/reservation/by-user-past/`,
    getCurrentReservationsByUser: `${BASE_URL}/reservation/by-user-current/`,
    getFutureReservationsByUser: `${BASE_URL}/reservation/by-user-future/`,
    getReservationsByUser: `${BASE_URL}/reservation/by-user/:userId`,
    getReservationsBySpot: `${BASE_URL}/reservation/by-spot/:spotId`,
    getSingleReservation: `${BASE_URL}/reservation/:reservationId`,
    createReservation: `${BASE_URL}/reservation`,
    updateReservation: `${BASE_URL}/reservation/:reservationId`,
    deleteReservation: `${BASE_URL}/reservation/:reservationId`,
};
