import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const onAddMeetupHandler = (meetupData) => {
    const url = "https://react-meetup-fd463-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json";
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        navigate('/')
      })
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage;
