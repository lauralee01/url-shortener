import {Component} from 'react'
import urlStyles from '../styles/Url.module.scss';
import buttonStyles from '../styles/Buttons.module.scss'; 

interface Props {
    urls: Array<{ originalUrl: string, shortenedUrl: string }>;
}

class Url extends Component<Props, any> {
    state = {
        copyLink: false,
        selectedLink: null
    }

    copyText = (shortenedLink, linkId) => {
        this.setState({
            copyLink: true,
            selectedLink: linkId
        })
        navigator.clipboard.writeText(shortenedLink)
        
    }
    render () {
        const { urls } = this.props;
        return (
            <div className={urlStyles.container}>
              {urls && urls.map((url, i) => (
                <div key={i} className={"col-md-12 mb-3 " + urlStyles.wrapper}>
                    <p className="m-0">{url.originalUrl}</p>
                    <div className={'row align-items-center justify-content-between ' + urlStyles.block}>
                        <p className={"my-0 col-md-6 " + urlStyles.shortLink}>{url.shortenedUrl}</p>
                        <button 
                            type="submit" 
                            className={'col-md-6 ' + this.state.copyLink && this.state.selectedLink === i ? buttonStyles.dark :buttonStyles.small }
                            onClick={() => this.copyText(url.shortenedUrl, i)}
                        >
                            {this.state.copyLink && this.state.selectedLink === i ? 'Copied!' :'Copy'}
                        </button>
                    </div>
                 
                </div>
              ))}
            </div>
          );
    }
  
};

export default Url;
