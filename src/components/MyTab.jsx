import { Tabs, Tab } from "react-bootstrap";
import Form from "./Form";
import Login from "./Login";

const MyTab = () => {
    return (
        <>
        <div className="container WhiteBackground">
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Ingresa">
                    <Login />
                </Tab>
                <Tab eventKey="signup" title="Regístrate">
                    <Form />
                </Tab>
            </Tabs>
            </div>
        </>
    )
}

export default MyTab;