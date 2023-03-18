export default function formatTime(date: Date): String {
    const dateNow = new Date();

    switch (true) {
        case (date.getFullYear() == dateNow.getFullYear() &&
            date.getMonth() == dateNow.getMonth() &&
            date.getDate() == dateNow.getDate()):
            return `Hoje - ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
        // break;

        case (date.getFullYear() == dateNow.getFullYear() &&
            date.getMonth() == dateNow.getMonth() &&
            date.getDate() == (dateNow.getDate() - 1)):
            return `Ontem - ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
        // break;

        default:
            return `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
        // break;
    }
}