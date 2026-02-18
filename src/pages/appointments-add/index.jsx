
import { Navbar } from "../components/navbar/index.jsx"
import { Link, useParams } from "react-router"
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { api } from "../../service/api.js"
import { useContext, useEffect, useState } from "react"
import { ptBR } from "date-fns/locale"
import { NewAppointments } from "../../context/Newappointments.jsx"
import { Modal } from "../components/Modal/index.jsx"
registerLocale('pt-BR', ptBR)
export default function AppointmentAdd() {
    const { id_appointement } = useParams()
    const { CreateAppointment,
        id_mecanico, setidmecanico,
        id_service, setidservice,
        mecanicosapi, setmecanicosapi,
        serviceapi, setserviceapi,
        selectdata, setselectdata,
        setbookhours,
        notification,
        activenotification, setactivenotification
    } = useContext(NewAppointments)

    const [buttondisable, setbuttondisable] = useState(true)
    function LoadNewAppointments() {
        CreateAppointment()
    }
    const apenasdiasuteis = (date) => {
        if (!date) return true
        const dia = date.getDay();
        return dia != 0 && dia != 6 //dias diferentes de sabado e domingo
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setactivenotification(false)
        },5000)
        return()=>clearTimeout(timer)
    },[activenotification])
    useEffect(() => {
        if (id_mecanico && id_service) {
            setbuttondisable(false)
        }
    }, [id_mecanico, id_service])

    useEffect(() => {
        const dadosapi = async () => {
            const res = await api.get('/mecanicos')
            setmecanicosapi(res.data)
        }
        dadosapi()
    })
    useEffect(() => {
        if (id_mecanico.length == '') return
        const buscarservicos = async () => {
            try {
                const response = await api.get(`mecanicos/${id_mecanico}/services`)
                setidservice(response.data[0].id_service)
                return setserviceapi(response.data)

            } catch (error) {
                setserviceapi('')
                if (error.response) {
                    console.log(`Status ${error.response.status} - ${error.response.data.message}`)
                } else {
                    console.log(`Error desconhecido:${error}`)
                }
            }
        }
        buscarservicos()
    }, [id_mecanico])

    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid mt-page">
                <div className="row col-lg-4 offset-lg-4">
                    <div className="col-12">
                        <h2>{id_appointement > 0 ? 'Editar Agendamento' : 'Novo Agendamento'}</h2>
                    </div>

                    <div className="col-12 mt-2">
                        {
                            activenotification ?
                                <Modal
                                    titulo='Deu Certo!!!'
                                    description={notification}
                                    onclick={(e) => setactivenotification(!activenotification)}></Modal>
                                : ''
                        }

                        <label htmlFor="mecanico" className="form-label">Mecanico</label>
                        <div className="form-control mb-2">
                            <select name="Mecanico" id='mecanico' onChange={(e) => { setidmecanico(e.target.value) }}>
                                <option value='0' >Todos os mecanicos</option>
                                {mecanicosapi.map(item => {
                                    return <option key={item.id_mecanico} value={item.id_mecanico}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <label htmlFor="servicos" className="form-label">Servicos</label>
                        <div className="form-control mb-2">
                            {serviceapi.length == 0 ?
                                <option disabled={true}>Não possui servicos disponivéis</option>
                                :
                                <select name="Mecanico" id='mecanico' onChange={(e) => setidservice(e.target.value)}>
                                    {serviceapi.map(item => {
                                        return (
                                            <option key={item.id_service} value={item.id_service}>{item.description}</option>
                                        )
                                    })}
                                </select>
                            }
                        </div>
                    </div>
                    <div className="col-md-6 mt-1">
                        <label htmlFor="bookingDate" className="form-label">Data</label>
                        <DatePicker
                            className="form-control w-100"
                            selected={selectdata}
                            disabled={serviceapi.length == 0 ? true : false}
                            locale='pt-BR'
                            onChange={(date) => setselectdata(date)}
                            filterDate={(apenasdiasuteis)}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="14/02/2026"
                            showTimeSelect={false}
                        ></DatePicker>
                    </div>
                    <div className="col-6 mt-3">
                        <label htmlFor="bookingHour" className="form-label">Hora</label>
                        <select disabled={selectdata == '' ? true : false} required={true} onChange={(e) => setbookhours(e.target.value)}>
                            <option value='0'>Horarios</option>
                            <option value='09:00'>09:00</option>
                            <option value='10:00'>10:00</option>
                            <option value='11:00'>11:00</option>
                            <option value='12:00'>12:00</option>
                        </select>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="d-flex justify-content-end">
                            <Link to='/appointments' className='btn btn-outline-primary me-3'>
                                Cancelar
                            </Link>
                            <button
                                className="btn btn-primary"
                                onClick={LoadNewAppointments}
                                disabled={selectdata == null ? true : false}
                            >Salvar Dados</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}