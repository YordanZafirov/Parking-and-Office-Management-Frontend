import React, { ReactNode } from "react";
import useToken from "../hooks/Token/Token.hook";

interface UserRoleHOCProps {
    children: ReactNode;
}

// Higher Order Component to check if the user is an admin
const UserRoleHOC: React.FC<UserRoleHOCProps> = ({ children }) => {
    const decodedToken = useToken();
    const canUserViewForm = decodedToken?.role === "ADMIN";

    return canUserViewForm ? <>{children}</> : null;
};

export default UserRoleHOC;
