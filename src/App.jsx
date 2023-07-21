import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import CommentsList from "./components/CommentsList";

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

// comment adder
// render inside comments list
// axios post req with body
// how does it create a new comment card to be rendered by comment list?

// the axios req will add the comment to the relevant articles DB profile
// we need to pass down the article id as well
//
