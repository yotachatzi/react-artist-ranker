import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ArtistListItem.css';
import { useArtistDispatch } from '../../store/artistContext';

const ArtistListItem = ({ artist }) => {
  const dispatch = useArtistDispatch();

  function upVote() {
    dispatch({ type: 'UPVOTE_ARTIST', payload: artist.id });
  }

  function downVote() {
    if (artist.stars === 0) return;
    dispatch({ type: 'DOWNVOTE_ARTIST', payload: artist.id });
  }

  return (
    <div className="artist-list-item">
      <div>
        <section>
          <Link to={`/artist/${artist.id}`}>
            <p>{artist.name}</p>
          </Link>
        </section>
        <div className="stars">
          <p>
            <span role="img" aria-label="star">🌟</span>
&nbsp;&nbsp;
            {artist.stars}
          </p>
        </div>
        <div className="button-group">
          <button type="button" onClick={upVote}>&nbsp;+&nbsp;</button>
          <button type="button" onClick={downVote}>&nbsp;&#8722;&nbsp;</button>
        </div>
      </div>
    </div>
  );
};

ArtistListItem.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    pictureURL: PropTypes.string,
    stars: PropTypes.number,
  }).isRequired,
};

export default ArtistListItem;
