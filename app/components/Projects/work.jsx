'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import first from '/public/first.png';
import second from '/public/second.png';
import third from '/public/third.png';
import fourth from '/public/fourth.png';
import fifth from '/public/fifth.png';
import { FaGithubAlt } from 'react-icons/fa';
import Link from 'next/link';
import styles from './project.module.css';

export default function Projects() {
  const [projects, useSetProjects] = useState([
    {
      projectNo: 1,
      title: 'Assignment-1',
      discription: 'A simple react project',
      img: first,
      href: 'https://github.com/NishaSaraswat07/React-Assignment1.git',
    },
    {
      projectNo: 2,
      title: 'Assignment-2',
      discription: 'Node-DateTime: Assignments',
      img: second,
      href: 'https://github.com/NishaSaraswat07/Nodejs-Assignment2.git',
    },
    {
      projectNo: 3,
      title: 'Assignment-3',
      discription: 'Random number generator',
      img: third,
      href: 'https://github.com/NishaSaraswat07/week3-PersonalProject-.git',
    },
    {
      projectNo: 4,
      title: 'Assignment-4',
      discription: 'API Assignment',
      img: fourth,
      href: 'https://github.com/NishaSaraswat07/Assignment4-space-.git',
    },
    {
      projectNo: 5,
      title: 'Assignment-5',
      discription: 'Portfolio made with Nextjs',
      img: fifth,
      href: 'https://github.com/NishaSaraswat07/nextjsPortfolio.git',
    },
  ]);

  return (
    <>
      <div className={styles.projectContainer}>
        <div className={styles.hr}>
          <h3>Work</h3>
          <hr />
        </div>
      </div>
      <div className={styles.cards}>
        {projects.map((project) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 0 }}
            className={styles.card}
            key={project.projectNo}
          >
            <div className={styles.cardContent}>
              <Link href={`/projects/project${project.projectNo}`}>
                <Image
                  src={project.img}
                  alt="project image"
                  width={230}
                  height={200}
                  style={{ borderRadius: 15 }}
                  priority
                />
              </Link>
              <div className={styles.cardDetails}>
                <p>{project.title}</p>
                <p>{project.discription}</p>
                <a
                  href={project.href}
                  alt="link to github"
                  label="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
