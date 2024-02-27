import { SpotCardProps } from "./SpotCard.static";
import { SpotCardStyled } from "./SpotCard.styles";



const SpotCard: React.FC<SpotCardProps> = ({ spot }) => {
    const startPeriodDate = new Date(spot.period.startDate).toDateString();
    const endPeriodDate = new Date(spot.period.endDate).toDateString();
    return (
        <SpotCardStyled>
            <h3>{spot.name}</h3>
            <div>
                Reservation period:
                <p>from: {startPeriodDate}</p>
                <p>to: {endPeriodDate}</p>
            </div>
        </SpotCardStyled>
    );
};

export default SpotCard;