import moment from "moment";

const formatDateHumanReadable = (dateTime) => {
    return moment(dateTime).fromNow()
}

const formatDateTime = (dateTime) => {
    return moment(dateTime).format('dddd MM, YYYY hh:mm A')
}


export {formatDateHumanReadable, formatDateTime}
