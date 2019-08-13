import React from 'react';
import '../../../pages/components/title.css';
const picture = (props) => {
  return (
    <section className="Media">
      <div className="Media-cover">
        <img 
          src={props.url} 
          alt={props.title}
          width={260}
          height={160}
          className="Media-image"
        />
      <p className="title"><strong>Titulo:</strong> {props.title}</p>
      </div>
    </section>
  )
}

export default picture;