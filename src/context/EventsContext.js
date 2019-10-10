import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {

    state = {
        events: []
    }
    token = 'XU6RSLPKAQTELVZNGYVK';

    getEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}
                &categories=${search.category}&sort_by=date&token=${this.token}&locale=es_ES`;
        
        let result = await axios.get(url);
        //console.log(result.data.events);
        this.setState({
            events: result.data.events
        })

    }

    render() {
        return (
            <EventsContext.Provider
                value={{
                    events: this.state.events,
                    getEvents: this.getEvents 
                }}>
                { this.props.children }
            </EventsContext.Provider>
        );
    }
}

export default EventsProvider;