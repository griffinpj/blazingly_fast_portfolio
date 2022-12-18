module.exports = {
    mode: 'production',
    output: {
        filename: 'index.min.js'
    },
	experiments: {
		asyncWebAssembly: true
	},
    optimization: {
        minimize: false // Set to false for better debugging in FE ... (shows actual code)
    }
};
