var data = [
  {
    author:{
      avatar: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
   {
    author:{
      avatar: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <Body commentHeading={props.commentHeading} text={props.text} date={props.date} />
      <UserBadge userBadge={props.userBadge}/>
    </div>
  );
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )

}

function Avatar(props){
  return (
      <img className="Avatar" src={props.user.avatar} alt={props.user.name} />
  )
}

function Body(props){
  return (
    <div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <div className="Comment-text">{props.text}</div>
    </div>
  )
}

function UserBadge(props){
  return (
      <div className="UserBadges">
        <div className="badge">{props.userBadge[0]}</div>
        <div className="badge">{props.userBadge[1]}</div>
        <div className="badge">{props.userBadge[2]}</div>
      </div>
  )
}

function Application(props){
  var commentsArray = [];
  props.data.map((user, index)=>{
     commentsArray.push(<Comment key={index} author={user.author} userBadge={user.userBadge} text={user.text} commentHeading={user.commentHeading}/>);
  });
  return (
    <div>
      {commentsArray} 
    </div>
  )
}

ReactDOM.render(
  <Application data={data}/>,
  document.getElementById('root')
)