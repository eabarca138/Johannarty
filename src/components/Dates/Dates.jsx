import { useState, useEffect } from "react";
import DatesTable from './DatesTable';
import "./Dates.css";


const Dates = () => {
  const [dates, setDates] = useState('');

  const getEvents = () => {
    let gapi = window.gapi;

    function start() {
      gapi.client
        .init({
          apiKey: "AIzaSyArv4NpmekLtxn8YhUKlp6TE4q_NiXS7_4",
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/tppvdomkfs4gjei1k9jfv6gmt4@group.calendar.google.com/events`,
          });
        })
        .then(
          (response) => {
            let source = response.result.items.map((date) => {
              const obj = {
                date: date.start.date,
                location: date.location,
                venue: date.summary,
                info: date.description,
              };
              return obj;
            });
            setDates(source);
          },
          function (reason) {
            console.log(reason);
          }
        );
    }
    gapi.load("client", start);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="container2">
      <DatesTable dates={dates} />
    </div>
  );
};

export default Dates