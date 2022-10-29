import { LoadMore } from './ButtonStyled';
export const Button = ({ addPage }) => {
  return (
    <LoadMore type="button" onClick={addPage}>
      LoadMore
    </LoadMore>
  );
};
