import React from 'react'
import InputStyle from './Input.css'

type Props = {
  type: string
  name: string
  value: string
  id: string | undefined
  checked: boolean
  key?: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const Inputs: React.FC<Props> = ({
  type,
  name,
  value,
  id,
  checked,
  key,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      checked={checked}
      key={key}
      onChange={onChange}
      className={InputStyle}
    />
  )
}

export default Inputs
