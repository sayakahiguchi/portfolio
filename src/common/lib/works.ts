import React from 'react'

export type worksArray = {
  id: number
  title: string
  image: string
  description: React.ReactNode | JSX.Element
  categories: string[]
  link?: string
}[]

export const works: worksArray = [
  {
    id: 1,
    title: '株式会社fRom EAST',
    image: '/assets/works/fromeast000.jpeg',
    description:
      '<p>担当業務: デザイン、制作、運用保守</p><p>ロゴのオレンジを基調に、補色を用いた配色を使用。地域に密着した不動産業を全面に押し出したいことから、particle-jsで動きと繋がりをイメージできる背景にした。</p>',
    categories: ['1', '11', '12'],
    link: 'https:https://fromeast000.jp'
  },
  {
    id: 2,
    title: 'fRom EAST Shop',
    image: 'https://placehold.jp/400x300.png',
    description:
      '<p>担当業務: 構築・運営</p><p>EC-CUBE4系を利用したECサイトの構築。開発環境はdocker-composeを利用。</p>',
    categories: ['1', '14', '15'],
  },
  {
    id: 3,
    title: 'YTHカメラ',
    image: '/assets/works/camera-kaitorisatei.jpeg',
    description:
      '<p>担当業務: 運用保守 バナー制作</p>カメラ買取系企業のLPの運用保守を主に担当。また、サイト内バナーを2パターン*2サイズ制作。<br/>Google Spread Sheetと連携した出力機能を実装。クライアントに直接スプレッドシート内に入力してもらうことで、買取実績の更新を簡素化に成功。</p>',
    categories: ['1', '15', '21'],
  },
  {
    id: 4,
    title: 'Auto Fun',
    image: '/assets/works/car-buy-and-sell.jpg',
    description:
      '<p>想定した対象: 30代 ~ 50代男性。外車を所有。</p><p>高級感と親しみやすさの両方のリクエスト。チャコールを基調とした色調と見出し背景に大理石のテクスチャを用いることで落ち着いた印象を持たせつつ、見出しに用いるフォントをややカジュアルで力強いものにすることで両立を目指した。</p><p>ロゴはネオン感のあるものを希望されたため、ネオンサインをイメージしつつ、直線と曲線を組み合わせたタイプで車を表現。</p><p>Google Spread Sheetと連携した出力機能を実装。クライアントに直接スプレッドシート内に入力してもらうことで、買取実績の更新を簡素化に成功。</p>',
    categories: ['1', '5', '13'],
  },
  {
    id: 5,
    title: 'Clover (合同会社エーディー)/Zeus (GTアセットマネジメント合同会社)',
    image: '/assets/works/ad-llc.jpeg',
    description:
      '<p>担当業務: デザイン、コーディング、ロゴデザイン</p><p>必要最低限のコンテンツと機能のみを希望。ジュエリーや時計等、高級な嗜好品を取り扱うため、色調と見出しフォントをシックな印象で統一した。</p>',
    categories: ['1', '12'],
    link: 'https://gt-asset-management.asia'
  },
  {
    id: 6,
    title: 'アジアスーパー',
    image: '/assets/works/asia-super.jpg',
    description:
      '<p>担当業務: カスタマイズ、店舗情報・商品・コレクション・タグ登録、決済システム導入、在庫管理システム・POS連携、スタッフへのサポート</p><p>食品・飲料、雑貨を販売する実店舗のECサイトをShopifyで構築。Shopify CLIで構築。スライダー、商品一覧の"カートに追加"ボタン、ポップアップ、問い合わせ機能を実装。</p>',
    categories: ['1', '12', '14'],
    link: 'https://www.asia-super.com/'
  },
  {
    id: 7,
    title: '家もん',
    image: '/assets/works/iemon2_300x250.jpg',
    description:
      '<p>担当業務: バナー制作</p><p>リースバックのWeb広告用バナー。2パターン*2サイズを制作。<br/>企業ロゴに合わせて緑を基調とした近似色でまとめた。</p><p>提供された文章をまとめ、目に止まりやすいよう努めた。</p>',
    categories: ['2', '21'],
  },
  {
    id: 8,
    title: 'SNSプロフィール画面 (Cocoda)',
    image: '/assets/works/cocodaUI1.jpg',
    description:
      '<p>Cocoda! UIカリキュラム#001 SNSのプロフィール画面</p><p>ペルソナ、コンセプト: プライベートも楽しむ働き盛りの26才女性。生活の中で撮る写真をオシャレに見せたい。</p><p>Neumorphismを使ったInstagram風の画像投稿メイン型SNS<br/>パステルやモノトーンなど、様々なユーザのテイストに合わせられるように明るくニュートラルなグレーで配色。フォローボタンのみをブルーにすることでハイライトさせる。<br/>保存した画像の表示ページを下の固定に設置。ネイルサロンやヘアサロンなどでの「こんな風にしてください」や、買い物中の「あれって何のブランド(商品名)だっけ?」が解決しやすくなり、ユーザの利用時間を増やせる。<br/>igは「縦(の画像)に弱い」ことが弱点とされていたので、19:6、4:3、1:1の画像をグリッドで表示できるフィードに。グリッドに合わないと感じたので、Pinterestのような角丸は使わず。</p><p><a href="https://xd.adobe.com/view/7fb5cbf0-8763-47e3-8356-e1e018d652c8-2ae6/">アニメーション(Adobe XD)</p>',
    categories: ['2', '23'],
    link: 'https://xd.adobe.com/view/7fb5cbf0-8763-47e3-8356-e1e018d652c8-2ae6/'
  },
  {
    id: 9,
    title: 'マルシェイベントポスター (Cocoda)',
    image: '/assets/works/cocodaDaily03.jpeg',
    description:
      '<p>Cocoda! Daily Day3 イベント広告チラシ</p><p>ペルソナ、コンセプト: 20〜40代の女性。目黒は比較的高所得者の居住エリアで、自由が丘はおしゃれなお店が多く、写真映え・意識高め</p><p>若者だけでなく30〜40の代主婦層も取り込みたいので、にぎやかすぎないデザインを目指した。<br/>QRコードを掲載しサイトやSNSへの導線を確保。詳細な情報を提供するほか、SNS上でシェアしてもらい来場者数の増加に繋げる狙い。</p>',
    categories: ['2'],
  },
  {
    id: 10,
    title: 'LIPSキャンペーンバナー (Cocoda)',
    image: '/assets/works/cocodaDaily06.jpeg',
    description:
      '<p>Cocoda! Daily Day6 LIPSコスメプレゼント企画のクリエイティブ</p><p>ペルソナ、コンセプト: LIPSユーザ = 10代から20代前半。プレゼントするコスメはデパコス。</p><p>読みやすさと明朝体の高級感を両立するため、余白を設け、漫画のセリフで主に使われるアンチック体とゴシック体の組み合わせた源暎アンチックを使用。</p>',
    categories: ['2', '21'],
  },
  {
    id: 11,
    title: 'サイトロゴ (Cocoda)',
    image: '/assets/works/cocodaDaily08.jpeg',
    description:
      '<p>Cocoda! Daily Day8 ヴィーガン向け料理レシピサイトのロゴ</p><p>ペルソナ、コンセプト: 10代~20代女性。ヴィーガン、ナチュラル思考。新しいレシピを「発見」する。</p><p>野菜、自然をイメージさせる色調を使用。c"oo"kの部分を目に見立て、"新しいレシピを「発見」する"ことを表現。</p>',
    categories: ['3', '22'],
  },
]
