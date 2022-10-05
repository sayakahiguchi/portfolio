import { postBodyStyle } from './PostBody.css'
import markdownStyles from '@/components/Layouts/PostBody/markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className={postBodyStyle.wrapper}>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
