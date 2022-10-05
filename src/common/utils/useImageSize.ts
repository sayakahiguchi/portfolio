import React, { useState, useCallback } from 'react'

export type useImageSizeProps = () => [
  imageSize: {
    imageHeight: number
    imageWidth: number
  },
  replaceImage: (naturalSize: { naturalWidth: number; naturalHeight: number; }) => void
]

export const useImageSize: useImageSizeProps = () => {
  const [imageSize, setImageSize] = useState<{
    imageHeight: number;
    imageWidth: number;
  }>({
    imageHeight: 0,
    imageWidth: 0,
  })

  const replaceImage = useCallback((naturalSize: { naturalWidth: number; naturalHeight: number; }) => {
    setImageSize({
      imageHeight: naturalSize.naturalHeight,
      imageWidth: naturalSize.naturalWidth,
    })
    return imageSize
  }, [setImageSize, imageSize])

  return [imageSize, replaceImage]
}