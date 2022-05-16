import Avatar from '@/components/atoms/Avatar'
import DateFormatter from '@/components/functional/date-formatter'
import CoverImage from '@/components/atoms/CoverImage'
import PostTitle from '@/components/atoms/PostTitle'
import Author from '@/common/types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{ title } </PostTitle>
      <div className = "mb-8 md:mb-16 sm:mx-0" >
        <CoverImage title={ title } src = { coverImage } />
      </div>
    </>
  )
}

export default PostHeader
