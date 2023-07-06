export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString
        .split('/')
        .map((value: string): number => {
            return parseInt(value);
        });

        // the month in this date is 0 indexed, so subtract 1
        return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}