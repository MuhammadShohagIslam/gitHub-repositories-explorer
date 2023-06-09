// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
require("jest-canvas-mock");

window.scrollTo = jest.fn();
global.matchMedia =
    global.matchMedia ||
    function () {
        return {
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    };
// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
