import React from 'react';
type Props = {
  name: string;
  picture: string;
}

const Icon: React.FC<Props> = ({ name, picture }: Props) => {
  return (
    <div className= "flex items-center" >
      <img src={ picture } className = "w-16 h-16 mr-4" alt = { name } / >
      <p className="text-xl font-bold" > { name } </p>
    </div>
  )
}

export default Icon