import React, { useState, useCallback, useTransition, ChangeEvent } from 'react'
import { CardListStyle } from './CardList.css'
import Work from '@/common/types/works'
import Categories from '@/common/types/categories'
import Card from '@/components/molecules/Card'
import FilterForm from '@/components/molecules/FilterForm'
import { categoryList } from '@/common/lib/categoryList'

type Props = {
  works: Work[]
  sliced?: string
}

const CardList: React.FC<Props> = ({ works, sliced }: Props) => {
  const [state, setState] = useState({
    workList: works,
    filters: new Set(),
  })
  const [isPending, startTransition] = useTransition()

  const handleFilterChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters)
        let workList = works

        if (event.target.checked) {
          filters.add(event.target.value)
        } else {
          filters.delete(event.target.value)
        }

        startTransition(() => {
          if (filters.size) {
            workList = workList.filter((work) => {
              return work.categories.some((category) => {
                return filters.has(category)
              })
            })
          }
        })

        return {
          filters,
          workList,
        }
      })
    },
    [works, setState]
  )

  return (
    <>
      <FilterForm
        array={categoryList.filter((item) => item.index <= 3)}
        target="name"
        filters={state.filters}
        onFilterChange={handleFilterChange}
      />
      {isPending ? (
        <p> Loading...</p>
      ) : (
        <ul className={CardListStyle}>
          {state.workList.map((work) => (
            <Card card={work} key={work.index} />
          ))}
        </ul>
      )}
    </>
  )
}

export default CardList
