const ENV_VARS = {
	ENVIRONMENT: 'production',
};

function override(map) {
	for (var key in map) {
		if (map.hasOwnProperty(key) && typeof map[key] === 'string') {
			ENV_VARS[key] = map[key];
		}
	}
}

export { ENV_VARS as default, override };
