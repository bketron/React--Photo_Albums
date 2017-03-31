import React from 'react'
import { Link } from 'react-router-dom'
import SingleImage from './SingleImage'

var albums = require('./albums.js')

var styles = {
	headerBox: {
			textAlign: 'center',
			background: 'white',
			margin: 0,
			height: '100px',
			boxShadow: '0 3px 3px rgba(0,0,0,0.05)',
			paddingTop: '25px'
		},
		headerText: {
			margin: 'auto',
			maxWidth:'140px',
			fontFamily: 'Josefin Sans',
			fontSize: '35px',
			letterSpacing: '2px',
			color: 'rgba(0,0,0,0.6)',
			borderBottom: '1px dashed rgba(0,0,0,0.25)'
		},
		imageArray: {
			display: 'flex',
			listStyleType: 'none',
			flexWrap: 'wrap',
			justifyContent: 'center',
			margin: 0
		},
		listItem: {
			margin: '40px',
			boxShadow: '0px 0px 25px rgba(0,0,0,0.15)',
			border: '8px solid white',

		},
		photo: {
			width: '250px',
			height: '300px',
			overflow: 'hidden',
		},
		imgThumb: {
			maxHeight: '300px',
			width:'auto',
			filter: 'blur(1px) grayscale(30%)',
		}
}

export default React.createClass({
	getInitialState() {
		return {
			index: Number(this.props.match.params.albumIndex),
			album: albums[Number(this.props.match.params.albumIndex)-1]
		}
	},
	changeIndex() {
		this.setState({
			index: Number(this.props.match.params.albumIndex),
			album: albums[Number(this.props.match.params.albumIndex)-1]
		})
	},
	render() {
		return (
			<div id="photoArray">
				{console.log(this.props.match.params.albumIndex)}
				{console.log(this.state.album)}
				{console.log(this.state.album.title)}
					<div style={styles.headerBox}>
					<p style={styles.headerText} id="albumHeader">Album {this.props.match.params.albumIndex}</p>
					</div>

					<ul style={styles.imageArray}>
						{albums[this.props.match.params.albumIndex-1].Photos.map(pic =>
							<li style={styles.listItem}>
								<Link to={'/album/' + this.props.match.params.albumIndex + '/photos/' + pic.id} >
									<div style={styles.photo}>
										<img style={styles.imgThumb} src={require(pic.link)} />
										<p>Photo {pic.id}</p>
									</div>
								</Link>
							</li>
						)}
					</ul>
				</div>
		)
	}
})