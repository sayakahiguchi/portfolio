import CoverImage from '@/components/atoms/CoverImage'
import PostTitle from '@/components/atoms/PostTitle'

interface Props {
  pageTitle?: string
  pageImg: string
}

const PageHeader: React.FC<Props> = ({ pageTitle, pageImg }: Props) => {
  return (
    <>
      <PostTitle>{pageTitle} </PostTitle>
    </>
  )
}

export default PageHeader
