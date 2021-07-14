import {Component} from "react";
import Markdown from "markdown-to-jsx";
import {withRouter} from 'react-router-dom';

/**
 * Component that creates the markdown from its file
 */
class ContentData extends Component{

    constructor(props) {
        super(props)
        this.state = {markdown: ""}
    }


    render() {
        const {markdown} = this.state;
        return <div className={"article"}>
            <Markdown children={markdown}/>
        </div>;
    }

    //loads the page from the pages folder
    componentWillMount() {
        this.loadMarkdown()
    }

    async loadMarkdown() {
        const {location} = this.props
        try {
            console.log(`location: ${location.pathname}`)
            let res = await import(`./pages${location.pathname}.md`)
            let fetched = await fetch(res.default)
            fetched.text()
                .then(res => this.setState({markdown: res}))
                .catch(err => console.log(err));
        } catch (e) {
            this.setState({markdown: `#There is no file for the challenge with the name ***${location.pathname}***\n\n---\n\nPlease select the challenges from the Navigation`})
        }
    }
}

export default withRouter(ContentData);