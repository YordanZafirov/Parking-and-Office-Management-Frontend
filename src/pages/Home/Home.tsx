import yaraImg from "../../assets/yara_115.jpeg";
import officeBackground from "../../assets/location-background.jpg";

import { BackgroundImage, HomeContainer, LocationImage } from "./Home.style";

const location = [
  {
    id: 1,
    photo: yaraImg,
    name: "Varna",
    country: "Bulgaria",
  },
  {
    id: 2,
    name: "Sofia",
    country: "Bulgaria",
  },
];

const Home = () => {
  return (
    <HomeContainer>
      <h1>Choose location</h1>
      <BackgroundImage src={officeBackground} alt="" />
      <ul>
        {location.map((location) => (
          <li key={location.id}>
            <a href={`/location/${location.id}`}>
              <div>
                <LocationImage src={location.photo} alt="" />
                <span>{location.country}</span>
                <span>{location.name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </HomeContainer>
  );
};

export default Home;
