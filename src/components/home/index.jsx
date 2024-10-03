import React from 'react'
import { useAuth } from '../../contexts/authContext'
import Metrics from '../../sections/Metrics'
import Product from '../../sections/Product'
import Search from '../../sections/Search'
import SideMenu from '../../sections/SideMenu'
// import { Header } from 'semantic-ui-react'



const Home = () => {
    const { currentUser } = useAuth()
    return (
        <>
            <Metrics />
            <Product/>
            <Search/>
            <SideMenu/>
        </>
    )
}

export default Home