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
        viewBox="0 0 320.31 399.24"
        preserveAspectRatio="xMidYMid meet"
        className={AvatarStyle.clip}
      >
        <defs>
          <clipPath id="blob" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00312, 0.0025)"
              fill="#012"
              d="M266.356 55.465c21.379 26.184 34.566 52.668 40.36 78.553 5.895 25.984 4.297 51.369 7.693 82.55 3.297 31.08 11.39 67.959-1.299 92.044-12.687 23.985-46.155 35.279-82.52 53.867-36.365 18.59-75.727 44.473-103 34.18-27.374-10.194-42.66-56.466-59.943-92.245-17.283-35.778-36.465-61.063-50.75-93.243C2.61 179.09-6.582 140.014 5.806 109.932 18.095 79.75 52.062 58.663 85.73 38.076 119.297 17.388 152.665-2.7 184.035.299c31.47 2.898 60.941 28.882 82.32 55.166"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Avatar
