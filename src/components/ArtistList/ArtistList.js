import React from 'react';
import { useArtistState } from '../../store/artistContext';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import './ArtistList.css';

const ArtistList = () => {
  const { artists } = useArtistState();
  const sortedArtists = [...artists].sort((artistA, artistB) => artistB.stars - artistA.stars);

  return (
    <div className="artist-list">
      {
        sortedArtists.map((artist) => (
          <ArtistListItem key={artist.id} artist={artist} />
        ))
      }
    </div>
  );
};

export default ArtistList;
