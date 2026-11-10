import React from 'react'
import "../Common Design/common.css"

export default function Homebox({logo,title,para}) {
    return (
        <div className='logos'>
            <div className="hospitallogos">
                {/* <GiHeartPlus /> */}
                {logo}
            </div>
            <div className='logocontent'>
                <h6>{title}</h6>
                <p>{para}</p>
            </div>
        </div>
    )
}
