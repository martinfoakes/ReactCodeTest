import React, { Component } from 'react';
import axios from 'axios';

class ArtistChild extends Component {
  constructor(props) {
    super(props);
  }

  TrackListEntry() {
  }

  componentDidMount() {
    this.TrackListEntry();
  }

  render() {
    let item = this.props.tracks
    return (
      <div id='track-box' className='media media-bottom' key={ item.id }>
        <div className="media-track-content">
          <div className='media-left media-middle track-media'>
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
    );

    return(
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ tracks }</div>
      </div>
    );
  }
}


export default ArtistChild;
