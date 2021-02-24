import Image from 'next/image'
import listStyles from '../styles/StatisticsList.module.scss';

const statiscticsList = (props: {
    statistics:  Array<{ name: string; description: string; image: string }>;
  }) => {
    const {statistics} = props;
    return (
        <div className="my-5">
            <div className="row">
            {statistics.map((data: { name: string, description: string, image: string }) => (
                <div className="col-md-4" key={data.name}>
                    <div id={`${listStyles[data.name.replace(/ +/g, "")]}`} className={`
                    card border-0 px-4 pt-5 pb-3 position-relative ${listStyles.card} 
                    
                    `}>
                    <h5 className="mt-4">{data.name}</h5>
                    <p>{data.description}</p>
                    <div className={listStyles.image}>
                        <Image 
                            src={data.image}
                            alt="Picture of the author"
                            width={40}
                            height={40}
                        />
                    </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default statiscticsList;