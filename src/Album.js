import React from 'react'

var styles = {
	main: {
		height: '326px',
		width: '250px',
		border: '13px solid white',
		boxShadow: '2px 2px 2px rgba(0,0,0,0.1)'
	},
	thumbnail: {
		overflow: 'hidden',
		boxShadow: 'inset 0 0 10px black'
	},
	coverImg: {
		display: 'block',
		maxHeight: '300px',
		width:'auto',
		position: 'relative',
		left: '-70px',
		filter: 'blur(2px) grayscale(60%)',
		boxShadow: '0 0 40px black'
	},
	text: {
		width:224,
		textAlign: 'center',
		textTransform: 'lowercase',
		margin: 0,
		position: 'relative',
		top: '-310px',
		fontWeight: 'normal',
		fontSize: '20px',
		fontFamily: 'Helvetica Neue',
		background: 'white',
		color: 'rgba(0,0,0,0.6)',
		lineHeight: '40px',
	}
	
}

export default React.createClass({
	render () {
		return (
			<div style={styles.main}>
				<div className="coverPhoto" style={styles.thumbnail}>
					<img style={styles.coverImg} src={require(this.props.cover)} alt="hi"/>
					
					
				</div>
				<div style={styles.textBox}>
					<p className="albumTitle" style={styles.text}>{this.props.title}</p>
				</div>

			</div>
		)
	}
})