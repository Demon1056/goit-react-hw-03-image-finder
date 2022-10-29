import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchbarStyled';
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          {' '}
          <AiOutlineSearch color={'grey'} size={'20px'} />
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="findValue"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>{' '}
    </Header>
  );
};
