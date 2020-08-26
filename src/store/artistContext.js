import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';
import artistReducer from './artistReducer';

const ArtistStateContext = React.createContext();
const ArtistDispatchContext = React.createContext();

function restoreLocalStorageItem(itemName) {
  const item = localStorage.getItem(itemName);
  return JSON.parse(item);
}

const initialState = {
  artists: restoreLocalStorageItem('artists') || [],
};

function ArtistProvider({ children }) {
  const [state, dispatch] = useImmerReducer(artistReducer, initialState);

  useEffect(() => {
    localStorage.setItem('artists', JSON.stringify(state.artists));
  }, [state]);

  return (
    <ArtistStateContext.Provider value={state}>
      <ArtistDispatchContext.Provider value={dispatch}>
        {children}
      </ArtistDispatchContext.Provider>
    </ArtistStateContext.Provider>
  );
}

ArtistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useArtistState() {
  const context = React.useContext(ArtistStateContext);

  if (context === undefined) {
    throw new Error('useArtistState must be used within an ArtistProvider');
  }

  return context;
}

function useArtistDispatch() {
  const context = React.useContext(ArtistDispatchContext);

  if (context === undefined) {
    throw new Error('useArtistDispatch must be used within an ArtistProvider');
  }

  return context;
}

export { ArtistProvider, useArtistState, useArtistDispatch };
