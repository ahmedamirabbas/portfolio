import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Video from '../Video/index'
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
              Sass, Git
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
              href="https://www.linkedin.com/in/ahmedamirabbas/overlay/1635544112468/single-media-viewer/?profileId=ACoAABmQiQoBw2CVg0kxVx8LedDfwOo27JNq6Yc"
              target="blank"
            >
              link
            </a>
            , or feel free to peek at some of my blog{' '}
            <a href="https://blog.ahmedamir.dev" target="blank">
              posts
            </a>
            .
          </p>
        </div>
        <div className="bg-vid">
          <Video />
        </div>
        <div className="stage-cube-cont">
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
