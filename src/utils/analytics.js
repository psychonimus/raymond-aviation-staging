export const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", eventName, parameters);
    }
};