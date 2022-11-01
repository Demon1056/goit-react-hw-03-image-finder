import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Galery } from './ImageGalleryStyled';
export const ImageGallery = ({ data, onImageClick }) => {
  return (
    <Galery>
      {data.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            id={id}
            key={id}
            url={webformatURL}
            name={tags}
            onImageClick={onImageClick}
          />
        );
      })}
    </Galery>
  );
};
ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
