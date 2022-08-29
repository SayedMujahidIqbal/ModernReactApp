import React from 'react'
import './brand.css'
import { google, slack, atlassian, shopify, dropbox } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section_padding'>
      <div>
        <img src={google} alt="google"/> 
      </div>
      <div>
        <img src={slack} alt="slack"/> 
      </div>
      <div>
        <img src={atlassian} alt="Atlassian"/> 
      </div>
      <div>
        <img src={dropbox} alt="Dropbox"/> 
      </div>
      <div>
        <img src={shopify} alt="Shopify"/> 
      </div>
    </div>
  )
}

export default Brand