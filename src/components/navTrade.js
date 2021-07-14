import {Component} from "react";
import {NavDropdown} from "react-bootstrap";

export default class NavigationTrade extends Component<{ trade: string, data: {page: string} }> {
    render() {
        return <NavDropdown title={"Trade " + this.props.trade} id={"NavBarDropdownTrade" + this.props.trade}>
            {this.generateChallenges()}
        </NavDropdown>;
    }

    generateChallenges() {
        let tradeChallenges = [];
        let trade = this.props.data;
        for (let name in trade) {
            let file = trade[name].page
            tradeChallenges.push(<NavDropdown.Item href={file}>{name}</NavDropdown.Item>);
        }
        return tradeChallenges;
    }
}