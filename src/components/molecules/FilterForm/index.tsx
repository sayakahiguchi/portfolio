import React from 'react'
import FilterFormStyles from './FilterForm.css'
import Inputs from '@/components/atoms/Inputs'
import Labels from '@/components/atoms/Labels'
import Icon from '@/components/atoms/Icon'
import { Filter } from '@/components/atoms/Icons'
import Grid from '@/components/molecules/Grid'

type Props = {
  children?: React.ReactNode
  array: {
    index: number
    id: string
    name: string
    children?: string[] | undefined
  }[]
  filters: any
  target: string
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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
                <Inputs
                  type="checkbox"
                  name="categories"
                  value={currentValue.id}
                  id={currentValue.id}
                  onChange={onFilterChange}
                  checked={filters.has(currentValue.id)}
                />
                <Labels htmlFor={currentValue.id} text={currentValue.name} />
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
