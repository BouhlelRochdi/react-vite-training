import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Flex
} from '@chakra-ui/react'
import { MutableRefObject } from 'react'
import { Link } from 'react-router-dom'


type SidebarProps = {
    btnRef: MutableRefObject<null>,
    isOpen: boolean,
    onClose: any
}


function Sidebar({ btnRef, isOpen, onClose }: SidebarProps) {

    return (
        <Flex justifyContent={'center'}>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                        <Flex justifyContent={'flex-start'} flexDirection={'column'}>
                            <Link color='teal.500' to='/user'>
                                User Interface
                            </Link>
                            <Link color='teal.500' to='/products'>
                                Products Interface
                            </Link>
                        </Flex>
                    </DrawerBody>


                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </ Flex>
    )
}

export default Sidebar