import React from 'react'
import LocationForm from './location'
import EventForm from './events'
import EventInstanceForm from './event-instances'
import ScheduledItemsForm from './scheduled_items'

export default function Dashboard() {
  return (
    <div>
      <h1 style={{textAlign :"center"}}>Dash Board</h1>
    <LocationForm/>
    <EventForm/>
    <EventInstanceForm/>
    <ScheduledItemsForm/>
    </div>
  )
}
