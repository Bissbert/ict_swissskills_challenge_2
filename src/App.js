import './App.css';
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Content from "./components/content";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
