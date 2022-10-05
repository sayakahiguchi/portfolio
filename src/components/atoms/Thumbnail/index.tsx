import Image from 'next/image'
import * as React from 'react'
import { ThumbnailStyle } from './Thumbnail.css'

interface Props {
  src: string
}

const Thumbnail: React.FC<Props> = ({ src }: Props) => {
  return (
    <div className={ThumbnailStyle.wrapper}>
      <Image
        className={ThumbnailStyle.content}
        src={src}
        alt="Picture of the author"
        layout="responsive"
        height={1}
        width={1}
        objectFit="cover"
        objectPosition="top"
      />
    </div>
  )
}

export default Thumbnail
