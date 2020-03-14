import React from 'react'
import PropTypes from 'prop-types'

const Cell = ({ time, title, start, end }) => {
  const daysArray = []
  for (let day = start; day <= end; day += 1) {
    daysArray.push(day)
  }
  return (
    <div className="rt-timebar__cell" style={time.toStyleLeftAndWidth(start, end)}>
      {title}
      {daysArray.map(day => (
        <div className="rt-timebar__day" >
          {day}
        </div>
      ))}
    </div>
  )
}

Cell.propTypes = {
  time: PropTypes.shape({
    toStyleLeftAndWidth: PropTypes.func,
  }),
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
}

export default Cell
