function Navbar() {
    return (
        <nav>
            <img src="airbnb-logo.png"className="nav--logo"></img>
        </nav>
    )
}

function Hero() {
    return (
        <section className="hero">
            <img src="photo-grid.png" className="hero--photo"></img>

                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

function Card() {
    return (
            <div className="card">
                <img src="katie-zaferes.png"className="card--image"></img>
                <div className="card--stats">
                    <img src="star.png" className="card--star"></img>
                    <span>5.0</span>
                    <span className="gray">(6)•</span>
                    <span className="gray">USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p> <span className="bold">From $136</span> / person</p>
            </div>

    )

}

function App() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Card/>
        </div>
    )
}
ReactDOM.render(<App/>, document.querySelector("#root"))