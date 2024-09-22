import { getFullYear, getFooterCopy, getLatestNotifications } from "./utils";


describe("getFullYear", () => {
    it("should return the current year", () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });
});

describe("getFooterCopy", () => {
    it("should return the correct string when isIndex is true", () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
    });

    it("should return the correct string when isIndex is false", () => {
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });
});


describe("getLatestNotifications", () => {
    it("should return the correct string", () => {
        expect(getLatestNotifications()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    });
});