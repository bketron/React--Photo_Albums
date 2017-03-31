import React from 'react'
import {Link} from 'react-router-dom'
import Album from './Album'

var albums = require('./albums')

var styles = {
	list: {
		listStyleType: 'none',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: 0,
		marginTop: '50px',
		marginBottom: '0'
	},
	album: {
		margin: '40px 75px'
	}
}


export default React.createClass({
	render() {
		return (
				<div>
					<ul style={styles.list}>
						{albums.map(album => (
							<li key={"album" + album.index} style={styles.album}>
								<Link to={'/album/' + album.index}>
									<Album {...album} />
								</Link>
							</li>
						))}
					</ul>

				</div>

		)
	}
})