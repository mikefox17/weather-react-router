export const unixToDate = unix => {
    const date = new Date(unix * 1000);
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const month = date.toLocaleString('en-US', { month: 'long' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    return `${day}, ${month} ${dayOfMonth}, ${year}`;
};
