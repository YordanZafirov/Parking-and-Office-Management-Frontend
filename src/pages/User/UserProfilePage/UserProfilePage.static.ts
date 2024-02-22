export const userProfileConstants = {
    changePasswordButton: "Change Password",
    changeProfilePictureButton: "Change Profile Picture",
    showPastReservations: "Show Past Reservations",
    showCurrentReservations: "Show Current Reservations",
    showFutureReservations: "Show Future Reservations",
    logout: "Logout"
  }

  export interface UserDetailsInterface {
    pastReservations: number,
    currentReservations: number,
    futureReservations: number,
}

export interface DetailBulletProps {
    icon?: string;
    value: string | number | undefined;
  }