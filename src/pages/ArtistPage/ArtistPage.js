import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './ArtistPage.css';
import { useArtistState } from '../../store/artistContext';
import UpdateArtistForm from '../../components/UpdateArtistForm/UpdateArtistForm';

const ArtistPage = ({ match }) => {
  const { params: { artistId } } = match;
  const { artists } = useArtistState();
  const artist = artists.find((item) => item.id === artistId);
  const history = useHistory();

  function goToHomepage() {
    history.push('/');
  }

  return (
    <div className="artist-page">
      <div>
        <section>
          <button type="button" onClick={goToHomepage}>← go back</button>
        </section>
        <UpdateArtistForm artist={artist} />
      </div>
    </div>
  );
};

ArtistPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ArtistPage;
