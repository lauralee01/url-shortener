import Header from './Header';
import UrlShortener from './UrlShortener';
import AdvanceStatistics from './AdvanceStatistics';
import BoostLinks from './BoostLinks';
import mainStyles from '../styles/Main.module.scss';

const Main = () => {
    return (
        <div className={mainStyles.container}>
            <Header />
            <div className={mainStyles.wrapper}>
                <UrlShortener />
                <AdvanceStatistics />
                <BoostLinks />
            </div>
        </div>
        )
    }
    
export default Main;