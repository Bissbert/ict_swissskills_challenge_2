import {Component} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import ContentData from "../contentData";
import {Container} from "react-bootstrap";
import Home from "./home";

export default class Content extends Component {
    render() {
        return <div id={"content"}>
            <Switch>
                <Route exact path="/">
                    <Redirect to={"/home"}/>
                </Route>
                <Route path={"/home"}>
                    <Home/>
                </Route>
                <Route>
                    <Container>
                        <ContentData/>
                    </Container>
                </Route>
            </Switch>
        </div>;
    }
}