import { BrowserRouter, Routes, Route } from "react-router-dom"
import ArticlesPage from "./pages/ArticlesPage"
import ArticleDetailPage from "./pages/ArticleDetailPage"
import "./styles/main.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
