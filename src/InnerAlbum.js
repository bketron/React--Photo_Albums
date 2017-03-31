import React from 'react'
import { Link } from 'react-router-dom'
import PhotoArray from './PhotoArray'

var albums = require('./albums')

	var styles = {
		main: {
			display: 'flex',
			height: '100%'
		},
		sidePanel: {
			background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
			width: '375px',
			height: '900px',
			float: 'left',
			padding: '70px'
		},
		linkList: {
			listStyleType: 'none',
			textAlign: 'center',
			margin: 0,
			padding: '0 25px'
		},
		sideItem: {
			width: 100,
			fontFamily: 'Ek Mukta'
		},
		link: {
			color: 'white',
			textDecoration: 'none',
			textAlign: 'center',
			fontSize: '20px',
			letterSpacing: '1.5px',
		},
		topLine: {
			borderBottom: '1px dashed rgba(255,255,255,0.6)',
			marginBottom: '20px'
		},
		divideLine: {
			borderBottom: '1px dashed rgba(255,255,255,0.6)',
			margin: '20px 0'
		},
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
	getInitialState: function() {
		return {
			album: albums.filter(album=>{
				return Number(album.index) === Number(this.props.match.params.albumIndex)
			})[0]
		}
	},
	render() {
		return (
				<div style={styles.main}>
					<div style={styles.sidePanel} id="sidePanel">
						<ul style={styles.linkList}>
									<div style={styles.topLine}></div>
							{albums.map(album => 
								<Link to={'/album/' + album.index + '/'} >
									<li style={styles.sideItem} >
										<p style={styles.link}>Album {album.index}</p>
										<div style={styles.divideLine}></div>
									</li>
								</Link>
							)}
						</ul>
					</div>

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
				</div>
		)
	}
})