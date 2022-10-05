import React from 'react'
import Paragraph from '@/components/atoms/Paragraph'
import Icon from '@/components/atoms/Icon'
import Button from '@/components/atoms/Button'
import profileStyles from './Profile.css'
import Avatar from '@/components/atoms/Avatar'

export const Profile = () => {
  return (
    <div className={profileStyles.container}>
      <h3 className={profileStyles.title}>ヒグチ サヤカ</h3>
      <div className={profileStyles.description}>
        <Paragraph>
          1999年03月10日生。関西大学 外国語学部 中退。
          <br />
          2019年からアルバイト先のコーポレートサイトやECの構築を担当。2020年よりフリーランスとしても案件を受注を開始する。
        </Paragraph>
        <Paragraph>
          MBTIはINFP-T(仲介者型)。好奇心が強くクリエイティブなことを好み、適用力がある性格。
        </Paragraph>
      </div>
      <div className={profileStyles.icon}>
        <Avatar picture="/assets/Icon/SayakaHIGUCHI.jpg" />
      </div>
    </div>
  )
}

export default Profile
