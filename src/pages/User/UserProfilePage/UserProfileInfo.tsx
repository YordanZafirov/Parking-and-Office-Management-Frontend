import DetailBullet from './DetailBullet';
import { UserDetailsInterface } from './UserProfilePage.static';
import redClock from '../../../assets/redClock.png';
import blueClock from '../../../assets/blueClock.png';
import greenClock from '../../../assets/greenClock.png';

const UserProfileInfo = ({ pastReservations, currentReservations, futureReservations }: UserDetailsInterface) => {
    return (
        <div>
            <DetailBullet icon={redClock} value={pastReservations} />
            <DetailBullet icon={blueClock} value={currentReservations} />
            {/* Add other details as needed */}
            <DetailBullet icon={greenClock} value={futureReservations} />
        </div>
    );
};

export default UserProfileInfo;
