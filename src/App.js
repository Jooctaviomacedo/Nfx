import React from 'react';
import Tmdb from './Tmdb'; 

export default () => {
  
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
  const loadAll = async () => {

    let list = await Tmdb.getHomeList();
    setMovieList(list);
  }

  loadAll();

}, []);

return (
    <div className="page">
      <section className="Lists">
        {movieList.map((item, key)=>(
          <div>
            {item.title}
            </div>
        ))}
      </section>
    </div>
  );
}