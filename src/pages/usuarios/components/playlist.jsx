import Media from './fotos.jsx';
import React from 'react';
import './playlist.css';

const Playlist = props => {
  return (
    <div className="Playlist">
        {
          props.fotos.map((item) => {
            return (
               <Media {...item} key={item.id} />
            )
          })
        }
      </div>
  )
}

export default Playlist;
