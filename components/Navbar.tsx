import Link from 'next/link';
import navStyles from '../styles/Navbar.module.scss';


interface Props {
    brand: { name: string; to: string };
    links:  Array<{ name: string; to: string }>;
    login: { name: string; to: string };
    signup: { name: string; to: string };
    
}
const Navbar: React.FC<Props> = ({ brand, links, login, signup }) => {
    return (
        <nav className={navStyles.container}>
        <ul className={'list-unstyled d-flex align-items-center ' + navStyles.cover}>
            <li className={navStyles.brand}>
                <Link href={brand.to}>
                    <a>{brand.name}</a>
                </Link>
            </li>
            <div className={navStyles.media}>
            <span className="material-icons">dehaze</span>
                </div >
            
            {links.map((link: { name: string, to: string }) => (
                <li key={link.name} className={navStyles.links}>
                    <Link href={link.to}>
                       <a>{link.name}</a>
                    </Link>
                </li>
                
            ))}
        </ul>
        <ul className="list-unstyled d-flex align-items-center ">
            <li className={navStyles.links}>
                <Link href={login.to}>
                    <a>{login.name}</a>
                </Link>
            </li>
            <li className={navStyles.signup}>
                <Link href={signup.to}>
                    <a>{signup.name}</a>
                </Link>
            </li>
        </ul>
        
    </nav>
    )
}

export default Navbar;
