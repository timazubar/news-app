import { action, observable } from 'mobx';

class UICategoriesStore {
  @observable categories = [
    {
      id: 1,
      title: 'business',
      imageUrl:
        'https://www.kindadusty.com/wp-content/uploads/2016/05/Business-1170x768.jpg',
    },
    {
      id: 2,
      title: 'science',
      imageUrl:
        'https://www.rmit.edu.au/content/dam/rmit/au/en/study-with-us/interest-areas/thumbnails/science-study-area-1220x732.jpg',
    },
    {
      id: 3,
      title: 'sports',
      imageUrl:
        'https://sportsshow.net/wp-content/uploads/2019/04/Most-Popular-Sports-in-America.jpg',
    },
  ];

  @action getCategoriesList() {
    return this.categories;
  }
}

export default UICategoriesStore;
