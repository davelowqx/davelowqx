import React from 'react'
import { Education, Experience, Skills, Projects, Title } from '../landing'
import Seo from '../components/Seo'
import '../styles/global.css'

// markup
const IndexPage = () => {
  return (
    <>
      <Seo />
      <div className="m-6">
        <div className="mx-auto max-w-3xl leading-snug text-gray-900">
          <Title />
          <br />
          <Experience />
          <br />
          <Education />
          <br />
          <Skills />
          <br />
          <Projects />
        </div>
      </div>
    </>
  )
}

export default IndexPage
