import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { format } from "date-fns";
import { api } from "../service/api";
export const NewAppointments = createContext();
export const NewAppProvider = ({ children }) => {
    const [id_mecanico, setidmecanico] = useState('')
    const [id_service, setidservice] = useState('')
    const [mecanicosapi, setmecanicosapi] = useState([])
    const [serviceapi, setserviceapi] = useState('')
    const [selectdata, setselectdata] = useState(new Date())
    const [booking_hour, setbookhours] = useState('')
    const [notification, setnotification] = useState('')
    const [activenotification,setactivenotification] = useState(false)
    async function CreateAppointment() {
        const token = localStorage.getItem('token')
        if (token) {
            const decode = jwtDecode(token)
            const id_user = decode.sub || decode.id// o id do usuario pode estar em uma dessas duas opções
            const booking_date = selectdata.toISOString().split('T')[0]
            console.log(`
            Usuario:${id_user}
            Mecanico:${id_mecanico}
            Servico:${id_service}
            data:${booking_date}
            hora:${booking_hour}
            `)
            try {
                const res = await api.post('/appointements',{
                    id_mecanico,
                    id_service,
                    id_user,
                    booking_date,
                    booking_hour
                })
                setnotification(res.data.message)
                setactivenotification(true)
            }catch(error){
                console.log(error)
            }
        }


    }
    return (
        <NewAppointments value={{ id_mecanico, setidmecanico, id_service, setidservice, mecanicosapi, setmecanicosapi, serviceapi, setserviceapi,selectdata,setselectdata, booking_hour, setbookhours,notification,activenotification,setactivenotification ,CreateAppointment }}>{children}</NewAppointments>
    )
} 