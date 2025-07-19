import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import Layout from './pages/Layout'
import GenerateImages from './pages/GenerateImages'
import ReviewImage from './pages/ReviewImage'
import RemoveBg from './pages/RemoveBg'
import RemoveObject from './pages/RemoveObject'
import Community from './pages/Community'

const App = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary antialiased">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='generate-images' element={<GenerateImages />} />
          <Route path='remove-background' element={<RemoveBg />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='review-resume' element={<ReviewImage />} />
          <Route path='community' element={<Community />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App