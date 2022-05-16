---
title: 'getStaticPropsで連想配列を出力する'
excerpt: ''
coverImage: '/assets/blog/preview/cover.jpg'
date: '2022-05-09'
author:
  name: Sayaka HIGUCHI
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: ''
---

## 目的

getStaticPropsを利用して連想配列を出力する。
利用しない方法でもimportを使用すれば出力は可能(別記事にて記載)。

## 環境
```json:package.json
"next": "12.1.6",
"react": "18.1.0",
"react-dom": "18.1.0",
"react-router-dom": "^6.3.0"
```

## 配列
配列worksを宣言。
多次元配列は次元の数だけブラケットを置くことによってデータ型を指定する。
```TypeScript: @/common/lib/works.ts
export const works:
{ [key: string]: string }[] = [
  { "title": "hoge", "description": "hogehoge" },
  { "title": "piyo", "description": "piyopiyo" },
  { "title": "dummy", "description": "dummydummy" },
]
```

## Type
type型を宣言
```TypeScript:src/common/types/works.ts
type WorkType = {
  title: string;
  image: string;
  description: string;
}

export default WorkType
```
## Component
今回はCardListの中にCardコンポーネントを入れる。
新しくworkというPropsを作り、Array.prototype.map()で新しい配列を入れる。

```
import React from 'react'
import Work from '@/common/types/works'
import { works } from '@/common/lib/works'
import Card from '@/components/molecules/Card'
import { GetStaticProps } from 'next';

type Props = {
  work: Work[]
};

const CardList: React.FC<Props> = ({ work }: Props) => {
  return (
    <ul className = 'grid md:grid-cols-4 gap-6 ' >
    {
      works.map(work => (
        <Card
        title = { work.title }
        media = { work.image }
        description = { work.description }
        />
      ))
    }
    < /ul>
  )
}

export default CardList
```