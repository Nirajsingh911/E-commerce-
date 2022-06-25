import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white boder-0">
                <img src="/Images/img1.jpg" className="card-img" alt="Background"  height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SESSION</h5>
                    <p className="card-text fs-2">CHEAK OUT ALL TREANDS </p>

                    </div>
                              
              </div>
            </div>

                <Products/>
        </div>
    )
}

export default Home
