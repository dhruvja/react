import React from "react"
import ReactDOM from "react-dom"
import Header from "./header"
import Footer from "./footer"
import MainContent from "./maincontent"

function MyApp(){
    return (
        <div class="home">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
};

ReactDOM.render(<MyApp />,document.getElementById('root'));

export default MyApp;