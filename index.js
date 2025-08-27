const enhancedLogger = console.context?.("enhanced-logger") ?? console;

console.debug.warn = (...args) => {
	enhancedLogger.debug(`%c${args}`, "background-color:#413c26;");
};

console.debug.error = (...args) => {
	enhancedLogger.debug(`%c${args}`, "background-color: #4e3534;");
};

console.debug.info = (...args) => {
	enhancedLogger.debug(`%c${args}`, "background-color: #313c4e;");
};
