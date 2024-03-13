import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TimeTracker({ startDate, endDate }) {
    const [timePassed, setTimePassed] = useState({ years: 0, days: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = startDate || new Date();
            const timeDiff = Math.abs(currentTime - endDate);
            const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const yearsPassed = Math.floor(daysPassed / 365);

            setTimePassed({ years: yearsPassed, days: daysPassed % 365 });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [startDate, endDate]);

    return (
        <div>
            Time: {timePassed.years} year(s), {timePassed.days} days
        </div>
    );
}

TimeTracker.propTypes = {
    endDate: PropTypes.instanceOf(Date).isRequired,
    startDate: PropTypes.instanceOf(Date),
};

export default TimeTracker;