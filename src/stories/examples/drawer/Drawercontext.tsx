import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  PropsWithChildren,
} from 'react'

interface IDrawerContext {
  isOpenDrawer: boolean
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>
  columnActive: string
  setColumnActive: Dispatch<SetStateAction<string>>
  itemSelectedId: string
  setItemSelectedId: Dispatch<SetStateAction<string>>
}

export const DrawerContext = createContext<IDrawerContext>({} as IDrawerContext)

export const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
  const [columnActive, setColumnActive] = useState<string>('')
  const [itemSelectedId, setItemSelectedId] = useState<string>('')

  const sharedData: IDrawerContext = useMemo(
    () => ({
      isOpenDrawer,
      setIsOpenDrawer,
      columnActive,
      setColumnActive,
      itemSelectedId,
      setItemSelectedId,
    }),
    [isOpenDrawer, columnActive, itemSelectedId],
  )

  return (
    <DrawerContext.Provider value={sharedData}>
      {children}
    </DrawerContext.Provider>
  )
}
