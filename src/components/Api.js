import axios from 'axios';

export async function searchImages(value, currentPage) {
  try {
    const BASEURL = 'https://pixabay.com/api/';
    let requestParams = {
      params: {
        q: value,
        page: currentPage,
        key: '29803921-0264c7261e6b7092956a87835',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    };
    const response = await axios.get(BASEURL, requestParams);
    return response.data.hits;
  } catch (error) {
    console.log(error);
  }
}

// const BASEURL = 'https://pixabay.com/api/';
// let requestParams = {
//   params: {
//     key: '29803921-0264c7261e6b7092956a87835',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'faulse',
//     page: 1,
//     per_page: 40,
//   },
// };
// export let findValue = '';
// form.addEventListener('input', searchValueImage);

// export async function startSeach(event) {
//   try {
//     event.preventDefault();
//     await checkFindValue();
//     if (!findValue) {
//       return;
//     }
//     const response = await axios.get(BASEURL, requestParams);
//     const data = await getData(response);
//     await findLastImage(response);
//     const marckup = await createTemplateImage(data);
//     const allPage = await renderImages(marckup);
//     makeGallery(allPage);
//   } catch (error) {
//     findLastPage(error);
//     console.log(error);
//   }
// }
// //  https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
