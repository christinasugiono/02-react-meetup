import styles from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

const MeetupList = (props) => {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => {
        return <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description} />
      })}
    </ul>
  )
}

export default MeetupList
