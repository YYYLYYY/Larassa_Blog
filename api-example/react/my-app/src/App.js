import React from 'react';

import { withRouter } from 'react-router-dom';
import { 
	BrowserRouter as Router,
	Switch,
  Route,
	Link,
	useHistory 
} from "react-router-dom";
import RouterConfig from './router/index'
import About from './components/About'

const routes = [
  {
    path: '/home',
    component: () => { return( <div>home</div> ) }
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/temp1',
        component: () => <div>temp1</div>
      },
      {
        path: '/about/temp2',
        component: () => <div>temp2</div>
      }
    ]
  }
]

function RenderList(props) {
	let temp = []
	for(let i = 0; i < props.list.length; i++) {
		temp.push(<p key={ props.list[i].name }>{ props.list[i].name }</p>)
	}
	return temp
}
class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			name: 'name',
			obj: {
				name: 'react'
			},
			list: [
				{
					name: '11'
				},
				{
					name: '22'
				}
			]
		}
		// 为了在回调中使用 `this`，这个绑定是必不可少的
		this.handleClick = this.handleClick.bind(this);
		this.goHome = this.goHome.bind(this);
	}
	handleClick() {
		let name = 'obj.name'
		this.setState(state => ({
			// obj: Object.assign(state.obj, { name: 'qqq' }),
			name: 'wwwww',
			[name]: 'aaaaaaa'
		}));
	}

	goHome() {
		console.log(this.props)
		// this.props.history.push('/home')
		let history = useHistory();
		history.push('/about')
	}

	render() {
		return (
			<div>
				<Router>
					<ul>
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to={ `/about/?ids=123` }>About</Link>
						</li>
					</ul>
					<Switch>
						{routes.map((route, i) => (
            	<RouterConfig key={i} {...route} />
          	))}
					</Switch>
				</Router>
				{/* <button onClick={this.goHome}>go home</button> */}
			</div>
		)
	}
}
export default App;