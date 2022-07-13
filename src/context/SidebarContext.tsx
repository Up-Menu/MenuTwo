import { useState, createContext } from 'react'
type SidebarContext = {
  sidebarToggle: any
  toggleSidebar: () => void
  closeSidebar: () => void
}
type BoxProps = {
  children: React.ReactNode // 👈️ type children
}


export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
)

export const SidebarProvider = ( { children }: BoxProps ) => {
  const [ sidebarToggle, setSidebarToggle ] = useState( false )
  const toggleSidebar = () => {
    setSidebarToggle( !sidebarToggle )
  }
  const closeSidebar = () => {
    setSidebarToggle( false )
  }

  return (
    <SidebarContext.Provider
      value={ { sidebarToggle, toggleSidebar, closeSidebar } }
    >
      { children }
    </SidebarContext.Provider>
  )
}
