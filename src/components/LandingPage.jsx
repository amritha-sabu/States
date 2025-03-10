import Countries from "./Countries";
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="component">
            <h1>Select Location</h1>
            <div className="selection">
                <Countries />
            </div>
        </div>
    );
};

export default LandingPage;