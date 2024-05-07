import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/action'; 
import '../FavoritePage.css';

const FavoritesPage = () => {

  const favorites = useSelector(state => state.favorites.content);
  const dispatch = useDispatch();
   
 
  const handleRemoveFromFavorites = (companyName) => {
    dispatch(removeFavorite(companyName));
  };
    
  return (
    <div className="favorites-page">
      <h1 className="title">Aziende Preferite</h1>
      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map((company, index) => (
            <li key={index} className="favorite-item">
              <Link to={`/${company}`} className="company-link">{company}</Link>
              <button onClick={() => handleRemoveFromFavorites(company)} className="remove-button">X</button> 
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">Non hai ancora aggiunto nessuna azienda ai preferiti.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
