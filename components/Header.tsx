import Link from 'next/link';
import Image from 'next/image';
import headerStyles from '../styles/Header.module.scss';
import buttonStyles from '../styles/Buttons.module.scss';


const Header = () => {
    return (
        <div className={headerStyles.container}>
                    <div className={headerStyles.mobile }>
                        <div className='d-flex justify-content-end'>
                            <Image
                                src="/images/illustration-working.svg"
                                alt="Picture of the author"
                                width={530}
                                height={400}
                            />
                        </div>
                    </div>
                
            <div className="row pr-0 align-items-center">
                <div className="col-md-6">
                    <div className={headerStyles.info}>
                        <h1>More than just shorter links</h1>
                        <p className="w-75 pb-4 mb-3">Build your brand's recognition and get detailed insights on how your links are performing</p>
                        <Link href="/">
                            <a className={buttonStyles.medium}>Get Started</a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-6'>
                <div className={headerStyles.web }>
                    <div className='d-flex justify-content-end'>
                        <Image
                            src="/images/illustration-working.svg"
                            alt="Picture of the author"
                            width={530}
                            height={400}
                        />
                    </div>
                </div>
                </div>
            </div>
  
        </div>
       
    )
}

export default Header;

