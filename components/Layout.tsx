import Navbar from './Navbar';
import Footer from './Footer';
import Meta from './Meta';

export default function Layout({
    children}: {children: React.ReactNode}) {

        const navigation = {
            brand: { name: "Shortly", to: "/" },
            links: [
                { name: "Features", to: "/" },
                { name: "Pricing", to: "/" },
                { name: "Resources", to: "/" },
            ],
            login: { name: "Login", to: "/" },
            signup:  { name: "Sign up", to: "/" }
           
        }

        const metadata = {
            title: 'Shortly',
            keywords: 'Shortly app',
            description: 'A url shortening app'
        }

        const footer = {
            features: {name: "Features", to: "/"},
            resources: {name: "Resources", to: "/"},
            company: {name: "Company", to: "/"},
            analytics: [
                {name: "Link Shortening", to: "/"},
                {name: "Branded Links", to: "/"},
                {name: "Analytics", to: "/"},
            ],
            support: [
                {name: "Blog", to: "/"},
                {name: "Developers", to: "/"},
                {name: "Support", to: "/"},
            ],
            info: [
                {name: "About", to: "/"},
                {name: "Our Team", to: "/"},
                {name: "Careers", to: "/"},
                {name: "Contact", to: "/"},
            ],
            icons: [
                {name: "/images/icon-facebook.svg", to: "/"},
                {name: "/images/icon-twitter.svg", to: "/"},
                {name: "/images/icon-pinterest.svg", to: "/"},
                {name: "/images/icon-instagram.svg", to: "/"},
            ]
        }

        const { brand, links, login, signup } = navigation;
        const { title, keywords, description } = metadata;
        const { features, resources, company, analytics, support, info, icons } = footer;
        return (
            <>
                <Meta 
                    title={title}
                    keywords={keywords}
                    description={description}
                />
                <div className="container-fluid">
                    <Navbar 
                        brand={brand}
                        links={links}
                        login={login}
                        signup={signup}
                    />
                    <main>{children}</main>
                    <Footer 
                        brand={brand}
                        features={features}
                        resources={resources}
                        company={company}
                        analytics={analytics}
                        support={support}
                        info={info}
                        icons={icons}
                    />
                </div>
                
            </>
        )
    }