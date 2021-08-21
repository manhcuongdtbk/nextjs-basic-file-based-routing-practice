import {getAllEvents} from "../../dummy-data"
import EventList from "../../components/events/event-list"

function EventsIndexPage() {
  const events = getAllEvents()

  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export default EventsIndexPage
