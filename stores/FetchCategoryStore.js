import { action, observable } from 'mobx';

import { fetchNewsByCategories } from '../services/fetchNewsService';

class FetchCategoryStore {
  @observable articles = null;

  endpoint = 'categories';

  constructor() {
    this.articles = [];
  }

  async fetchNews(category) {
    const response = await fetchNewsByCategories(category);
    this.fetchArticles(response);
  }

  @action fetchArticles(articles) {
    this.articles = articles;

    // const { articles } = response.json();
    // const filteredArticles = [];

    // for (let i = 0; i < articles.length; i++) {
    //   const uniqueArticle = filteredArticles.find(
    //     (article) => article.title === articles[i].title
    //   );
    //   if (!uniqueArticle) {
    //     filteredArticles.push(articles[i]);
    //   }
    // }
    // return {
    //   articles: filteredArticles,
    // };
  }
}

export default FetchCategoryStore;
