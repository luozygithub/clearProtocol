import moment from "moment";
export function formatTime (time){
    return moment(time).utc().format("YYYY-MM-DD HH:mm:ss") + " UTC";
}
