const DateRangeGenerator = (givenDate) => {
    const startGivenDate = new Date(givenDate);
    const endGivenDate = new Date(givenDate);
    const startDate = new Date(startGivenDate.getTime()- (5*60+30)*60*1000);
    const endDate = new Date(endGivenDate.setUTCHours(18, 29, 59, 999));

    const dateRange = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
    };

    return dateRange;
    
}

export default DateRangeGenerator;