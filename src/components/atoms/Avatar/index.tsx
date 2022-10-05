import Image from 'next/image'
import * as React from 'react'
import { AvatarStyle } from './Avatar.css'
type Props = {
  name?: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className={AvatarStyle.container}>
      <Image
        src={picture}
        className={AvatarStyle.image}
        alt={name}
        layout="fill"
        objectFit="cover"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <clipPath id="blob" clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.0025,0.0025)"
            fill="#012"
            d="M306.458 55.878c21.4 26.2 34.6 52.7 40.4 78.6 5.9 26 4.3 51.4 7.7 82.6 3.3 31.1 11.4 68-1.3 92.1-12.7 24-46.2 35.3-82.6 53.9-36.4 18.6-75.8 44.5-103.1 34.2-27.4-10.2-42.7-56.5-60-92.3-17.3-35.8-36.5-61.1-50.8-93.3-14.3-32.1-23.5-71.2-11.1-101.3 12.3-30.2 46.3-51.3 80-71.9 33.6-20.7 67-40.8 98.4-37.8 31.5 2.9 61 28.9 82.4 55.2"
          />
        </clipPath>
      </svg>
    </div>
  )
}

export default Avatar
