// import { UserDetailsPageLogic } from "./UserDetailsPage.logic";

// const UserDetailsPage = () => {
//     const { userId } = useParams();
//     const {
//       user,
//       pastReservations,
//       currentReservations,
//       futureReservations,
//       handleDeleteUser,
//       handleUpdateUserPassword,
//     //   showFields,
//     //   toggleShowFields,
//     } = UserDetailsPageLogic(userId);
  
//     return (
//       <div>
//         {farm && (
//           <div>
//             <PageTitle>
//               <TitleImage src={farmIcon} alt="Farm Icon" />
//               {farm.name}
//             </PageTitle>
//             <MapDetailsContainer>
//               <StyledMap id="map" style={{ height: "400px" }}></StyledMap>
//               <DetailsInfoContainer>
//                 <FarmDetailsInfo
//                   longitude={farm.location.coordinates[0]}
//                   latitude={farm.location.coordinates[1]}
//                   fieldsCount={fields.length}
//                   machinesCount={machines.length}
//                 ></FarmDetailsInfo>
//                 <UserRoleHOC>
//                   <UpdateButtonContainer>
//                     <BigBlueButton onClick={() => handleUpdateFarmInfo(farm.id)}>
//                       {farmDetailButtons.update}
//                     </BigBlueButton>
//                     <RedButton onClick={() => handleDeleteFarm(farm.id)}>
//                       {farmDetailButtons.delete}
//                     </RedButton>
//                   </UpdateButtonContainer>
//                 </UserRoleHOC>
//               </DetailsInfoContainer>
//             </MapDetailsContainer>
//             <ToggleButtonsContainer>
//               <BigBlueButton
//                 onClick={toggleShowFields as MouseEventHandler<HTMLButtonElement>}
//                 style={{
//                   fontWeight: showFields ? "bold" : "normal",
//                   backgroundColor: showFields ? "lightblue" : "",
//                 }}
//               >
//                 {farmDetailButtons.showFields}
//               </BigBlueButton>
//               <BigBlueButton
//                 onClick={toggleShowFields as MouseEventHandler<HTMLButtonElement>}
//                 style={{
//                   fontWeight: !showFields ? "bold" : "normal",
//                   backgroundColor: !showFields ? "lightblue" : "",
//                 }}
//               >
//                 {farmDetailButtons.showMachines}
//               </BigBlueButton>
//             </ToggleButtonsContainer>
//             {showFields ? (
//               <FieldCardsContainer fields={fields} />
//             ) : (
//               <MachineCardsContainer machines={machines} />
//             )}
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default FarmDetailsPage;