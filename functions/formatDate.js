/**
 * Format the date to YYYY-MM-DD
 *
 * @param year
 * @param month
 * @param day
 * @returns {string}
 */
function formatDate (year, month, day) {

    if (month < 10) {
        month = `0${month}`
    }
    if (day < 10) {
        day = `0${day}`
    }

    return `${year}-${month}-${day}`;
}

module.exports = formatDate;