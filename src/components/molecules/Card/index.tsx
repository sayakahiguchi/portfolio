import Image from 'next/image'
import * as React from 'react'
import { CardStyle } from './Card.css'
import { modalStyles } from '@/components/molecules/Modal/Modal.css'
import { PutModal } from '@/common/utils/useModal'
import { categoryList } from '@/common/lib/categoryList'
import Icon from '@/components/atoms/Icon'
import Maximize from '@/components/atoms/Icons/Maximize'
import { useImageSize } from '@/common/utils/useImageSize'
import Work from '@/common/types/works'

type Props = {
  card: Work
}

const Card: React.FC<Props> = ({ card }: Props) => {
  const [ModalComponent, openModal, closeModal, state] = PutModal()
  const [imageSize, replaceImage] = useImageSize()
  return (
    <li className={CardStyle.item} key={card.index}>
      <div className={CardStyle.media}>
        <Image
          alt={card.title}
          src={card.image}
          layout="responsive"
          objectFit="contain"
          objectPosition="center"
          height={imageSize.imageHeight}
          width={imageSize.imageWidth}
          onLoadingComplete={(naturalSize) => {
            replaceImage(naturalSize)
          }}
        />
        <Icon
          element="button"
          type="button"
          svg
          size="small"
          className={CardStyle.icon}
          onClick={openModal}
          src="/"
        >
          <Maximize />
        </Icon>
      </div>
      <ModalComponent>
        <h3 className={modalStyles.title}>{card.title}</h3>
        <div
          className={modalStyles.description}
          dangerouslySetInnerHTML={{ __html: card.description }}
        ></div>
        <ul className={modalStyles.categories}>
          {card.categories.map((category, index) => {
            const category_id = category
            let category_name
            categoryList.find((listItem) => {
              if (listItem.id === category_id) {
                category_name = `${listItem.name}`
              }
            })
            return (
              <li className={modalStyles.category} key={index}>
                {category_name}
              </li>
            )
          })}
        </ul>
        <div className={modalStyles.media}>
          <Image
            alt={modalStyles.title}
            src={card.image}
            layout="responsive"
            objectFit="contain"
            objectPosition="top"
            height={imageSize.imageHeight}
            width={imageSize.imageWidth}
            onLoadingComplete={replaceImage}
          />
        </div>
      </ModalComponent>
    </li>
  )
}
export default Card
