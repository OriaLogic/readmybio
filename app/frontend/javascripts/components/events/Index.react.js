import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { NewUserEventPath } from '../../helpers/Routes';
import EventBox from './EventBox.react';
import EventLoadingPlaceholder from './EventLoadingPlaceholder.react';
import NoEventPlaceholder from './NoEventPlaceholder.react';
import { keys, forEach } from 'lodash';
import IndexNav from './IndexNav.react';
import IndexSearch from '../../containers/events/IndexSearchNice.react';

const EventsIndexComponent = ({
  filter, categories, canEdit, events, loading, params, showEventsNb, displayedUserId,
  showMoreEvents, deleteEvent
}) => {
  let content, eventsKeys = keys(events);

  if (loading) {
    content = <EventLoadingPlaceholder />
  } else if (eventsKeys.length === 0) {
    content = <NoEventPlaceholder />
  } else {
  //  let div1Content = [], div2Content = [], div3Content = [], div4Content = [], i = 0;
  //   forEach(eventsKeys.slice(0, showEventsNb), eventId => {
  //     const e = events[eventId];
  //     let eventBox = (
  //       <EventBox
  //         event={e}
  //         key={e.id}
  //         canEdit={canEdit}
  //         params={params}
  //         categories={categories}
  //       />
  //     );
  //
  //     switch (i % 4) {
  //       case 0: div1Content.push(eventBox); break;
  //       case 1: div2Content.push(eventBox); break;
  //       case 2: div3Content.push(eventBox); break;
  //       case 3: div4Content.push(eventBox); break;
  //     }
  //
  //     i ++;
  //   });
  //
  //   content = (
  //     <div className='row'>
  //       <div className='col-md-3'>{div1Content}</div>
  //       <div className='col-md-3'>{div2Content}</div>
  //       <div className='col-md-3'>{div3Content}</div>
  //       <div className='col-md-3'>{div4Content}</div>
  //     </div>
  //   );

    let i = 0, rows = [];
    const eventsToShow = eventsKeys.slice(0, showEventsNb);

    while (i < eventsToShow.length) {
      rows.push(
        <div key={i / 4} className='row'>
          {
            eventsToShow.slice(i, i + 4).map(eventId => {
              const e = events[eventId];
              return (
                <div key={eventId} className='col-md-3'>
                  <EventBox
                    event={e}
                    canEdit={canEdit}
                    params={params}
                    categories={categories}
                    deleteEvent={deleteEvent}
                    userId={displayedUserId}
                  />
                </div>
              );
            })
          }
        </div>
      );

      i += 4;
    }

    content = rows;
  }

  // If not loading and eventsList is not empty
  return (
    <div>
      <IndexNav/>

      <div
         className='events-index'>
         <div>
           <div style={{ textAlign: 'center', marginBottom: 30 }}>
             <IndexSearch />
           </div>

           <div
             style={{ position: 'relative' }}
             className='events-list'>
             {content}
           </div>

           {
             eventsKeys.length > 0 &&
             <div className='footer'>
               <span className='text-muted'>
                 Showing {Math.min(eventsKeys.length, showEventsNb)} of {eventsKeys.length} events.{' '}
               </span>
               {
                 (showEventsNb < eventsKeys.length) &&
                 <a
                   href='#'
                   onClick={e => { e.preventDefault(); showMoreEvents(displayedUserId) }}>
                   Show more
                 </a>
               }
             </div>
           }
         </div>
      </div>
    </div>
  );
}

EventsIndexComponent.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  events: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.object.isRequired,
  showMoreEvents: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired
}

export default EventsIndexComponent;
