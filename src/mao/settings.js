import router from '@/mao/router';

// page
export const routeLogin = () => {
    router.push('/login');
};
export const routeNext = redirect => {
    if (router.query != undefined) {
        router.replace(router.query.redirect || redirect);
    } else {
        router.push(redirect);
    }
};
// page (reports)
export const routeReportApk = id => {
    router.push("/reports/apk/" + id);
};
export const routeReportApkLog = id => {
    router.push("/reports/apklog/" + id);
};

// i18n
// export const changeLanguage = (lang) => {
//     this.$i18n.i18next.changeLanguage(lang);
// }
// export const selectedLanguage = () => {
//     switch(this.$i18n.i18next.language) {
//         case 'en': return 'English';
//         case 'zh-TW': default: return '中文';
//     }
// }

// auth
export const isLogin = () => {
    return localStorage.me != undefined;
};

export const setOauth = oauth => {
    localStorage.setItem('oauth', JSON.stringify({
        data: oauth,
        time_expired: new Date().getTime() + oauth.expires_in * 999
    }));
};

export const isOauthExpired = () => {
    let oauth = JSON.parse(localStorage.getItem('oauth'));
    if (oauth.time_expired !== undefined) {
        console.log('..isOauthExpired..', oauth.time_expired - new Date().getTime());
        return new Date().getTime() > oauth.time_expired;
    }
    return true;
};

export const getOauthRefreshToken = () => {
    let oauth = JSON.parse(localStorage.getItem('oauth'));
    if (oauth.data !== undefined)
        return oauth.data.refresh_token;
    return null;
};

export const setLogin = data => {
    localStorage.setItem('me', JSON.stringify(data.user));
    localStorage.setItem('abilities', JSON.stringify(data.abilities));
    localStorage.setItem('roles', JSON.stringify(data.userRole));
};

export const getLogin = key => {
    return JSON.parse(localStorage.getItem(key || 'me'));
};

export const cleanAll = () => {
    localStorage.removeItem('me');
    localStorage.removeItem('oauth');
    localStorage.removeItem('vuex');
    localStorage.removeItem('abilities');
    localStorage.removeItem('roles');
};