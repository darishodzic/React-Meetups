import {
	Route,
	Switch,
} from "react-router-dom";
import AllMeetupsPage from "./page/AllMeetups";
import NewMeetupsPage from "./page/NewMeetups";
import FavoritesPage from "./page/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
	return (
		<div>
			<MainNavigation />
			<Switch>
				<Route path="/" exact>
					<AllMeetupsPage />
				</Route>
				<Route path="/new-meetup">
					<NewMeetupsPage />
				</Route>
				<Route path="/favorites">
					<FavoritesPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
