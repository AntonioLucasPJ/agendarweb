import { Link, useNavigate } from "react-router"
import { Navbar } from "../components/navbar/index.jsx"
import { mecanicos, appointments } from '../../constants/data.js'
import styles from './appointments.module.css'
import {Appointment} from "../components/appointment/index.jsx"
function Appointments() {
    const navigate = useNavigate()
    function Editar(id_appointement,id_mecanico,id_service) {
        navigate("/appointments/edit/"+ id_appointement,{
            id_mecanico,id_service
        })
    }
    function Delete(id_appointement) {
        console.log('Deletar...' + id_appointement)
    }
    return (
        <div className='container-fluid mt-page'>
            <Navbar></Navbar>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h2 className="d-inline">Agendamentos...</h2>
                    <Link
                        className='btn btn-outline-primary ms-5 mb-2'
                        to="/appointments/add"
                    >Novo Agendamento</Link>
                </div>
                <div className='d-flex justify-content-end'>
                    <input id='startDate' className='form-control' type="date"></input>
                    <span className="m-2">Até</span>
                    <input id='startDate' className='form-control' type="date"></input>
                    <div className="form-control ms-3 me-3">
                        <select name="Mecanico" id='mecanico'>
                            <option value="" className={styles.opvalues}>Todos os mecanicos</option>
                            {mecanicos.map(item => {
                                return <option key={item.id_mecanico} value={item.id_mecanico}>{item.name}</option>
                            })}
                        </select>
                    </div>

                    <button className='btn btn-primary'>Filtrar</button>
                </div>
            </div>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Mecanico</th>
                            <th scope="col">Serviço</th>
                            <th scope="col">Data/Hora</th>
                            <th scope="col" className="text-end">Valor</th>
                            <th scope="col" className={styles.colbuttons}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(item => {
                            return (
                                <Appointment
                                    key={item.id_appointement}
                                    id_appointement={item.id_appointement}
                                    service={item.service}
                                    mecanico={item.mecanico}
                                    booking_date={item.booking_date}
                                    booking_hour={item.booking_hour}
                                    clickedit={Editar}
                                    clickdelete={Delete}
                                ></Appointment>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Appointments