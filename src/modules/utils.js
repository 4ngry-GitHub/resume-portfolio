import moment from 'moment-timezone';

const formatDateTime = dateTime => {
	const utcDateTime = moment.utc(dateTime).tz('Europe/Kiev');
	return utcDateTime.format('YYYY-MM-DD HH:mm');
};

export { formatDateTime };
