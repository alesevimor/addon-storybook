const path = require('path');

module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"../preset.js",
		{
			name: "@storybook/addon-essentials",
			options: {
				docs: false,
			}
		}
	]
};