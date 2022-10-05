import { useTheme } from 'next-themes'
import React, { useEffect, useState, useMemo } from 'react'
import Moon from '@/components/atoms/Icons/Moon'
import Settings from '@/components/atoms/Icons/Settings'
import Sun from '@/components/atoms/Icons/Sun'
import { themeChangerStyles } from './themeChanger.css'
import Icon from '@/components/atoms/Icon'

const ThemesList: {
  id: number
  name: string
  icon: JSX.Element
}[] = [
  { id: 1, name: 'system', icon: <Settings /> },
  { id: 2, name: 'light', icon: <Sun /> },
  { id: 3, name: 'dark', icon: <Moon /> },
]
const ThemeNameList = ThemesList.map((theme) => theme.name)

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const [active, setToggle] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
    let currentTheme = window.localStorage.getItem('theme')
    if (currentTheme != null) {
      setTheme(currentTheme)
    }
  }, [setMounted, setTheme])

  const currentTheme = useMemo(() => {
    let object
    if (theme !== undefined) {
      ThemesList.filter((item) => {
        if (item.name === theme) {
          object = item.icon
        }
      })
      return (
        <Icon element="div" svg size="small" src="/">
          {object}
        </Icon>
      )
    }
    return 'theme'
  }, [theme])

  const changeSetTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement
    const newTheme = element.value
    window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  if (!mounted) return null
  return (
    <div className={themeChangerStyles.wrapper}>
      <button
        className={themeChangerStyles.button}
        type="button"
        onClick={() => setToggle(!active)}
      >
        {currentTheme}
      </button>
      <fieldset
        name="theme"
        className={
          `${themeChangerStyles.field}` +
          (active ? ` ${themeChangerStyles.is_active}` : '')
        }
      >
        {ThemesList.map((item) => {
          return (
            <div className={themeChangerStyles.button} key={item.id}>
              <input
                className={themeChangerStyles.input}
                type="radio"
                name="theme"
                id={item.name}
                value={item.name}
                onChange={changeSetTheme}
                checked={theme === item.name}
              />
              <label htmlFor={item.name}>
                <span className={themeChangerStyles.icon}>{item.icon}</span>
                {item.name}
              </label>
            </div>
          )
        })}
      </fieldset>
    </div>
  )
}

export default ThemeChanger
