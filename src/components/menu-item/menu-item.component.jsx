import React from 'react';
import './menu-item.styles.scss'
const MenuItem = ({title, imageUrl,size}) => (
    <div className={`${size} menu-item`}>
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

export default MenuItem;