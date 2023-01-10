/**
 * @createdBy Narada 2022/04/26
 */
 import { generateSlice } from "../generateSlice";
 import competitionPageSlices from "./competitionSlice";
 
 const { slice: recommendedSlice, getData: getRecommended } = generateSlice(
   "recommended",
   "/artworks/recommended"
 );
 const { slice: mostLikedSlice, getData: getMostLiked } = generateSlice(
   "mostLiked",
   "/artworks/most/liked"
 );
 const { slice: recentSlice, getData: getRecent } = generateSlice(
   "recent",
   "/artworks/recent",
   true
 );
 const { slice: topBannerSlice, getData: getTopBanner } = generateSlice(
   "topBanner",
   "/banners/top"
 );
 const { slice: bottomBannerSlice, getData: getBottomBanner } = generateSlice(
   "bottomBanner",
   "/banners/bottom"
 );
 const { slice: competitionBannerSlice, getData: getCompetitionBanner } = generateSlice(
   "competitionBanner",
   "/banners/competition"
 );
 
 
 /** @mainpageActionCreator */
 export const getRecommendedItems = getRecommended;
 export const getMostLikedItems = getMostLiked;
 export const getRecentItems = getRecent;
 export const getTopBannerItems = getTopBanner;
 export const getBottomBannerItems = getBottomBanner;
 export const getCompetitionBannerItems = getCompetitionBanner;
 
 /** @allSlices */
 const mainpageSlices = {
   recommendedState: recommendedSlice.reducer,
   mostLikedState: mostLikedSlice.reducer,
   recentState: recentSlice.reducer,
   topBannerState: topBannerSlice.reducer,
   bottomBannerState: bottomBannerSlice.reducer,
   competitionBannerState: competitionBannerSlice.reducer,
 };
 
 export default mainpageSlices;
 