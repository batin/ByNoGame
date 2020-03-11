import React from "react"
import Img from "gatsby-image"
import './Card.scss'
const Card = (props) => {
  const img = {
        width: 250,
        height: 250,
        src: props.image.download_url,
        srcSet: ''
      }
  return (
    <div className="card">
      <Img 
        key={props.image.id}
        fixed={img} 
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <p>{props.image.author}</p>
    </div>
    
  )
}

export default Card