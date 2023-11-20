import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  PropsWithChildren,
} from 'react'
import { Rule } from '../../types/rule'

interface IDrawerContext {
  isOpenDrawer: boolean
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>
  columnActive: number
  setColumnActive: Dispatch<SetStateAction<number>>
  itemActive: Rule
  setItemActive: Dispatch<SetStateAction<Rule>>
}

export const DrawerContext = createContext<IDrawerContext>({} as IDrawerContext)

export const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
  const [columnActive, setColumnActive] = useState<number>(1)
  const [itemActive, setItemActive] = useState<Rule>({} as Rule)

  const sharedData: IDrawerContext = useMemo(
    () => ({
      isOpenDrawer,
      setIsOpenDrawer,
      columnActive,
      setColumnActive,
      itemActive,
      setItemActive,
    }),
    [isOpenDrawer, setIsOpenDrawer, columnActive, setColumnActive],
  )

  return (
    <DrawerContext.Provider value={sharedData}>
      {children}
    </DrawerContext.Provider>
  )
}