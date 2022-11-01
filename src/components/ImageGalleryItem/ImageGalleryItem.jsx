import PropTypes from 'prop-types';
import { ImageCard, Image } from './ImageGalleryItemStyled';
export const ImageGalleryItem = ({ id, url, name, onImageClick }) => {
  return (
    <ImageCard key={id} onClick={onImageClick} id={id}>
      <Image src={url} alt={name} />
    </ImageCard>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onImageClick: PropTypes.func.isRequired,
};
