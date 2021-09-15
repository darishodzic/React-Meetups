import {
	Route,
	Switch,
} from "react-router-dom";
import AllMeetupsPage from "./page/AllMeetups";
import NewMeetupsPage from "./page/NewMeetups";
import FavoritesPage from "./page/Favorites";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
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
		</Layout>
	);
}

export default App;
