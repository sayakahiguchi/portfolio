import markdownStyles from '@/components/Layouts/PostBody/markdown-styles.module.css'
import Container from '@/components/Layouts/Container'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className= { markdownStyles['markdown'] } dangerouslySetInnerHTML = {{ __html: content }
} />
  )
}

export default PostBody
