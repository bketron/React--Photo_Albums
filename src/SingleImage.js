import React from 'react'
import { Link } from 'react-router-dom'

var albums = require('./albums')

var styles = {
	main: {
		background: 'rgb(252, 252, 249)',
		boxSizing: 'content-box',
		padding: '20px 40px 75px 40px'
	},
	backButton: {
		background: 'none',
		outline: 'none',
		border: 'none',
		fontSize: '13px',
		cursor: 'pointer'
	},
	icon: {
		fontSize: '11px',
		marginRight: '3px'
	},
	header: {
		textAlign: 'center',
		fontSize: '35px',
		fontFamily: 'Josefin Sans',
		color: 'rgba(0,0,0,0.5)'
	},
	mainPic: {
		width: '75%',
		height: 'auto',
		margin: 'auto',
		border: '17px solid white',
		boxShadow: ' 0 0 30px rgba(0,0,0,0.15)'
	},
	container: {
		margin: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	navButtons: {
		height: '100%',
		width: '75%',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 'auto',
		fontSize: '30px',
		color: 'white',
		position: 'relative',
		top: '175px',
		padding: '0 10px'
	},
	navLeft: {
		width: '40px',
		height: '40px',
		textAlign: 'center',
		lineHeight: '40px',
		borderRadius: '10px',
		paddingRight: '5px',
		marginLeft: '15px'
	},
	navRight: {
		width: '40px',
		height: '40px',
		textAlign: 'center',
		lineHeight: '40px',
		borderRadius: '10px',
		paddingLeft: '5px',
		marginRight: '15px'
	},
	navIconRight: {
		marginLeft: '2px'
	}
}

export default React.createClass({
	getInitialState() {
		return {
			currentAlbum: albums.filter(album=>{
				if(album.index === this.props.match.params.albumIndex){
					console.log(album[this.props.match.params.albumIndex])
					return album

				}
			})[0],
			currentIndex: this.props.match.params.albumIndex
		}
	},
	handleBack: function(e) {
		e.preventDefault()
		this.props.history.goBack()
	},
	nextPic() {
		var picLink = '/album/' + this.state.currentIndex + '/photos/'
		var numPics = albums[(this.props.match.params.albumIndex-1)].Photos.length
		var currentPic = Number(this.props.match.params.photoId)
		var nextPic = 0

		if( currentPic === numPics ) {
			nextPic = 1
		} else {
			nextPic = currentPic + 1
		}

		picLink = picLink + nextPic

		return picLink
	},
	prevPic() {
		var picLink = '/album/' + this.state.currentIndex + '/photos/'
		var numPics = albums[(this.props.match.params.albumIndex-1)].Photos.length
		var currentPic = Number(this.props.match.params.photoId)
		var nextPic = currentPic -1

		if( nextPic === 0 ) {
			nextPic = 6
		} else {
			nextPic = currentPic - 1
		}

		picLink = picLink + nextPic

		return picLink

	},
	render() {
		return (
			<div style={styles.main}>
				{console.log(this.props.match.params.photoId)}
				<button style={styles.backButton} onClick={this.handleBack} type="button"><i style={styles.navIconRight} className="fa fa-chevron-left" style={styles.icon} aria-hidden="true"></i> Album {this.props.match.params.albumIndex}</button>

				<div style={styles.navButtons} className="navButtons">
					<Link style={styles.navLeft} to={this.prevPic()}><i className="fa fa-caret-left" aria-hidden="true"></i></Link>
					<Link style={styles.navRight} to={this.nextPic()}><i className="fa fa-caret-right" aria-hidden="true"></i></Link>
				</div>

				<div style={styles.container}>
					<p style={styles.header}>Photo {this.props.match.params.photoId}</p>
					<img style={styles.mainPic} src={require(albums[(this.props.match.params.albumIndex-1)].Photos[(this.props.match.params.photoId-1)].link)} />
				</div>

				

				{console.log(albums[(this.props.match.params.albumIndex-1)].Photos[(this.props.match.params.photoId-1)].link)}
			</div>
		)
	}
})