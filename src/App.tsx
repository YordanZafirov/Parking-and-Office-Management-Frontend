import styled from "styled-components";

const parking = [
  {
    id: 1,
    name: "Parking 1",
  },
  {
    id: 2,
    name: "Parking 2",
  },
  {
    id: 3,
    name: "Parking 3",
  },
  {
    id: 4,
    name: "Parking 4",
  },
  {
    id: 5,
    name: "Parking 5",
  },
  {
    id: 6,
    name: "Parking 6",
  },
  {
    id: 7,
    name: "Parking 6",
  },
  {
    id: 8,
    name: "Parking 6",
  },
  {
    id: 9,
    name: "Parking 6",
  },
  {
    id: 10,
    name: "Parking 6",
  },
];

const ParkingContainer = styled.div`
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px; /* Add margin to create space between groups */
  `;

const ParkingSpot = styled.div`
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
  border-bottom: 2px solid gray; /* Add a bottom border */
  display: grid;
  place-items: center;
  text-align: center;
  gap: 10px;
`;

function App() {

  const separateIntoDivs = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <>
      {separateIntoDivs(parking, 5).map((chunk, index) => (
        <ParkingContainer key={index}>
          {chunk.map(p => (
            <ParkingSpot key={p.id}>{p.name}</ParkingSpot>
          ))}
        </ParkingContainer>
      ))}
    </>
  );
}

export default App;
