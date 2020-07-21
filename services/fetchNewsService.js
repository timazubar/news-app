const baseUrl = 'http://newsapi.org/v2/';
const apiKey = '545054ab22e9474b82aed84d211dcf1b';

const fetchNewsByCategories = async (category) => {
  const response = await fetch(
    `${baseUrl}top-headlines?category=${category}&apiKey=${apiKey}`
  );

  const { articles } = await response.json();
  return articles;
};

export { fetchNewsByCategories };
