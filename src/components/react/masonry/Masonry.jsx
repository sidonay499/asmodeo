import Masonry from 'react-masonry-css';
import './masonry.css'

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
}

const MasonryGalery = ({images}) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((item) => (
        <div key={[item]} className="masonry-item">
            <img src={item} alt="" />
        </div>
      ))}
    </Masonry>
  )
}

export default MasonryGalery;
