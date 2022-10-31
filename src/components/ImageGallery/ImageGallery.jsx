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
