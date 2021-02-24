import Link from 'next/link';
import Image from 'next/image';
import footerStyles from '../styles/Footer.module.scss';

interface Props {
    brand: { name: string; to: string };
    features: { name: string; to: string };
    resources: { name: string; to: string };
    company: { name: string; to: string };
    analytics:  Array<{ name: string; to: string }>;
    support:  Array<{ name: string; to: string }>;
    info:  Array<{ name: string; to: string }>;
    icons:  Array<{ name: string; to: string }>;
}

const Footer: React.FC<Props> = ({ brand, features, resources, company, analytics, support, info, icons }) => {
    return (
        <div className={footerStyles.container}>
            <ul className={'list-unstyled ' + footerStyles.layer}>
                <li className={footerStyles.brand}>
                    <Link href={brand.to}>
                        <a>{brand.name}</a>
                    </Link>
                </li>
            </ul>
            <div className={footerStyles.cover}>
            <ul className={'list-unstyled ' + footerStyles.layer}>
                <li className={'mb-3 ' + footerStyles.links}>
                    <Link href={features.to}>
                        <a>{features.name}</a>
                    </Link>
                </li>
                {analytics.map((link: { name: string, to: string }) => (
                    <li key={link.name} className={footerStyles.links}>
                        <Link href={link.to}>
                           <a>{link.name}</a>
                        </Link>
                    </li>
                    
                ))}
            </ul>
            <ul className={'list-unstyled ' + footerStyles.layer}>
                <li className={'mb-3 ' + footerStyles.links}>
                    <Link href={resources.to}>
                        <a>{resources.name}</a>
                    </Link>
                </li>
                {support.map((link: { name: string, to: string }) => (
                    <li key={link.name} className={footerStyles.links}>
                        <Link href={link.to}>
                           <a>{link.name}</a>
                        </Link>
                    </li>
                    
                ))}
            </ul>
            <ul className={'list-unstyled ' + footerStyles.layer}>
                <li className={'mb-3 '+ footerStyles.links}>
                    <Link href={company.to}>
                        <a>{company.name}</a>
                    </Link>
                </li>
                {info.map((link: { name: string, to: string }) => (
                    <li key={link.name} className={footerStyles.links}>
                        <Link href={link.to}>
                           <a>{link.name}</a>
                        </Link>
                    </li>
                    
                ))}
            </ul>
            <ul className={'list-unstyled ' + footerStyles.book}>
                {icons.map((link: { name: string, to: string }) => (
                    <li key={link.name} className={'mr-5 ' + footerStyles.links}>
                        <div className={footerStyles.images}>
                            <Image
                                src={link.name}
                                alt="Picture of the author"
                                width={20}
                                height={20}
                            />
                        </div>
                    </li>
                    
                ))}
            </ul>
            </div>
        </div>
    )
}

export default Footer;