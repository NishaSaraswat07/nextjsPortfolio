import React from 'react'
import {FaGithubAlt, FaLinkedinIn, FaFigma} from 'react-icons/fa'


export default function footer() {
  return (
    <div>
         <a href="https://github.com/NishaSaraswat07" label="github" target="_blank"><FaGithubAlt /></a>
          <a href="https://www.linkedin.com/in/nishasaraswat/" label="linkedin" target="_blank"><FaLinkedinIn /></a>
          <a href="https://www.figma.com/files/recent?fuid=933343078711531768" label="figma" target="_blank"><FaFigma /></a>
    </div>
  )
}
