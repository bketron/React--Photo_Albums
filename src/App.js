import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import InnerAlbum from './InnerAlbum'
import SingleImage from './SingleImage'

var styles = {
  main: {
    background: '#f6f6f6'
  }
}

var albums = require('./albums')

export default React.createClass({
  render () {
    return (
        <BrowserRouter>
          <div style={styles.main}>

            <Route exact={true} path="/" component={Home} albums={albums}/>
            <Route exact={true} path="/album/:albumIndex" component={InnerAlbum} />
            <Route path="/album/:albumIndex/photos/:photoId" component={SingleImage} />

          </div>
        </BrowserRouter>

      
    )
  }
})
