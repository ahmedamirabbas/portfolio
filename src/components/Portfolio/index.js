import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
/*import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'*/

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  //const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  /*useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }*/

  /*const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }*/

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>
          <div className="images-container">
            <div className="image-box" key={1}>
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/067/975/389/large/ahmed-amir-abd-alkhalig-abbas-screen-shot-2023-10-07-at-15-15-12.jpg?1696681569"
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">Games Hub</p>
                <h4 className="description">React, Chakra UI</h4>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://games-hub-jet.vercel.app/')
                  }
                >
                  View
                </button>
              </div>
            </div>
            <div className="image-box" key={2}>
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/067/975/413/small/ahmed-amir-abd-alkhalig-abbas-screen-shot-2023-10-07-at-15-04-13.jpg?1696681616"
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">Sudanese Graphics Collective</p>
                <h4 className="description">Hugo, Markdown</h4>
                <button
                  className="btn"
                  onClick={() => window.open('https://sgcsd.github.io/')}
                >
                  View
                </button>
              </div>
            </div>
            <div className="image-box" key={3}>
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/050/334/951/large/ahmed-amir-abbas-staffworthy-mock-up.jpg?1654615814"
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">Staffworthy</p>
                <h4 className="description">Wordpress, Cpanel</h4>
                <button
                  className="btn"
                  onClick={() => window.open('https://www.staffworthy.com')}
                >
                  View
                </button>
              </div>
            </div>
            <div className="image-box" key={4}>
              <img
                src="https://cdna.artstation.com/p/assets/images/images/050/334/856/large/ahmed-amir-abbas-lingu-mock-up.jpg?1654615680"
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">Lingucraft</p>
                <h4 className="description">Wordpress, Elemantor</h4>
                <button
                  className="btn"
                  onClick={() => window.open('https://www.lingucraft.com')}
                >
                  View
                </button>
              </div>
            </div>
            <div className="image-box" key={5}>
              <img
                src="../src/assets/images/sumitup.jpg"
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">SumItUp</p>
                <h4 className="description">React, RapidAPI, Tailwind</h4>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://sumitup-eosin.vercel.app/')
                  }
                >
                  View
                </button>
              </div>
            </div>
            <div className="image-box" key={6}>
              <img
                src="https://cdna.artstation.com/p/assets/images/images/067/975/408/small/ahmed-amir-abd-alkhalig-abbas-screen-shot-2023-10-07-at-15-07-34.jpg?1696681604"
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">My games</p>
                <h4 className="description">Unity, C#</h4>
                <button
                  className="btn"
                  onClick={() => window.open('https://oujiarts.itch.io')}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
