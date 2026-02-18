import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login/index.jsx";
import Cadastro from "./pages/cadastro/index.jsx";
import Appointments from "./pages/appointments/index.jsx";
import AppointmentAdd from "./pages/appointments-add/index.jsx";

import { NewAppProvider } from "./context/Newappointments.jsx";
import { RoutesProtect } from "./RoutesProtect.jsx";
import { UserProvider } from "./context/UserLogin.jsx";
import { ProviderDeleteAppointments } from "./context/Deleteappointments.jsx";

export const Rotas = () => {
    return (
        <UserProvider>
            <ProviderDeleteAppointments>
                <NewAppProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login></Login>}></Route>
                            <Route path="/singup" element={<Cadastro></Cadastro>}></Route>
                            <Route path='/appointments' element={
                                <RoutesProtect>
                                    <Appointments></Appointments>
                                </RoutesProtect>
                            }></Route>
                            <Route path="/appointments/add" element={

                                <RoutesProtect>
                                    <AppointmentAdd></AppointmentAdd>
                                </RoutesProtect>

                            }></Route>
                            <Route path="/appointments/edit/:id_appointement" element={
                                <NewAppProvider>
                                    <RoutesProtect>
                                        <AppointmentAdd></AppointmentAdd>
                                    </RoutesProtect>
                                </NewAppProvider>
                            }></Route>
                        </Routes>
                    </BrowserRouter>
                </NewAppProvider>
            </ProviderDeleteAppointments>
        </UserProvider>
    )
}
