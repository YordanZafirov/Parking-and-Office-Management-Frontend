import DetailBullet from './DetailBullet';
import { UserDetailsInterface } from './UserProfilePage.static';
import redCalendar from '../../../assets/calendarPast.png';
import blueCalendar from '../../../assets/calendarNow.png';
import greenCalendar from '../../../assets/calendarFuture.png';

const UserProfileInfo = ({ pastReservations, currentReservations, futureReservations }: UserDetailsInterface) => {
    return (
        <div>
            <DetailBullet icon={redCalendar} value={pastReservations} />
            <DetailBullet icon={blueCalendar} value={currentReservations} />
            {/* Add other details as needed */}
            <DetailBullet icon={greenCalendar} value={futureReservations} />
        </div>
    );
};

export default UserProfileInfo;
