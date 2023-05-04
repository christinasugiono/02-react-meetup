import { useState, useEffect  } from "react";
import MeetupList from '../components/meetups/MeetupList'

const AllMeetupsPage = () => {
  const [loading, setLoading] = useState(true)
  const [meetupsData, setMeetupsData] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch('https://react-meetup-fd463-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
      .then(response => response.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }

          meetups.push(meetup);
        }

        setLoading(false);
        setMeetupsData(meetups);
      })
  }, [])

  if (loading) {
    return <section>
      <p>Loading....</p>
    </section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupsData} />
    </section>
  )
}

export default AllMeetupsPage;
