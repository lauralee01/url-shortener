import StatisticsList from './StatisticsList';
import statisticsStyles from '../styles/AdvanceStatistics.module.scss';

const AdvanceStatistics = () => {
    const statisticsList = {
        data: [
            {
                name: 'Brand Recognition',
                description: 'Boost your brand recogntion with each click. Generic links don\'t mean a thing. Branded links helps instil confidence in your content',
                image: '/images/icon-brand-recognition.svg'
            },
            {
                name: 'Detailed Records',
                description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
                image: '/images/icon-detailed-records.svg'
            },
            {
                name: 'Fully Customizable',
                description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement',
                image: '/images/icon-fully-customizable.svg'
            },
        ]
    }
    const { data } = statisticsList;
    return (
        <div className={statisticsStyles.container}>
            <div className={statisticsStyles.header}>
                <h1>Advanced Statistics</h1>
                <p className="mx-auto">Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div>
                <StatisticsList 
                    statistics={data}
                />
            </div>
        </div>
        
    )
}

export default AdvanceStatistics;