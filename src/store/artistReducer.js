/* eslint no-param-reassign: ["error", {
  "props": true, "ignorePropertyModificationsFor": ["stateDraft"]}]
*/
import { v4 as uuidv4 } from 'uuid';

function artistReducer(stateDraft, action) {
  switch (action.type) {
    case 'ADD_ARTIST': {
      const uniqueKey = uuidv4();

      const artist = {
        id: uniqueKey,
        ...action.payload,
        pictureURL: '',
        stars: 0,
      };

      stateDraft.artists.push(artist);

      // const { artists } = stateDraft;
      // localStorage.setItem('artists', JSON.stringify(artists));

      return;
    }
    case 'UPVOTE_ARTIST': {
      const id = action.payload;
      const artist = stateDraft.artists.find((item) => item.id === id);
      const artistIndex = stateDraft.artists.indexOf(artist);
      stateDraft.artists[artistIndex] = { ...artist, stars: artist.stars + 1 };

      // const { artists } = stateDraft;
      // localStorage.setItem('artists', JSON.stringify(artists));
      return;
    }
    case 'DOWNVOTE_ARTIST': {
      const id = action.payload;
      const artist = stateDraft.artists.find((item) => item.id === id);
      const artistIndex = stateDraft.artists.indexOf(artist);

      stateDraft.artists[artistIndex] = { ...artist, stars: artist.stars - 1 };

      // const { artists } = stateDraft;
      // localStorage.setItem('artists', JSON.stringify(artists));
      return;
    }

    case 'UPDATE_ARTIST': {
      const editedArtist = action.payload;
      const artist = stateDraft.artists.find((item) => item.id === editedArtist.id);
      const artistIndex = stateDraft.artists.indexOf(artist);
      stateDraft.artists[artistIndex] = editedArtist;

      // const { artists } = stateDraft;
      // localStorage.setItem('artists', JSON.stringify(artists));
      return;
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default artistReducer;
