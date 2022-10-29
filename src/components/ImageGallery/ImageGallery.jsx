import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Galery } from './ImageGalleryStyled';
export const ImageGallery = ({ data, onImageClick }) => {
  return (
    <Galery>
      {data.map(img => {
        return (
          <ImageGalleryItem
            id={img.id}
            key={img.id}
            url={img.webformatURL}
            name={img.tags}
            onImageClick={onImageClick}
          />
        );
      })}
    </Galery>
  );
};
