import ClickCountComponent from "./components/ClickCountComponent";
import Employee from "./components/EmployeeFunctionComponent";
import EventComponent from "./components/EventComponent";
import UseEffectDemoComponent from "./components/UseEffectDemoComponent";
import UseStateDemoComponent from "./components/UseStateDemoComponent";
import EmployeeList from "./pages/EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeView from "./pages/EmployeeView";
import NotFound from "./components/NotFoundComponent";
import EmployeeEdit from "./pages/EmployeeEdit";
import EmployeeCreate from "./pages/EmployeeCreate";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import SecureRoute from "./SecureRoute";
import { AuthProviderDemo } from "./contexts/AuthContextDemo";
import DemoComponent1 from "./components/DemoComponent1";
import DemoComponent2 from "./components/DemoComponent2";
import UseRefDemoComponent from "./components/UseRefDemoComponent";
import UseMemoDemoComponent from "./components/UseMemoDemoComponent";
import UseCallbackDemoComponent from "./components/useCallBackDemoComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { Container } from "react-bootstrap";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      {/* <Employee
        id="007"
        firstName="James"
        lastName="Bond"
        age="20"
        departmentId="1"
        departmentName="CIA"
      /> */}

      {/* <EventComponent /> */}

      {/* <ClickCountComponent /> */}

      {/* <UseStateDemoComponent /> */}

      {/* <UseEffectDemoComponent /> */}

      {/* <EmployeeList /> */}

      {/* <AuthProviderDemo>
        <BrowserRouter>
          <Routes>
            <Route path="/Demo1" element={<DemoComponent1 />}></Route>
            <Route path="/Demo2" element={<DemoComponent2 />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProviderDemo> */}

      {/* <UseRefDemoComponent /> */}

      {/* <UseMemoDemoComponent /> */}
      {/* <UseCallbackDemoComponent /> */}
      <BrowserRouter>
        <NavbarComponent />
        <Container>
          <Routes>
            <Route element={<SecureRoute />}>
              <Route path="/" element={<EmployeeList />} exact></Route>
              <Route path="/employees/:id" element={<EmployeeView />}></Route>
              <Route
                path="/employees/create"
                element={<EmployeeCreate />}
              ></Route>
              <Route
                path="/employees/edit/:id"
                element={<EmployeeEdit />}
              ></Route>
              <Route path="/logout" element={<Logout />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
