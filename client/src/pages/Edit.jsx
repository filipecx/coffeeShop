import { EditItemForm } from "../components/EditItemForm";
import { useLocation } from 'react-router-dom'

export function Edit(){
    const data = useLocation()
    console.log({...data})
    return(
        <EditItemForm {...data}/>
    )
}