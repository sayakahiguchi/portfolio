import Categories from './categories'
type WorkType = {
  index: number;
  id: number;
  title: string;
  image: string;
  description: string;
  categories: string[];
  link?: string
}

export default WorkType