import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
	const history = useHistory();

	function AddMeetupHandler(
		meetupData
	) {
		fetch(
			"https://react-meetups-61b0f-default-rtdb.firebaseio.com/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(
					meetupData
				),
				headers: {
					"Content-Type":
						"application/json",
				},
			}
		).then(() => {
			history.replace("/");
		});
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm
				onAddMeetup={AddMeetupHandler}
			/>
		</section>
	);
}

export default NewMeetupsPage;
