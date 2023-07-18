const ArticleCard = ({ author, title, date, topic }) => {
  const articleDate = new Date(date);
  articleDate.setDate(articleDate.getDate());
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>By {author}</p>
      <p>{articleDate.toDateString()}</p>
      <p>{topic}</p>
    </div>
  );
};

export default ArticleCard;
