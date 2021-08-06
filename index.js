var today = moment().format('dddd, MMMM Do')

function getHeaderDate() {
  var today = moment().format('dddd, MMMM Do')
  $('#currentDay').text(today)
}

getHeaderDate()
