/**
 * @createdBy Narada 2022/04/26
 */
import { generateSlice } from "../generateSlice";

/** @artworkSlices */
const { slice: likeSlice, postData: like } = generateSlice("likeArtWork", "/artwork/like", true);
const { slice: unlikeSlice, postData: unlike } = generateSlice("unlikeArtWork", "/artwork/unlike", true);
const { slice: heartSlice, postData: heart } = generateSlice("heartArtWork", "/artwork/heart", true);
const {slice: unheartSlice, postData: unheart} = generateSlice("unheartArtWork", "/artwork/unheart", true);

export const likeArtWork = like;
export const unlikeArtWork = unlike;
export const heartArtWork = heart;
export const unheartArtWork = unheart;

const artworkSlices = {
    likeState: likeSlice.reducer,
    unlikeState: unlikeSlice.reducer,
    heartState: heartSlice.reducer,
    unheartState: unheartSlice.reducer,
}

export default artworkSlices;