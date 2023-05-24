window.matchMedia = function(query: string) {
    const v = parseInt(query.replace(/[^\d]/g, ''));
    return {
        matches: window.innerWidth >= v,
        media: query,
        onchange: jest.fn(),
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }
}

window.resizeTo = function (width, height) {
    this.innerWidth = this.outerWidth = width;
    this.innerHeight = this.outerHeight = height;
};