function Poster(props){
	return(
		<div className="col-sm-6 col-md-4">
			<img src={props.poster}/>
		</div>
	)
}
function UserInfo(props){
	return (
		<div className="UserInfo">
			// <img className="Avatar" src={props.avatarUrl} alt={props.name}/>
			<div className="UserInfo-name">
				{props.name}
			</div>
		</div>
	)
}
function Body(props){
	return (
		<div className="Comment-body">
			<h1>{props.heading}</h1>
			<div className="Comment-text">{props.text}</div>
			<div className="Comment-date">{props.date}</div>
		</div>
	)
}
var Comment = React.createClass({
	getInitialState: function() {
		return {
			userInfo: [],
			bodyInfo: [],
		}	
	},

	componentDidMount: function() {
			var username = "irene";
			var url = "welcome";
			var currentUser = [];
			var currentBody = [];
			currentUser.push({'username': username, 'url': url});
			currentBody.push({'heading': 'Overwatch', 'date': '04-04-17', 'text': 'Birthday'});
			// console.log(this);
			this.setState({
				userInfo:currentUser,
				bodyInfo: currentBody
			});
			console.log(currentBody[0]);
	},
	render:function(){
		return (
			<div className="Comment">
				{	
					this.state.userInfo.map((user, index)=>{
						return <UserInfo key={index} avatarUrl={user.url} name={user.username} />
				})}
				{ this.state.bodyInfo.map((current, index)=>{
					<Body key={index} heading={current.heading} date={current.date} text={current.text} />
				})}
			</div>
		);
	}

})
var Application = React.createClass({
	getInitialState:function() {
		return ({
			moviesToShow: []
		})
	},

	componentDidMount: function(){
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
		$.getJSON(url, function(movieData){
			console.log(this);
			var nowPlayingArray =  [];
			for(let i = 0; i < movieData.results.length; i++){
				nowPlayingArray.push(movieData.results[i]);
			}
			this.setState({
				moviesToShow: nowPlayingArray
			});
			// console.log(moviesToShow);
		}.bind(this));
	},
	render: function(){
		var imagePath = "http://image.tmdb.org/t/p/w300"
		return (
			<div className="container">
				<div className="row">
					<h1>Movie App</h1>
					<div className="col-sm-12">
						{this.state.moviesToShow.map((movie, index)=>{
							var moviePoster = imagePath + movie.poster_path
							return <Poster key={index} poster={moviePoster} />
						})}
					</div>
				</div>
			</div>
		)
	}
})
ReactDOM.render(
	<Comment />,
	document.getElementById('root')
)