import { postBodyStyle } from './PostBody.css'
import markdownStyles from '@/components/Layouts/PostBody/markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div
      className={`${markdownStyles['markdown']} ${postBodyStyle.wrapper}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostBody
