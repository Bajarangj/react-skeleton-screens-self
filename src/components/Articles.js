import React, { useState, useEffect } from "react";
import SkeletonArticle from "../skeleton/SkeletonArticle";

function Articles() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setArticles(data);
    }, 5000);
  });

  return (
    <div className='articles'>
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className='article' key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles && (
        <div>
          {[1, 2, 3, 4, 5, 6].map((element) => (
            <SkeletonArticle key={element} theme='dark' />
          ))}
        </div>
      )}
    </div>
  );
}

export default Articles;
