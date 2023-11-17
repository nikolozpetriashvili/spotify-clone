//SidebarProps is an interface that defines the expected properties (props) that the Sidebar component should receive.

// 1:const Sidebar is declaring a constant named Sidebar. This is the name of the function component. 2: React.FC<SidebarProps> is the type annotation for the function component. It indicates that Sidebar is a functional component (React.FC stands for React Functional Component), and it receives props of type SidebarProps.

//by default, the components are rendered on the server where these APIs are not available. By defining the "use client" directive to toggle.js, you can tell React to render the component and its children on the client, where the APIs are available.

'use client'

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from './Box'
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  children: React.ReactNode;
  songs:Song[]
}

const Sidebar: React.FC<SidebarProps> = ({
  children,songs
}) => {
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(() => [{
    icon: HiHome,
    label: 'Home',
    active: pathname !== '/search',
    href: '/',
  },
  {
    icon: BiSearch,
    label:'Search',
    active: pathname === '/search',
    href:'/search',  
  }],[pathname])

  return (
    <div className={twMerge(`flex h-full`,player.activeId && "h-[calc(100%-80px)]")}>
      <div className="
      hidden 
      md:flex 
      flex-col 
      gap-y-2 
      bg-black 
      h-full 
      w-[300px] 
      p-2">

        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item}/>
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs}/>
        </Box>

      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;