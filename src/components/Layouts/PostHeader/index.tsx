import { postHeaderStyle } from './PostHeader.css'
import Author from '@/common/types/author'
import Avatar from '@/components/atoms/Avatar'
import CoverImage from '@/components/atoms/CoverImage'
import PostTitle from '@/components/atoms/PostTitle'
import DateFormatter from '@/components/functional/date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className={postHeaderStyle.wrapper}>
      <div className={postHeaderStyle.content}>
        <PostTitle>{title}</PostTitle>
        <p>{date}</p>
      </div>
      <CoverImage title={title} src={coverImage} />
    </div>
  )
}

export default PostHeader
