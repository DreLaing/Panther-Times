import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./index.css";
import Header from './components/Header'
import NewNavbar from './components/NewNavbar'
import RecentArticles from './components/RecentArticles'
import { client } from './client'
import { useStateValue } from './components/context/StateProvider'
import Article from './components/Article'
import WriteForUs from './components/WriteForUs'
import Footer from './components/Footer'
import SearchedArticles from './components/SearchedArticles'
import OldArticleStyle from './components/OldArticleStyle'
import About from './components/About'
import Sports from './components/Sports'
import Business from './components/Business'
import Lifestyle from './components/Lifestyle'

const App = () => {
  const [{ articles }, dispatch] = useStateValue();
  
  function formatDate(date) {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return monthNames[monthIndex] + ' ' +day + ' ' + year;
  }
    
    useEffect(() => {
    async function fetchData(){
        const response = await client.getEntries({content_type: 'news', order:'-fields.date'})
        response.items.map(res =>{
          console.log(res)
          // console.log(res.fields.articleContent.content[0].content[0].value)
          // console.log(res.fields.articleContent.content[0])
          
            dispatch({
                type: 'ALL_ARTICLES',
                article:{
                  id: res.sys.id,
                  title: res.fields.articleTitle.content[0].content[0].value,
                  thumbnail: res.fields.thumbnail.fields.file.url,
                  summary: res.fields.articleSummary,
                  content: res.fields.articleContent.content[0].content[0].value,
                  datePosted: formatDate(new Date(res.fields.date.slice(0, 10))),
                  articleType: res.fields.articleType[0]
                }
            })

        })
    }
    fetchData();
    
    
    }, [])
  return (
    <div className='App'>
      <Router>
      <Switch>
        <Route path='/' exact={true}>
          <Header />
          {/* <NewNavbar /> */}
          <RecentArticles />
          <Footer />
        </Route>
        <Route path='/search/:title'>
          <Header />
          <SearchedArticles />
          {/* <Footer /> */}
        </Route>
        <Route path='/sports'>
          <Header />
          <Sports />
          <Footer />

        </Route>
        <Route path='/lifestyle'>
          <Header />
          <Lifestyle />
          <Footer />
        </Route>
        <Route path='/business'>
          <Header />
          <Business />
          <Footer />
        </Route>
        <Route path='/write'>
          <Header />
          <WriteForUs />
          <Footer />
        </Route>
        <Route path='/about'>
          <Header />
          <About />
          <Footer />
        </Route>
        <Route path='/:id'>
          <Header />
          <Article />
          <Footer />
        </Route>
        
        </Switch>
      </Router>
    </div>
  )
}

export default App


