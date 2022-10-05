import React from 'react'
import FilterFormStyles from './FilterForm.css'
import Input from '@/components/atoms/Input'
import Label from '@/components/atoms/label'
import Icon from '@/components/atoms/Icon'
import { Filter } from '@/components/atoms/Icons'
import Grid from '@/components/molecules/Grid'

type Props = {
  children?: React.ReactNode
  array: string[] | number[] | { [key: string | number]: any }
  filters: any
  target: string
  onFilterChange: (event: any) => void
}

const FilterForm: React.FC<Props> = ({
  children,
  array,
  filters,
  target,
  onFilterChange,
}: Props) => {
  return (
    <>
      <Grid element="div" display="inline" alignItems="center">
        <Icon display="inline" svg src="/" size="small">
          <Filter />
        </Icon>
        <form action="" className={FilterFormStyles.container}>
          {array.map((currentValue) => {
            return (
              <div
                className={
                  `${FilterFormStyles.input}` +
                  (filters.has(currentValue.id)
                    ? ` ${FilterFormStyles.inputActive} `
                    : '')
                }
                key={currentValue.index}
              >
                <Input
                  type="checkbox"
                  name="categories"
                  value={currentValue.id}
                  id={currentValue.id}
                  onChange={onFilterChange}
                  checked={`${filters.has(currentValue.id)}`}
                />
                <Label htmlFor={currentValue.id} text={currentValue[target]} />
              </div>
            )
          })}
        </form>
      </Grid>
      {children}
    </>
  )
}
export default FilterForm
