import React from 'react'
import { FaGithubAlt, FaLinkedinIn, FaFigma } from 'react-icons/fa'

export default function footer() {
  return (
    <div>
      <a href="https://github.com/NishaSaraswat07" label="github" target="_blank" rel="noreferrer"><FaGithubAlt /></a>
      <a href="https://www.linkedin.com/in/nishasaraswat/" label="linkedin" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
      <a href="https://www.figma.com/files/recent?fuid=933343078711531768" label="figma" target="_blank" rel="noreferrer"><FaFigma /></a>
    </div>
  )
}
