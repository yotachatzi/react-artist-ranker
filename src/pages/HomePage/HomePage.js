import React from 'react';
import './Homepage.css';
import AddArtistForm from '../../components/AddArtistForm/AddArtistForm';
import ArtistList from '../../components/ArtistList/ArtistList';

const HomePage = () => (
  <div className="page-container">
    <AddArtistForm />
    <ArtistList />
  </div>
);

export default HomePage;
