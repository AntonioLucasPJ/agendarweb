
import { Navbar } from "../components/navbar/index.jsx"
import { mecanicos, mecanicos_services } from "../../constants/data.js"
import { Link, useParams } from "react-router"
export default function AppointmentAdd() {
    const {id_appointement} = useParams()
    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid mt-page">
                <div className="row col-lg-4 offset-lg-4">
                    <div className="col-12">
                        <h2>{id_appointement>0?'Editar Agendamento':'Novo Agendamento'}</h2>
                    </div>
                    <div className="col-12 mt-2">
                        <label htmlFor="mecanico" className="form-label">Mecanico</label>
                        <div className="form-control mb-2">
                            {id_appointement>0?
                            <option>
                                Mecanico editar
                            </option>
                            :
                            <select name="Mecanico" id='mecanico'>
                                <option value='0' >Todos os mecanicos</option>
                                {mecanicos.map(item => {
                                    return <option key={item.id_mecanico} value={item.id_mecanico}>{item.name}</option>
                                })}
                            </select>}
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <label htmlFor="servicos" className="form-label">Servicos</label>
                        <div className="form-control mb-2">
                            <select name="Mecanico" id='mecanico'>
                                <option value='0' >Servicos</option>
                                {mecanicos_services.map(item => {
                                    return <option key={item.id_service} value={item.id_service}>{item.description}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-6 mt-3">
                        <label htmlFor="bookingDate" className="form-label">Date</label>
                        <input className="form-control" type='date'></input>
                    </div>
                    <div className="col-6 mt-3">
                        <label htmlFor="bookingHour" className="form-label">Hora</label>
                        <input className="form-control" type='date'></input>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="d-flex justify-content-end">
                            <Link to='/appointments' className='btn btn-outline-primary me-3'>
                                Cancelar
                            </Link>
                            <button className="btn btn-primary">Salvar Dados</button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}