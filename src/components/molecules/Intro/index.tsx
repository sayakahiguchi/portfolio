import Image from 'next/image'
import React from 'react'
import { introStyle } from './Intro.css'
import Paragraph from '@/components/atoms/Paragraph'
import Blob from '@/components/atoms/Blob'

const Intro = () => {
  return (
    <section className={introStyle.container}>
      <div className={introStyle.description}>
        <h2 className={introStyle.title}> Nice to meet you. </h2>
        <Paragraph>
          コーディング、デザインを主に活動しているヒグチ
          サヤカのポートフォリオです。
          <br />
          designer and front - end developper.You can know about me and see my
          works and blog here:)
        </Paragraph>
      </div>
      <div className={introStyle.background}>
        <Blob />
      </div>
    </section>
  )
}

export default Intro
