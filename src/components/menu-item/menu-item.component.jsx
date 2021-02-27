import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl,size,history,linkUrl,match}) => (
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
     <div 
     className='backgroun-image'
     style={{backgroundImage:`url(${imageUrl})`}} />
    
    <div className='content'> 
            {/* <img src={imageUrl} alt='product' width={200} height={200}/> */}
                <h1 className='title'>{title}</h1>
                <h1 className='subtitle'>Shop Now</h1>
            </div>
        </div>
)

export default withRouter(MenuItem);