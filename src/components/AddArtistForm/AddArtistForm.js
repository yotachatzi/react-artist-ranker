import React, { useState } from 'react';
import './AddArtistForm.css';
import { useArtistDispatch } from '../../store/artistContext';

const AddArtistForm = () => {
  const [artist, setArtist] = useState();
  const [error, setError] = useState();
  const dispatch = useArtistDispatch();

  function handleChange(e) {
    if (error) setError(null);
    const name = e.target.value;
    setArtist({ name });
  }

  function submitForm(e) {
    e.preventDefault();
    if (artist === undefined || artist.name.length === 0) {
      setError({ message: 'The name field cannot be empty!' });
      return;
    }
    dispatch({ type: 'ADD_ARTIST', payload: artist });
  }

  return (
    <form onSubmit={submitForm} className="name-form">
      <section>
        {error && (
          <p className="error-message">
            ***&nbsp;&nbsp;
            {error.message}
          </p>
        )}
      </section>
      <div>
        <input name="name" placeholder="artist name" type="text" onChange={handleChange} />
        <button type="submit">add →</button>
      </div>
    </form>
  );
};

export default AddArtistForm;
