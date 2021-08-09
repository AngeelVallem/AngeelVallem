import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HeroScreen from '../screens/hero/Index'
import ContactScreen from '../screens/contact/Index'
import AboutScreen from '../screens/about/Index'
import SendedScreen from '../screens/contact/Sended'
import AppsScreen from '../screens/apps/Index'
import DetailsScreen from '../screens/details/Index'
import Footer from '../components/Footer'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<HeroScreen />
				</Route>
				<Route exact path='/contact'>
					<Navbar />
					<ContactScreen />
				</Route>
				<Route exact path='/sended'>
					<SendedScreen />
				</Route>
				<Route exact path='/about'>
					<Navbar />
					<AboutScreen />
					<Footer />
				</Route>
				<Route exact path='/apps'>
					<Navbar />
					<AppsScreen />
					<Footer />
				</Route>
				<Route path='/apps/:id' children={<>
					<Navbar />
					<DetailsScreen />
					<Footer />
					</>} />
			</Switch>
		</Router>
	)
}

export default Routes;