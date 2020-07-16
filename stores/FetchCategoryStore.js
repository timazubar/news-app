import { action, observable } from 'mobx';

class FetchCategoryStore {
  @observable category = null;

  constructor(initialData = {}) {
    this.post = initialData.post;
  }

  async getInitialProps(ctx) {
    const response = await fetch(
      `http://newsapi.org/v2/top-headlines?category=${ctx.query.title}&apiKey=545054ab22e9474b82aed84d211dcf1b`
    );
    this.loadNews(response);
  }

  @action loadNews(response) {
    const { articles } = response.json();
    const filteredArticles = [];

    for (let i = 0; i < articles.length; i++) {
      const uniqueArticle = filteredArticles.find(
        (article) => article.title === articles[i].title
      );
      if (!uniqueArticle) {
        filteredArticles.push(articles[i]);
      }
    }
    return {
      articles: filteredArticles,
    };
  }
}

export default FetchCategoryStore;
