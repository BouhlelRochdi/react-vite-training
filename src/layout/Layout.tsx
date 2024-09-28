import React, { ReactNode } from 'react'
import Sidebar from '../components/navigation/Sidebar'
import { useDisclosure } from '@chakra-ui/react'
import Navbar from '../components/navigation/Navbar'

const Layout = ({children}:{children: ReactNode}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef = React.useRef(null)

  return (
    <div>
      <Navbar onOpen={onOpen}/>
      <Sidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      {children}
      
    </div>
  )
}

export default Layout
