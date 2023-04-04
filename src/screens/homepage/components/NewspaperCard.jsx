import React from 'react'
import NewspaperCardCSS from './NewspaperCardCSS.css'

const NewspaperCard = () => {
    return (
        <>
            <div className='card'>
                <img src='https://epaper.telegraphindia.com/epaperimages////17062020////17062020-md-hr-1.jpg' class='card-img' alt=''/>
                <div className='card-body'>
                    <h1 className='card-title'>THE TELEGRAPH</h1>
                    <p className='card-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Eos dolorum tempora asperiores 
                                            impedit vel eius ea illo nostrum deserunt dolores!
                    </p>
                    <button className='card-button'>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default NewspaperCard




