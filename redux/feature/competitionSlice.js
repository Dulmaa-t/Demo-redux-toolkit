
 import { generateSlice } from "../generateSlice"

 const { slice: competitionSlice, getData: getCompetition } = generateSlice("competitionPage", "/competition/settings");
 
 const { slice: competitionSelectSlice, getData: getCompetitionSelect } = generateSlice("competitionSelectPage", "/competitions");

 const { slice:competitionDetailSlice, getData: getCompetitionDetail } = generateSlice("competitionDetail", "/competitions/");
 /** @aboutpageActionCreator */
export const getCompetitionSettingItems = getCompetition;
export const getCompetitionSelectItems = getCompetitionSelect;
export const getCompetitionById = getCompetitionDetail;

 
 /** @allSlices */
 const competitionPageSlices = {
     competitionState: competitionSlice.reducer,
     competitionSelectState: competitionSelectSlice.reducer,
     competitionDetailState : competitionDetailSlice.reducer
 }
 
 export default competitionPageSlices;