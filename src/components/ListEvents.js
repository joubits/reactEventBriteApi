import React from 'react';
import Event from './Event';

import { EventsConsumer } from '../context/EventsContext';

//import PropTypes from 'prop-types';

const ListEvents = () => {
    return (
            <div className="uk-child-width-1-3@m" uk-grid="true">
                <EventsConsumer>
                {
                    (value) => {
                        // console.log(value);
                        // return(<p>Hello Events</p>);
                        return value.events.map( event => (
                            <Event key={event.id} event={ event } />
                        ))
                        
                    }
                }
                </EventsConsumer>
            </div>
        
    )
}

// ListEvents.propTypes = {

// }

export default ListEvents
