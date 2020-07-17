const fetchNewsByCategories = async (category) => {
  const response = await fetch(
    `http://newsapi.org/v2/top-headlines?category=${category}&apiKey=545054ab22e9474b82aed84d211dcf1b`
  );

  const { articles } = response.json();
  return articles;
};

export { fetchNewsByCategories };
