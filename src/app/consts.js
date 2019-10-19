/**
 * static only
 */

// mao backend api url
// export const BACKEND_URL = 'http://dgc:9453'; //'https://112.121.105.210';//'http://testgrid.digicentre.com';//'https://mao.digicentre.com'; // 'http://192.168.73.132'; //
export const BACKEND_URL = 'http://bobo:9453';
export const DOWNLOADFILE = BACKEND_URL + '/downloadfile';

// login config
export const CLIENT_ID = 2;
// export const CLIENT_SECRET = "ZCHfqThVOtoGbDiJcKcZKK6xoPOEWnTQQLtgdagO"; //'fzZPFIKiIWJj2tut5idDb3ebruLSato6qNulo5Qm';
export const CLIENT_SECRET = "3GcRkiAYJN4kCtAJrS6LrpFAmG1NKZdAsh2jNsjr";    // bobo:9453

// log preference
export const FILE_TYPE = {
    fuzzy: 'fuzzy_log',
    uiautomator: 'uiautomator',
    logcat: 'logcat',
};
export const ALL_FILE_TYPE = ['fuzzy_log', 'uiautomator', 'logcat'];
export const SEVERITY = {
    information: 'information',
    warning: 'warning',
    error: 'error',
    critical: 'critical',
};
export const ALL_SEVERITY = ['information', 'warning', 'error', 'critical'];