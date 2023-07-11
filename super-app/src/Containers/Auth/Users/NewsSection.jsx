import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?apiKey=135ffa8e1ae548c3a92a3d0c1b67eb20&q=cricket'
        );
        const articles = response.data.articles;
        if (articles.length > 0) {
          setNews([articles[0]]);
        }
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      {news.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
