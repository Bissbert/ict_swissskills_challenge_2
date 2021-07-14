import {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import NavigationTrade from "./navTrade";
import data from "../json/pages.json"


export default class Navigation extends Component {
    render() {
        return <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {this.generateTrades()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>;
    }

    generateTrades() {
        let trades = [];
        let tradeNumbers = data.trades;
        for (let number in tradeNumbers) {
            trades.push(<NavigationTrade trade={number} data={tradeNumbers[number]}/>)
        }
        return trades;
    }
}