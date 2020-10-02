import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from "mdbreact";
import { useStateValue } from './context/StateProvider'
import './ui/Article.css'
import { client } from '../client'



const Article = () => {
    const [{ articles },dispatch] = useStateValue();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [video, setVideo] = useState('')

    const params = useParams();
    const param = JSON.stringify(params.id)
    const articleID = param.slice(2, -1);
    const getArticle = () => client.getEntry(articleID)

    useEffect(() => {
        // getArticle().then(response => console.log(response.fields))
        getArticle().then(response => {
          setTitle(response.fields.articleTitle.content[0].content[0].value)
          setContent(response.fields.articleContent.content[0].content[0].value)
          response.fields.articleMedia && setVideo(response.fields.articleMedia[0].fields.file.url)
        })

      }, [])
   
    return (
  <>
    <div class="container mt-5">
      <section class="text-justify">
        <p class="font-weight-bold">{title}</p>
          <p>{content}</p>
            <figure class="figure">
              {video!=='' && <iframe src={video} class="thumbnail figure-img img-fluid z-depth-1" alt="..."/>}
                  {/* <figcaption class="figure-caption">A caption for the above image.</figcaption> */}
            </figure>         
      </section>
    
    </div>
  </>

  )
}

export default Article
