import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// TICKET 5
// axios req getArticleById, useParams...
