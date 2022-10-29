import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Galery } from './ImageGalleryStyled';
export const ImageGallery = ({ data }) => {
  return (
    <Galery>
      {data.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            url={img.webformatURL}
            name={img.tags}
          />
        );
      })}
    </Galery>
  );
};
