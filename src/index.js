import React from 'react';
import ReactDOM from 'react-dom';
import ArtistListEntry from './components/artist_list_entry';

const App = () => {
    return (
      <div className='main-body'>
        <h2 className='popular-heading'>Popular Artists Feed</h2>
        <ArtistListEntry />
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
