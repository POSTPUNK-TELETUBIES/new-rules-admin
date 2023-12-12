import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  PropsWithChildren,
} from 'react'
import { RuleDTO } from '../../../types/rule'

interface IDrawerContext {
  isOpenDrawer: boolean
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>
  columnActive: string
  setColumnActive: Dispatch<SetStateAction<string>>
  itemActive: RuleDTO
  setItemActive: Dispatch<SetStateAction<RuleDTO>>
}

export const DrawerContext = createContext<IDrawerContext>({} as IDrawerContext)

export const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
  const [columnActive, setColumnActive] = useState<string>('')
  const [itemActive, setItemActive] = useState<RuleDTO>({} as RuleDTO)

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
