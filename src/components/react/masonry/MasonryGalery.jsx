import Masonry from 'react-masonry-css';
import './masonryGalery.css'
import { useState } from 'react';
import Viewer from '../modals/viewer/Viewer';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
}

const MasonryGalery = ({images,name,location}) => {
  const [view,setView] = useState('')

  const closeView = ()=>{
    setView('')
  }

  return (
    <>
      <div className='container_view' >
        {view && <Viewer closeView={closeView} img={view}/>}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((item) => (
          <div key={[item]} className="masonry-item">
              <img 
                onClick={()=>setView(item)} 
                src={item} 
                alt={`Imágen de ${name} Escort Vip en ${location}, Servicios Escorts`}
              />
          </div>
        ))}
      </Masonry>
    </>
  )
}

export default MasonryGalery;
