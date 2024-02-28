import ImageMarker from 'react-image-marker';
import { BaseButton } from '../../components/CommonStyledElements';
import { useShowSpots } from './CreateReservationPage.logic';
import Loader from '../../components/loader/Loader';
import { LocationImage } from '../Home/LocationChocie/LocationChoice.style';
import { Card, ImageContainer, ImageStyled } from './CreateReservationPage.style';
import { DivFlexStyled } from '../CreateSpots/CreateSpotsPage.style';
import SpotMarkerReservation from './SpotMarkerReservation/SpotMarkerReservation';
import CalendarPage from './Calendar/CalendarPage';
import { FloorPlan } from '../FloorPlan/FloorPlan.static';
import SpotCardsContainer from './CombinationReservation/SpotCardsContainer';

export default function CreateReservation() {
    const {
        isLoading,
        error,
        floorPlans,
        showSpots,
        spots,
        showPlan,
        currentFloorPlan,
        handleDataFromCalendar,
        calendarData,
        selectedSpotType,
        isCombination,
        combinedSpots,
    } = useShowSpots();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error at Create reservation page</p>;
    }

    return (
        <>
            <DivFlexStyled className="create-reservation-container">
                <CalendarPage sendDateTime={handleDataFromCalendar} spotType={selectedSpotType} />
                {calendarData && (
                    <DivFlexStyled>
                        {floorPlans?.map((floorPlan: FloorPlan) => {
                            return (
                                <BaseButton
                                    key={floorPlan.id}
                                    className="reservation-card"
                                    onClick={() => {
                                        showPlan(floorPlan);
                                    }}
                                >
                                    <Card>
                                        <LocationImage src={floorPlan.imgUrl} alt="floor-plan-image" />
                                        <h3>{floorPlan.name}</h3>
                                    </Card>
                                </BaseButton>
                            );
                        })}
                    </DivFlexStyled>
                )}
            </DivFlexStyled>

            {isCombination ? (
                <SpotCardsContainer spots={combinedSpots} />
                
            ) : (
                showSpots && calendarData && currentFloorPlan && spots && (
                    <ImageContainer>
                        <h3>Please select a spot:</h3>
                        <ImageStyled>
                            <ImageMarker
                                src={currentFloorPlan.imgUrl!}
                                markers={spots}
                                markerComponent={SpotMarkerReservation}
                            />
                        </ImageStyled>
                    </ImageContainer>
                )
            )}
        </>
    );
}
