import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import advertise from '../../advertisement'


const AdUser = () => {
   
    let num = 0;
    const random = () => {
        return Math.floor(Math.random() * 6);
    }
    num = random();

    const ad = advertise[num];
    
    
  return (
    <div className='ad-user-container'>
        <div className="top-ad">
            <h3>Sponsored</h3>
            <p>CreateAd</p>
        </div>
        <div className="ad-pic">
            <img src={ad.img} alt="" />
        </div>
        <div className="low-ad">
            <div className="low-email-container">
                <h3>{ad.title}</h3>
                <p>{ad.email}</p>

            </div>
        </div>
    </div>
  )
}

export default AdUser