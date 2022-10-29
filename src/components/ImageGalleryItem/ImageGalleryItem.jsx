import { ImageCard, Image } from './ImageGalleryItemStyled';
export const ImageGalleryItem = ({ id, url, name }) => {
  return (
    <ImageCard key={id}>
      <Image src={url} alt={name} />
    </ImageCard>
  );
};
