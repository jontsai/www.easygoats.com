export function Home() {
    return (
        <div id="home">
            {' '}
            <div className="slider">
                <div className="slide current">
                    <div className="content">
                        <h1>Goats Hired for Wildfire-Fighting</h1>
                        <p>
                            Around 220 goats are helping San Diego Gas &
                            Electric take a bite out of potential wildfire
                            ignition sources and carbon emissions.
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className="content">
                        <h1>
                            Goats from Peru used for wildfire prevention in
                            California
                        </h1>
                        <p>
                            Over 1,000 goats needed to clear dry brush from
                            California to help prevent wildfires
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className="content">
                        <h1>Using Goats to Prevent Wildfires</h1>
                        <p>
                            Throughout California, goats were dining out. Above
                            the championship golf course at Pebble Beach, a herd
                            was systematically carving a 35-acre firebreak.
                        </p>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button id="prev">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button id="next">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}
