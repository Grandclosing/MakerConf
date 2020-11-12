
let fridayElement;
let fridayPosition;

let saturdayElement;
let saturdayPosition;

let sundayElement;
let sundayPosition;

let lastScrollPosition = 0;
const scrollPositionOffset = 300; 
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

    if(lastScrollPosition >= 0 && lastScrollPosition < saturdayPosition - scrollPositionOffset) {
        newDay = FRIDAY;
    } else if(lastScrollPosition >= saturdayPosition - scrollPositionOffset && lastScrollPosition < sundayPosition - scrollPositionOffset) {
        newDay = SATURDAY;
    } else if(lastScrollPosition >= sundayPosition - scrollPositionOffset) {
        newDay = SUNDAY;
    }

    if(newDay == currentDay) return; // nothing to do

    currentDay = newDay; 

    switch(currentDay) {
        case FRIDAY:
            fridayElement.style.borderLeftColor = "#C82586";
            saturdayElement.style.borderLeftColor = "transparent";
            sundayElement.style.borderLeftColor = "transparent";
            break;
        case SATURDAY: 
            fridayElement.style.borderLeftColor = "transparent";
            saturdayElement.style.borderLeftColor = "#C82586";
            sundayElement.style.borderLeftColor = "transparent";
            break;
        case SUNDAY:
            fridayElement.style.borderLeftColor = "transparent";
            saturdayElement.style.borderLeftColor = "transparent";
            sundayElement.style.borderLeftColor = "#C82586";
            break;
    }
}