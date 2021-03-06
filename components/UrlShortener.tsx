import {Component} from 'react'
import axios from 'axios';
import Url from './Url';
import urlStyles from '../styles/UrlShortener.module.scss';
import buttonStyles from '../styles/Buttons.module.scss';

class UrlShortener extends Component {

    state = {
        urls: [],
        noLink: false,
        dualNames: false,
        submittingLink: false,
        invalidLink: false
    }

    registerUser = async (event) => {
        event.preventDefault()

        if(event.target.name.value === ''){
            this.setState({
                noLink: true
            })
        }
        else if(!this.validURL(event.target.name.value)){
            this.setState({
                invalidLink: true
            }) 
        }
        else {
            this.setState({
                noLink: false,
                invalidLink: false
            })
            const newUrl = this.state.urls.some(url => url.originalUrl === event.target.name.value)
       
            if(!newUrl) {
                this.setState({
                    submittingLink: true
                })
                const result = await axios.post(`https://api.shrtco.de/v2/shorten?url=${event.target.name.value}`);
        
                const data = result.data.result;
                this.setState({
                    urls: [...this.state.urls, {
                        originalUrl: data.original_link,
                        shortenedUrl: data.short_link
                    }]
                })
                this.setState({
                    submittingLink: false
                })
                event.target.name.value = '';
            }
            else this.setState({
                dualNames: true
            })
            
        }
    }
    validURL(str) {
        console.log("invalid", str)
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }

    componentDidUpdate() {
        localStorage.setItem('urls', JSON.stringify(this.state.urls))  
      }
    
    componentDidMount() {
        const data = localStorage.getItem('urls')
        if(data) {
            this.setState({
            urls: JSON.parse(data)
            })
        }
    }
    componentWillUnmount() {
        localStorage.clear()
    }

  render() {
    return (
        <div className={urlStyles.container}>
            <div className={urlStyles.wrapper}>
        <form onSubmit={this.registerUser} className={urlStyles.form}>
            <div className="row">
                <div className={"col-md-8 " + urlStyles.colUrl}>
                  <input 
                      id="name" 
                      name="name" 
                      type="text"
                      placeholder="Shorten a link here..."
                      className={"w-100 py-3 border-0 rounded " + 
                      (this.state.noLink && urlStyles.input || this.state.dualNames && urlStyles.input  || this.state.invalidLink && urlStyles.input )
                  }     
                  />
                  {this.state.noLink && <div 
                    className="invalid-feedback d-block">
                        Please add a link.
                    </div>}

                    {this.state.dualNames && <div 
                    className="invalid-feedback d-block">
                       Url already exists
                    </div>}

                    {this.state.invalidLink && <div 
                    className="invalid-feedback d-block">
                       Url is invalid
                    </div>}
                  
                </div>
                <div className="col-md-4">
                  <button 
                      type="submit" 
                      className={"w-100 " + buttonStyles.large }
                  >
                     {this.state.submittingLink ? 
                        <div className="spinner-border" role="status"></div>
                      : 'Shorten It!'} 
                  </button>
                </div>
            </div>
            
        </form>
        <Url urls={this.state.urls}/>
       
        </div>
                
        </div>
      )
  }
    
}

export default UrlShortener;

  