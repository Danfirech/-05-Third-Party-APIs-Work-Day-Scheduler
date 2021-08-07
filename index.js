var myHours = [
  {
    tag: '0',
    hour: '09',
    time: '09',
    AmPm: 'am',
    text: '',
  },

  {
    tag: '1',
    hour: '10',
    time: '10',
    AmPm: 'am',
    text: '',
  },

  {
    tag: '2',
    hour: '11',
    time: '11',
    AmPm: 'am',
    text: '',
  },

  {
    tag: '3',
    hour: '12',
    time: '12',
    AmPm: 'pm',
    text: '',
  },

  {
    tag: '4',
    hour: '13',
    time: '01',
    AmPm: 'pm',
    text: '',
  },

  {
    tag: '5',
    hour: '14',
    time: '02',
    AmPm: 'pm',
    text: '',
  },

  {
    tag: '6',
    hour: '15',
    time: '03',
    AmPm: 'pm',
    text: '',
  },

  {
    tag: '7',
    hour: '16',
    time: '04',
    AmPm: 'pm',
    text: '',
  },

  {
    tag: '8',
    hour: '17',
    time: '05',
    AmPm: 'pm',
    text: '',
  },
]

//Header date
function getHeaderDate() {
  var today = moment().format('dddd, MMMM Do')
  $('#currentDay').text(today)
}

getHeaderDate()

function displayRows() {
  var container = document.querySelector('.container')
  for (var i = 0; i < myHours.length; i++) {
    var form = document.createElement('form')
    form.setAttribute('class', 'row')
    var htmlString = `<div class="col-md-2 hour">${myHours[i].time} ${myHours[i].AmPm}</div>
        <div class="col-md-9 description p-0">
          <textarea id= ${myHours[i].tag} class="past"></textarea>
        </div>
        <button class="col-md-1 saveBtn">
          <i class="far fa-save fa-lg"></i>
        </button>`
    form.innerHTML = htmlString
    container.appendChild(form)
  }
}

displayRows()
// //Creating rows and columns
// myHours.forEach(function (currentHour) {
//   var rows = $('<form>').attr({
//     class: 'row',
//   })

//   $('.container').append(rows)
// })

// // creates the visuals for the scheduler body
// myHours.forEach(function (thisHour) {
//   // creates timeblocks row
//   var myHours = $('<form>').attr({
//     class: 'row',
//   })
//   $('.container').append(myHours)

//   // creates time field
//   var hourField = $('<div>').text(`${thisHour.hour}${thisHour.meridiem}`).attr({
//     class: 'col-md-2 hour',
//   })

//   // creates schdeduler data
//   var hourPlan = $('<div>').attr({
//     class: 'col-md-9 description p-0',
//   })
//   var planData = $('<textarea>')
//   hourPlan.append(planData)
//   planData.attr('id', thisHour.id)
//   if (thisHour.time < moment().format('HH')) {
//     planData.attr({
//       class: 'past',
//     })
//   } else if (thisHour.time === moment().format('HH')) {
//     planData.attr({
//       class: 'present',
//     })
//   } else if (thisHour.time > moment().format('HH')) {
//     planData.attr({
//       class: 'future',
//     })
//   }

//   // creates save button
//   var saveButton = $("<i class='far fa-save fa-lg'></i>")
//   var savePlan = $('<button>').attr({
//     class: 'col-md-1 saveBtn',
//   })
//   savePlan.append(saveButton)
//   myHours.append(hourField, hourPlan, savePlan)
// })
