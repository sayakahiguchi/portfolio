import PostTitle from '@/components/atoms/PostTitle'
import CoverImage from '@/components/atoms/CoverImage'

interface Props {
  pageTitle: string;
  pageImg: string;
}

const PageHeader = ({
  pageTitle,
  pageImg
}: Props) => {
  const imgUrl = pageImg
  return (
    <>
    <PostTitle>{ pageTitle } < /PostTitle>
    < CoverImage title = { pageTitle } src = { imgUrl } />
      < />
  )
}

export default PageHeader
