import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import RiverVid from '../RiverVideo/index'
import GifComponent from '../Gif/index'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Skills', ' ', '&', ' ', 'Experience']}
              idx={15}
            />
          </h1>
          <p className="prevent-select">
            Expert in front-end development including technologies like{' '}
            <span className="yellow">
              HTML5, CSS3, JavaScript, jQuery, React, TypeScript, Bootstrap,
              Sass, Git, MERN
            </span>
            , etc.
          </p>
          <p align="LEFT" className="prevent-select">
            I'm a graphic designer with a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any support after the project's
            completion. I guarantee commitment and top-notch project completion.
          </p>
          <p className="prevent-select">
            Visit my{' '}
            <a
              href="https://www.linkedin.com/in/ahmedamirabbas/"
              target="blank"
            >
              {' '}
              LinkedIn
            </a>{' '}
            profile for more details. Also, you can check my CV on this{' '}
            <a
              href="https://drive.google.com/file/d/1PRE2Xql-DDRU5Gyk6D3qziwyK_anHDJW/view?usp=sharing"
              target="blank"
            >
              link
            </a>
            , or feel free to peek at some of my blog{' '}
            <a href="https://medium.com/@ahmad.abdulkhalig" target="blank">
              posts
            </a>
            .
          </p>
        </div>
        <div id="river-vid">
          <RiverVid />
        </div>
        <div className="gif-cont">
          <div className="gif">
            <GifComponent />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
