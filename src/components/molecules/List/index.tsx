import Image from 'next/image'
import * as React from 'react'
import { ListStyles } from './List.css'
import TargetType from '@/common/types/targets'
import Icon from '@/components/atoms/Icon'
import Paragraph from '@/components/atoms/Paragraph'

type Props = {
  target: TargetType[]
}

const List: React.FC<Props> = ({ target }: Props) => {
  return (
    <>
      <ul className={ListStyles.container}>
        {target.map((item, index) => (
          <li className={ListStyles.item} key={index}>
            {item.title ? <p>{item.title} </p> : ''}
            {item.description ? <Paragraph>{item.description} </Paragraph> : ''}
            {item.media ? (
              <Image
                src={item.media}
                alt={item.name}
                objectFit="contain"
                objectPosition="center"
                layout="responsive"
              />
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
