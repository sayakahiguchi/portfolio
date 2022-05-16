import React from 'react'
import { skills } from '@/common/lib/skills'
import { GetStaticProps } from 'next';
import Icon from '@/components/atoms/Icon';

const IconList= () => {
  return (
    <ul className='grid md:grid-cols-4 gap-6' >
    {
      skills.map((skill) => (
        <li>
          <Icon
          name = { skill.name }
          picture = { skill.media }
          />
        </li>
      ))
    }
    </ul>
  )
}

export default IconList