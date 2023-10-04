import { useQuery } from 'react-query'
import axios from 'axios'

const getCategorizedMenu = async () => {
    const response = await axios.get("http://localhost:5152/api/v1/menuitem/categorized");
    return response.data;
}


function Menu() {

    const { data, error, isLoading } = useQuery("getCategorizedMenu", getCategorizedMenu);

    if (isLoading) return <div>... Loading</div>
    if (error) return <div>Error</div>

    console.log("Data", data);

    return (<>
        <div>Category: {data.map(d => d.name)}</div>
        <div>Menu: {data.map(d => d.menuItems.map(m => m.name))}</div>
        </>
    )
}

export default Menu