import React from 'react'

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
	render() {
		return (
			<div style={styles.main}>
				<button style={styles.backButton} onClick={this.handleBack} type="button"><i className="fa fa-chevron-left" style={styles.icon} aria-hidden="true"></i> Album {this.props.match.params.albumIndex}</button>

				<div style={styles.container}>
					<p style={styles.header}>Photo {this.props.match.params.photoId}</p>
					<img style={styles.mainPic} src={require(albums[(this.props.match.params.albumIndex-1)].Photos[(this.props.match.params.photoId-1)].link)} />
				</div>

				{console.log(albums[(this.props.match.params.albumIndex-1)].Photos[(this.props.match.params.photoId-1)].link)}
			</div>
		)
	}
})