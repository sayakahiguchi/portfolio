import * as React from 'react'
import { footerStyles } from './Footer.css'
import { CMS_NAME, EXAMPLE_PATH } from '@/common/lib/constants'
import Paragraph from '@/components/atoms/Paragraph'

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <p className={footerStyles.copyright}>
        <small>copyrights {CMS_NAME} all rights reserved.</small>
      </p>
    </footer>
  )
}

export default Footer
