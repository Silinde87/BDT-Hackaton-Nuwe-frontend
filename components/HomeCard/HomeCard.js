import React from 'react'
import Image from 'next/image'

export default function HomeCard({icon, title, text}) {
    return (
        <div>
            <Image
                src={`/icons/${icon}`} 
                alt="Card-icon"
                width={50}
                height={50}
            />
            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>            
        </div>
    )
}
