import makeQuery from "../../utils/make_query";

const 
    mobile = 0,
    tablet = 640,
    laptop = 1024,
    desktop = 1200
;

const breakpoints = {
    mobile,
    tablet,
    laptop,
    desktop,
    mobile_query: makeQuery(mobile),
    tablet_query: makeQuery(tablet),
    laptop_query: makeQuery(laptop),
    desktop_query: makeQuery(desktop),
}

export default breakpoints;