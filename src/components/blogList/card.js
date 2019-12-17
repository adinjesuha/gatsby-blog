import React from 'react'
import { Link } from 'gatsby'

import Image from '../image'
import './card.scss'

const Card = ({featured, small, ...props}) => {
  const {slug, author, title, excerpt, image, tags} = props
  let classNames;
  if(featured){
    classNames = 'c-card featured'
  }else if(small){
    classNames = 'c-card small'
  }else {
    classNames = 'c-card'
  }
  return (
    <div className={classNames}>
      <div className="c-card__image">
        <Link to={slug}>
          <Image imgName={image} />
        </Link>
      </div>
      {featured ? (
        <div className="c-card__content">
          <div className="c-card__content--meta">
            <span>Featured Article | {tags}</span>
          </div>
          <h1 className="title is-1 ">
            <Link to={slug}>{title}</Link>
          </h1>
          <p className="is-size-4">{excerpt}</p>
          <div className="c-card__content--user">
            <div className="avatar">
              <Image imgName="avatar.jpeg"/>
            </div>
            <div className="info">
              <span>{author}</span>
              <span>Dec 11 · 12 min read</span>
            </div>
          </div>
        </div>  
      ) : (
        <div className="c-card__content">
          <div className="c-card__content--meta">
            <span>{tags}</span>
          </div>
          <h2 className="title is-4">
            <Link to={slug}>{title}</Link>
          </h2>
          <p>{excerpt}</p>
        </div>  
      )}
    </div>
  )
}

export default Card