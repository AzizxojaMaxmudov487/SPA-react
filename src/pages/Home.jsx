import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllCategories } from '../api'
import Loading from '../components/Loading'
import CategoryList from '../components/CategoryList'
import Search from '../components/Search'

function Home() {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const {pathname, search} = useLocation()
    const {push} = useNavigate()

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search ? 
                data.categories.filter(item => 
                    item.strCategory
                    .toLowerCase()
                    .includes(search.split("=")[1].toLowerCase())    
                ) : data.categories
            )
        })
    }, [search])
    return (
        <>
            <Search cb={handleSearch}/>
            {
                !catalog.length ? (
                    <Loading/>
                ) : (
                    <CategoryList catalog={filteredCatalog} />
                )
            }

            {/* {
                !catalog.length ? (
                    <Loading/>
                ) : (
                    <Category catalog={filteredCatalog} />
                )
            } */}

        </>
    )
}

export default Home