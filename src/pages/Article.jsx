import React from 'react'
import { Banner, Header, Footer } from '../components/general'
import { Personal, Contact, Content, Tag, ListCustomArticle } from '../components/article'

function Article() {
  return (
    <div className="article-page">
        <Header />
        <div className="main-wrapper-article">
          <Banner />
          <img src="/icc.png" alt="" className="mt-5" width="100%"/>
        </div>

        <div className="second-wrapper-article">
          <hr width="48%" size="2px" align="center" color="black" className="line_space_black_article"/>
          <Personal />
          <Content />
          <Tag />
          <ListCustomArticle />
          <Contact />
        </div>

        <Footer />
    </div>
  )
}

export default Article