import { ImageCard, Image } from './ImageGalleryItemStyled';
export const ImageGalleryItem = ({ id, url, name, onImageClick }) => {
  return (
    <ImageCard key={id} onClick={onImageClick} id={id}>
      <Image src={url} alt={name} />
    </ImageCard>
  );
};
