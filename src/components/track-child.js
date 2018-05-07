import React, { Component } from 'react';
import axios from 'axios';

class ArtistChild extends Component {
  constructor(props) {
    super(props);

    this.state= {
      tracks: []
    };
  }

  componentDidMount() {
    this.TrackListEntry();
  }

  TrackListEntry() {
    axios.get('https://api-v2.hearthis.at/feed/?type=popular&page=1&count=20')
      .then(
        ({ data }) => {
          this.setState({
            tracks: data
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
    let tracks = this.state.tracks.map((item) => (
      <div id='track-box' className='media media-bottom' key={ item.id }>
        <div className="media-track-content">
          <div className='media-left media-middle'>
            <img src={ item.artwork_url } className='media-object track-image' />
          </div>
          <div className='media-body track-details'>
            <ul className='track-list'>
              <li className='track-name'>Track:<br/>{item.title}</li>
              <li className='media-stat-play'><p>Plays: { item.playback_count }</p></li>
              <li className='media-stat-download'><p>Downloads: { item.download_count }</p></li>
              <audio controls>
                <source src={ item.stream_url }/>
              </audio>
            </ul>
          </div>
        </div>
      </div>
    ));

    return(
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ tracks }</div>
      </div>
    );
  }
}


export default ArtistChild;
