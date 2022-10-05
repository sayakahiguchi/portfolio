export const categoryList:
  {
    index: number;
    id: string;
    name: string;
    children?: string[]
  }[] = [
    { index: 1, id: '1', "name": "Web", 'children': ['11', '12', '13', '14', '15'] },
    { index: 2, id: '2', "name": "デザイン", 'children': ['21', '22', '23'] },
    { index: 3, id: '3', "name": "その他" },
    { index: 4, id: '11', "name": "Webデザイン" },
    { index: 5, id: '12', "name": "コーディング" },
    { index: 6, id: '13', "name": "LP制作" },
    { index: 7, id: '14', "name": "ECサイト構築" },
    { index: 8, id: '15', "name": "運用保守" },
    { index: 9, id: '21', "name": "バナー" },
    { index: 10, id: '22', "name": "ロゴ" },
    { index: 11, id: '23', "name": "UI" },
  ]