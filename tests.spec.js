import { expect, test, afterEach, vi } from "vitest";
import "./index.js";

const consoleSpy = vi.spyOn(console, "debug").mockImplementation(() => undefined);

afterEach(() => {
	consoleSpy.mockReset();
});

test("regular debug", () => {
	console.debug("Hello World");
	expect(consoleSpy).toHaveBeenCalledExactlyOnceWith("Hello World");
});

test("debug.warn", () => {
	console.debug.warn("Warning Message");
	expect(consoleSpy).toHaveBeenCalledExactlyOnceWith("%cWarning Message", expect.any(String));
});

test("debug.error", () => {
	console.debug.error("Error Message");
	expect(consoleSpy).toHaveBeenCalledExactlyOnceWith("%cError Message", expect.any(String));
});

test("debug.info", () => {
	console.debug.info("Info Message");
	expect(consoleSpy).toHaveBeenCalledExactlyOnceWith("%cInfo Message", expect.any(String));
});
