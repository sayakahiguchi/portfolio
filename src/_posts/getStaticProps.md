---
title: 'getStaticPropsで連想配列を出力する備忘録'
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

## 配列を作る
配列worksを宣言。
多次元配列は次元の数だけブラケットを置くことによってデータ型を指定する。
```TypeScript: @/common/lib/works.ts
export const works:
{ [key: string]: string }[] = [
  { "title": "hoge", description: "hogehoge" },
  { "title": "piyo", description: "piyopiyo" },
  { "title": "dummy", description: "dummydummy" },
]
```

## Type型を宣言する
type型を宣言
```TypeScript:src/common/types/works.ts
type WorkType = {
  title: string;
  image: string;
  description: string;
}

export default WorkType
```
## Componentを作る
今回はCardListの中にCardコンポーネントを入れる。
新しくworkというPropsを作り、Array.prototype.map()で新しい配列を入れる。

```TypeScript:CardList.tsx
import React from 'react'
import Work from '@/common/types/works'
import Card from '@/components/molecules/Card'

type Props = {
  work: Work[]
};

const CardList: React.FC<Props> = ({ work }: Props) => {
  return (
    <ul>
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

## Page/index

typeで型を宣言し、getStaticPropsでpropsに連想配列を渡す。
コンポーネントのworksにworksを渡す。

```TypeScript:index.tsx
import React from 'react';
...
import { works } from '@/common/lib/works'
import Work from '@/common/types/works';
type Props = {
  allworks: Work[]
};

const Index = ({ works }: Props) => {
  ...
  return (
    <>
    ...
      <CardList works={ works } />
    ...
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      works
    },
  };
}

export default Index

```