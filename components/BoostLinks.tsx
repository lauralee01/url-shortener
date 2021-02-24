import boostStyles from '../styles/BoostLinks.module.scss';
import buttonStyles from '../styles/Buttons.module.scss';
import Link from 'next/link';

const BoostLinks = () => {
    return (
        <div className={boostStyles.container}>
            <h1 className="mb-5">Boost your links today!</h1>
            <Link href="/">
                <a className={buttonStyles.medium}>Get Started</a>
            </Link>
        </div>
    )
}

export default BoostLinks;