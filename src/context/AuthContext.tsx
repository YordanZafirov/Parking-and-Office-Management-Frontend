import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/userService";
import { User } from "../pages/Login/Login.static";

interface AuthContextType {
  isAuthenticated: boolean;
  loginUser: ({email, password}: User) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const isTokenExpired = (exp: any) => {
  const currentTime = Date.now() / 1000;
  return exp < currentTime;
};
const isTokenValid = (token: string) => {
  try {
    const decodedToken = jwtDecode(token);

    return decodedToken && !isTokenExpired(decodedToken.exp);
  } catch (error) {
    return false;
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedToken = localStorage.getItem("accessToken");
    return !!storedToken && isTokenValid(storedToken);
  });
  const currentPath = window.location.pathname;

  const loginUser = async ({ email, password }: User) => {
    try {
      // Call your login service to authenticate user
      const response = await loginService({ email, password });
      console.log(response);

      // if (response && response.access_token) {
      //   localStorage.setItem("access_token", response.access_token);
      //   setIsAuthenticated(true);
      //   navigate("/");
      // } else {
      //   setIsAuthenticated(false);
      // }
    } catch (error) {
      console.error("Error logging in:", error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  useEffect(() => {
    const publicRoutes = ["/login", "/register"];
    const storedToken = localStorage.getItem("accessToken");

    if (!isAuthenticated && storedToken && isTokenValid(storedToken)) {
      setIsAuthenticated(true);
    } else if (!publicRoutes.includes(currentPath)) {
      navigate("/login");
    }
  }, [navigate, currentPath, isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
