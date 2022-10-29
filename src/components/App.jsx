import { Component } from 'react';
import { AppStyled } from './AppStyled';
import { Searchbar } from './Searchbar/Searchbar';
import { searchImages } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loadrer } from './Loader/Loader';

export class App extends Component {
  state = {
    findValue: '',
    data: [],
    currentPage: 1,
    isLoading: false,
  };
  togleIsLoading = () =>
    this.setState({
      isLoading: !this.state.isLoading,
    });
  getData = async () => {
    const response = await searchImages(
      this.state.findValue,
      this.state.currentPage
    );
    this.setState(prevState => {
      return {
        data: [...prevState.data, ...response],
      };
    });
  };

  setFindValue = e => {
    e.preventDefault();
    this.setState(prevState => {
      if (prevState.findValue !== e.target.findValue.value)
        return {
          data: [],
          findValue: e.target.findValue.value,
          currentPage: 1,
        };
      else {
        return { findValue: e.target.findValue.value };
      }
    });
  };
  onClickLoadMore = () => {
    return this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1,
      };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.findValue === this.state.findValue &&
      prevState.currentPage === this.state.currentPage
    ) {
      return;
    }
    this.togleIsLoading();
    setTimeout(() => {
      this.getData();
      this.togleIsLoading();
    }, 1000);
  }
  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.setFindValue}></Searchbar>
        {this.state.findValue && <ImageGallery data={this.state.data} />}
        {this.state.findValue && !this.state.isLoading && (
          <Button addPage={this.onClickLoadMore} />
        )}
        {this.state.isLoading && <Loadrer />}
      </AppStyled>
    );
  }
}
