'use client'

import React from 'react'
import {FaGithubAlt} from 'react-icons/fa'
import Image from 'next/image'
import first from '/public/first.png'
import second from '/public/second.png'
import third from '/public/third.png'
import fourth from '/public/fourth.png'
import fifth from '/public/fifth.png'
import {HiOutlineStatusOnline} from 'react-icons/hi'
import styles from '../[id]/individual.module.css'

export default function ProjectPage({ params }) {
  switch (params.id) {
    case 'project1':
      return (
        <div className={styles.main}>
          <h2>
            Portfolio Project:
            {' '}
            {params.id}
          </h2>
          <div>
            <Image src={first} alt="project picture" width={400} height={400} />
          </div>
          <div className={styles.icon}>
            <a href="https://assignment1-silk.vercel.app" alt="link to vercel live" target="_blank" rel="noreferrer"><HiOutlineStatusOnline /></a>
            <a href="https://github.com/NishaSaraswat07/React-Assignment1.git" alt="link to github" label="github" target="_blank" rel="noreferrer"><FaGithubAlt /></a>
          </div>
        </div>
      )
    case 'project2':
      return (
        <div className={styles.main}>
          <h2>
            Portfolio Project:
            {' '}
            {params.id}
          </h2>

          <div>
            <Image src={second} alt="project picture" width={400} height={400} />
          </div>
          <div className={styles.icon}>
            <a href="/" alt="link to vercel live" target="_blank"><HiOutlineStatusOnline /></a>
            <a href="https://github.com/NishaSaraswat07/Nodejs-Assignment2.git" alt="link to github" label="github" target="_blank" rel="noreferrer"><FaGithubAlt /></a>
          </div>
        </div>
      )
    case 'project3':
      return (
        <div className={styles.main}>
          <h2>
            Portfolio Project:
            {' '}
            {params.id}
          </h2>

          <div>
            <Image src={third} alt="project picture" width={400} height={400} />
          </div>
          <div className={styles.icon}>
            <a href="https://random-numbergenerator.vercel.app" alt="link to vercel live" target="_blank" rel="noreferrer"><HiOutlineStatusOnline /></a>
            <a href="https://github.com/NishaSaraswat07/week3-PersonalProject-.git" alt="link to github" label="github" target="_blank" rel="noreferrer"><FaGithubAlt /></a>
          </div>
        </div>
      )
    case 'project4':
      return (
        <div className={styles.main}>
          <h2>
            Portfolio Project:
            {' '}
            {params.id}
          </h2>

          <div>
            <Image src={fourth} alt="project picture" width={400} height={400} />
          </div>
          <div className={styles.icon}>
            <a href="https://assignment4-nishasaraswat07.vercel.app" alt="link to vercel live" target="_blank" rel="noreferrer"><HiOutlineStatusOnline /></a>
            <a href="https://github.com/NishaSaraswat07/Assignment4-space-.git" alt="link to github" label="github" target="_blank" rel="noreferrer"><FaGithubAlt /></a>
          </div>
        </div>
      )
    case 'project5':
      return (
        <div className={styles.main}>
          <h2>
            Portfolio Project:
            {' '}
            {params.id}
          </h2>

          <div>
            <Image src={fifth} alt="project picture" width={400} height={400} />
          </div>
          <div className={styles.icon}>
            <a href="https://my-portfolio-nishasaraswat07.vercel.app" alt="link to vercel live" target="_blank" rel="noreferrer"><HiOutlineStatusOnline /></a>
            <a href="https://github.com/NishaSaraswat07/nextjsPortfolio.git" alt="link to github" label="github" target="_blank" rel="noreferrer"><FaGithubAlt /></a>
          </div>
        </div>
      )
    default:
      break;
  }
}
