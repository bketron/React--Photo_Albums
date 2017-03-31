import React from 'react'
import AlbumList from './AlbumList'

var styles = {
	banCon: {
		boxShadow: '0 0 20px rgba(0,0,0,0.25)',
	},
	banner: {
		width: '100%',
		height: '150px',
		background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
		margin: 0,
		color: 'white',
		fontSize: '70px',
		fontFamily: 'Helvetica Neue',
		fontWeight: 'lighter',
		lineHeight: '150px',
		paddingLeft: '220px',
		boxShadow: 'inset 0 0px 25px rgba(255,255,255,0.6)',
	}
}

export default React.createClass({

	render() {
		return (
			<div>
				<div style={styles.banCon}>
					<p id="banner" style={styles.banner}>My Albums</p>
				</div>

				<AlbumList />
			</div>
		)
	}
})