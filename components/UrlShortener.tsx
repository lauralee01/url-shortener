import {Component} from 'react'
import axios from 'axios';
import Url from './Url';
import urlStyles from '../styles/UrlShortener.module.scss';
import buttonStyles from '../styles/Buttons.module.scss';

class UrlShortener extends Component {

    state = {
        urls: [],
        noLink: false,
        dualNames: false
    }

    registerUser = async (event) => {
        event.preventDefault()

        if(event.target.name.value === '') {
            this.setState({
                noLink: true
            })
        }
        else {
            this.setState({
                noLink: false
            })
            const newUrl = this.state.urls.some(url => url.originalLink === event.target.name.value)
       
            if(!newUrl) {
                const result = await axios.post(`https://api.shrtco.de/v2/shorten?url=${event.target.name.value}`);
        
                const data = result.data.result;
        
                this.saveUserLinks(data);
        
                event.target.name.value = '';
            }
            else this.setState({
                dualNames: true
            })
            
        }
        
      
    }

    saveUserLinks = async (data) => {
        const save = await axios.post('/api/entry', { originalLink: data.original_link, shortenedLink:data.short_link  });
        this.setState({
            urls: [...this.state.urls, JSON.parse(save.config.data)]
        })
    }

    async componentDidMount() {
        const urls = await axios.get('/api/entries');
            this.setState({
                urls: urls.data.entriesData
            });
      
    }

  render() {
    return (
        <div className={urlStyles.container}>
            <div className={urlStyles.wrapper}>
        <form onSubmit={this.registerUser} className={urlStyles.form}>
            <div className="row">
                <div className="col-md-8 ">
                  <input 
                      id="name" 
                      name="name" 
                      type="text"
                      placeholder="Shorten a link here..."
                      className={"w-100 py-3 border-0 rounded " + 
                      (this.state.noLink && urlStyles.input || this.state.dualNames && urlStyles.input  )
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
                  
                </div>
                <div className="col-md-4">
                  <button 
                      type="submit" 
                      className={"w-100 " + buttonStyles.large}
                  >
                      Shorten It!
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

  