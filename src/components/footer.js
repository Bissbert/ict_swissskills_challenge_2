import {Component} from "react";
import {Navbar} from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return <Navbar fixed="bottom" bg="dark" variant="dark" className={"justify-content-center"}>
                    <Navbar.Text>©Bissbert</Navbar.Text>
        </Navbar>;
    }
}