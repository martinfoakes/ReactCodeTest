import React, { Component } from 'react';
import axios from 'axios';
import ArtistChild from './track-child';

class ArtistListEntry extends Component {
  constructor(props) {
   super(props);

   this.state = {
     error: null,
     isVisible: '',
     artist: []
   };
 }

 toggleHidden (id) {
    if(this.state.isVisible === id){
      this.setState({
        isVisible: null
      })
    }else{
      this.setState({
        isVisible: id
      })
    }
  }

 componentDidMount() {
   this.ArtistListEntry();
 }

 ArtistListEntry() {
   axios.get('https://api-v2.hearthis.at/feed/?type=popular&page=1&count=20')
     .then(
       ({ data }) => {
         this.setState({
           artist: data
         })
       })
       .catch((error) => {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
 }

 render() {
   let artists = this.state.artist.map((item) => (
     <div className="unselectable">
      <div className='media media-top' key={ item.user.id }
              onClick={this.toggleHidden.bind(this, item.id)}>
        <div className='media-left media-middle'>
          <img src={ item.user.avatar_url } className='media-object artist-image' />
        </div>
        <div className='media-body'>
          <ul className='artist-info-list'>
            <li className='media-heading'>{ item.user.username }</li>
            <li className='media-genre'>{ item.genre }</li>
            <a className='media-release' href={ item.permalink_url }>Visit Artist Page</a>
          </ul>
        </div>
      </div>
      {this.state.isVisible === item.id  && <ArtistChild tracks={ item } />}
    </div>
  ));

   return (
     <div id="layout-content" className="layout-content-wrapper">
       <div className="panel-list">
         { artists }
       </div>
     </div>
   );
 }
}

export default ArtistListEntry;
