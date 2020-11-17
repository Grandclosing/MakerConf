
let queryObj = {};

function parseParams() {
    let queryParams = window.location.search.split('&');

    queryParams[0] = queryParams[0].substr(1, queryParams[0].length);

    for(param of queryParams) {
        let paramPair = param.split('=');
        queryObj[paramPair[0]] = paramPair[1];
    }
};

/* Derived from https://stackoverflow.com/a/8358141/3708051
   Thanks, maerics!
*/
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if(match) {
        const intlCode = (match[1] ? '+1' : '');

        return `${intlCode} (${match[2]}) ${match[3]}-${match[4]}`;
    }

    return null;
}

window.onload = function() {
    parseParams();

    document.getElementById('email-display').innerHTML = queryObj['email-entry'].replace('%40', '@');

    if(queryObj.hasOwnProperty('phone-entry')) {
        const confirmationNode = document.getElementById('phone-confirmation');
        const formattedPhoneNumber = formatPhoneNumber(queryObj['phone-entry']);

        confirmationNode.innerHTML = 
        `You will receive schedule updates and reminder text messages at <span class="highlight">${formattedPhoneNumber ? formattedPhoneNumber : queryObj['phone-entry']}</span>.`;    
    }   
}
