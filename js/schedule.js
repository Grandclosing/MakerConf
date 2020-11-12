
let fridayElement;
let fridayPosition;

let saturdayElement;
let saturdayPosition;

let sundayElement;
let sundayPosition;

let lastScrollPosition = 0;
let ticking = false;

const FRIDAY = 0;
const SATURDAY = 1;
const SUNDAY = 2;
let currentDay = FRIDAY;

window.onload = function() {
    let schedule = document.getElementById('schedule-container');

    fridayElement = document.getElementsByClassName('day')[0];
    saturdayElement = document.getElementsByClassName('day')[1];
    sundayElement = document.getElementsByClassName('day')[2];

    fridayPosition = document.getElementById('friday').getBoundingClientRect().top;
    saturdayPosition = document.getElementById('saturday').getBoundingClientRect().top;
    sundayPosition = document.getElementById('sunday').getBoundingClientRect().top;

    schedule.addEventListener('scroll', function(e) {
        lastScrollPosition = schedule.scrollTop;

        if(!ticking) {
            window.requestAnimationFrame(function() {
                setDayBorder();
                ticking = false;
            });

            ticking = true;
        }
    });
}

function setDayBorder() {
    let newDay; 

    if(lastScrollPosition >= 0 && lastScrollPosition < saturdayPosition) {
        newDay = FRIDAY;
    } else if(lastScrollPosition >= saturdayPosition && lastScrollPosition < sundayPosition) {
        newDay = SATURDAY;
    } else if(lastScrollPosition >= sundayPosition) {
        newDay = SUNDAY;
    }

    console.log(`lastScrollPosition: ${lastScrollPosition}, 
    fridayPosition: ${fridayPosition}, 
    saturdayPosition: ${saturdayPosition},
    sundayPosition: ${sundayPosition},
    newDay: ${newDay},
    currentDay: ${currentDay}`);

    if(newDay == currentDay) return; // nothing to do

    currentDay = newDay; 

    switch(currentDay) {
        case FRIDAY:
            console.log("styling for friday");
            fridayElement.style.borderLeftColor = "#C82586";
            saturdayElement.style.borderLeftColor = "transparent";
            sundayElement.style.borderLeftColor = "transparent";
            break;
        case SATURDAY: 
            console.log("styling for saturday");
            fridayElement.style.borderLeftColor = "transparent";
            saturdayElement.style.borderLeftColor = "#C82586";
            sundayElement.style.borderLeftColor = "transparent";
            break;
        case SUNDAY:
            console.log("styling for sunday");
            fridayElement.style.borderLeftColor = "transparent";
            saturdayElement.style.borderLeftColor = "transparent";
            sundayElement.style.borderLeftColor = "#C82586";
            break;
    }
}