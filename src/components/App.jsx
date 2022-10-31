import { Component } from 'react';
import { AppStyled } from './AppStyled';
import { Searchbar } from './Searchbar/Searchbar';
import { searchImages } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loadrer } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    findValue: '',
    data: [],
    currentPage: 1,
    isLoading: false,
    lageImg: '',
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
  onClickLoadMore = () => {
    return this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1,
      };
    });
  };
  updateLageImage = () =>
    this.setState({
      lageImg: '',
    });
  onImageClick = e => {
    const selectedImgObj = this.state.data.find(
      ({ id }) => id === Number(e.currentTarget.id)
    );
    const selectedImg = selectedImgObj.largeImageURL;
    return this.setState({
      lageImg: selectedImg,
    });
  };
  closeModal = e => {
    if (e.target === e.currentTarget) {
      return this.updateLageImage();
    }
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
    const { findValue, data, isLoading, lageImg } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.setFindValue}></Searchbar>
        {findValue && (
          <ImageGallery data={data} onImageClick={this.onImageClick} />
        )}
        {findValue && !isLoading && <Button addPage={this.onClickLoadMore} />}
        {isLoading && <Loadrer />}
        {lageImg && (
          <Modal
            img={lageImg}
            closeModal={this.closeModal}
            updateLageImage={this.updateLageImage}
          />
        )}
      </AppStyled>
    );
  }
}
