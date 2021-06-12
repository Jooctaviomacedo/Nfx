import React from 'react';
import './FeaturedMovie.css';

export default ({item})=> {
    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
           <div>{item.originals_name}</div>
       </section>
    );


}