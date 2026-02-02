import { BrowserRouter, Routes,Route } from "react-router";
import Login from "./pages/login/index.jsx";
import Cadastro from "./pages/cadastro/index.jsx";
import Appointments from "./pages/appointments/index.jsx";
import AppointmentAdd  from "./pages/appointments-add/index.jsx";
export const Rotas = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/singup" element={<Cadastro></Cadastro>}></Route>
                <Route path='/appointments' element={<Appointments></Appointments>}></Route>
                <Route path="/appointments/add" element={<AppointmentAdd></AppointmentAdd>}></Route>
                <Route path="/appointments/edit/:id_appointement" element={<AppointmentAdd></AppointmentAdd>}></Route>       
                </Routes>
        </BrowserRouter>
    )
}
