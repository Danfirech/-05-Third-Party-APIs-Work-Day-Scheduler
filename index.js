var myHours = [
  {
    tag: '0',
    hour: '09',
    time: '09',
    AmPm: 'am',
    undefined: '',
  },

  {
    tag: '1',
    hour: '10',
    time: '10',
    AmPm: 'am',
    undefined: '',
  },

  {
    tag: '2',
    hour: '11',
    time: '11',
    AmPm: 'am',
    undefined: '',
  },

  {
    tag: '3',
    hour: '12',
    time: '12',
    AmPm: 'pm',
    undefined: '',
  },

  {
    tag: '4',
    hour: '13',
    time: '01',
    AmPm: 'pm',
    undefined: '',
  },

  {
    tag: '5',
    hour: '14',
    time: '02',
    AmPm: 'pm',
    undefined: '',
  },

  {
    tag: '6',
    hour: '15',
    time: '03',
    AmPm: 'pm',
    undefined: '',
  },

  {
    tag: '7',
    hour: '16',
    time: '04',
    AmPm: 'pm',
    undefined: '',
  },

  {
    tag: '8',
    hour: '17',
    time: '05',
    AmPm: 'pm',
    undefined: '',
  },
]

//Header date
function getHeaderDate() {
  var today = moment().format('dddd, MMMM Do')
  $('#currentDay').text(today)
}

getHeaderDate()

// //Creating rows and columns
// myHours.forEach(function (currentHour) {
//   var rows = $('<form>').attr({
//     class: 'row',
//   })

//   $('.container').append(rows)
// })

// creates the visuals for the scheduler body
myHours.forEach(function (thisHour) {
  // creates timeblocks row
  var myHours = $('<form>').attr({
    class: 'row',
  })
  $('.container').append(myHours)

  // creates time field
  var hourField = $('<div>').text(`${thisHour.hour}${thisHour.meridiem}`).attr({
    class: 'col-md-2 hour',
  })

  // creates schdeduler data
  var hourPlan = $('<div>').attr({
    class: 'col-md-9 description p-0',
  })
  var planData = $('<textarea>')
  hourPlan.append(planData)
  planData.attr('id', thisHour.id)
  if (thisHour.time < moment().format('HH')) {
    planData.attr({
      class: 'past',
    })
  } else if (thisHour.time === moment().format('HH')) {
    planData.attr({
      class: 'present',
    })
  } else if (thisHour.time > moment().format('HH')) {
    planData.attr({
      class: 'future',
    })
  }

  // creates save button
  var saveButton = $("<i class='far fa-save fa-lg'></i>")
  var savePlan = $('<button>').attr({
    class: 'col-md-1 saveBtn',
  })
  savePlan.append(saveButton)
  myHours.append(hourField, hourPlan, savePlan)
})
