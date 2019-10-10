import React from 'react'
//import PropTypes from 'prop-types'

const Event = ( {event} ) => {
    let text =  event.description.text;
    text = text 
        ?  ( text.length>200 ? text.substr(0,250) + '...' : text )  
        : null


    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {
                        event.logo 
                            ? <img src={event.logo.url} alt={ event.name } />
                            : null 
                    }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{ event.name.text }</h3>
                    { text }
                </div>

                <div className="uk-card-footer">
                    <a target="_blank"  rel="noopener noreferrer" href={ event.url } 
                        className="uk-button uk-button-secondary"> More Info 
                    </a>
                </div>
            </div>
        </div>
    )
}

// Event.propTypes = {

// }

export default Event
