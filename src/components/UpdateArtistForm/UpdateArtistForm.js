import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UpdateArtistForm.css';
import { useArtistDispatch } from '../../store/artistContext';

const UpdateArtistForm = ({ artist }) => {
  const [editedArtist, setEditedArtist] = useState(artist);
  const [error, setError] = useState();
  const dispatch = useArtistDispatch();

  function handleInputChange(e) {
    if (error) setError(null);

    const fieldName = e.target.id;
    const fieldValue = e.target.value;

    setEditedArtist({
      ...editedArtist,
      [fieldName]: fieldValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editedArtist === artist) return;
    if (editedArtist.name.length === 0) {
      setError({ message: 'The name field cannot be empty!' });
      return;
    }

    dispatch({ type: 'UPDATE_ARTIST', payload: editedArtist });
  }

  function showValidationError(e) {
    e.preventDefault();
    setError({ message: 'Provide a valid image URL' });
  }

  return (
    <form className="update-artist-form" onSubmit={handleSubmit}>
      {error && (
        <p className="error-message-update-form">
          ***&nbsp;&nbsp;
          {error.message}
        </p>
      )}
      <label htmlFor="name">
        NAME
        <input id="name" onChange={handleInputChange} type="text" name="name" value={editedArtist.name} />
      </label>
      <label htmlFor="pictureURL">
        PICTURE URL:
        <input onInvalid={showValidationError} id="pictureURL" onChange={handleInputChange} type="url" pattern="https?://.+" name="pictureURL" value={editedArtist.pictureURL} />
      </label>
      <button type="submit" value="Submit">SAVE</button>
    </form>
  );
};

UpdateArtistForm.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    pictureURL: PropTypes.string,
    stars: PropTypes.number,
  }).isRequired,
};

export default UpdateArtistForm;
