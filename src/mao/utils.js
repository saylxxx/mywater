import i18n from 'i18next';
import swal from 'sweetalert2';

/** alert */
export const alert_success = data => {
    return swal({
        title: data && data.title ? data.title : i18n.t('SUCCESS'),
        html: data && data.msg ? data.msg : '',
        type: "success",
        heightAuto: false
    }).then(
        res => {
            return Promise.resolve(res)
        }) //end then
}
export const alert_error = data => {
    return swal({
        title: data && data.title ? data.title : i18n.t('ERROR'),
        html: data && data.msg ? data.msg : '',
        type: "error",
        heightAuto: false
    }).then(
        res => {
            return Promise.resolve(res)
        }) //end then
}
export const alert_question = data => {
    swal({
        title: data && data.title ? data.title : i18n.t('CONFIRM_DIALOG'),
        html: data && data.msg ? data.msg : i18n.t('RECOVER_IMPOSSIBLE'),
        type: "question",
        showCancelButton: true
    }).then(
        function (result) {
            if (result.value) {
                if (data.success_handler !== undefined)
                    data.success_handler();
            } else if (result.dismiss === "cancel") {
                if (data.cancel_handler !== undefined)
                    data.cancel_handler();
            } //end else  
        }) //end then
}

// @see https://www.npmjs.com/package/string-similarity
export const ssimilarity = require('string-similarity');

// client side devices ssimilarity
export const ssimilarity_devices_handler = function (row, query) {
    return ssimilarity_common_handler(row, query, {
        try_numeric_fields: ['android_ver'],
        try_string_fields: ['brand', 'model', 'model_name', 'storage_name', 'screen_size'],
        LOG_KEY: '[ss devices]',
        show_log: true
    });
}

// client side apk reports ssimilarity
export const ssimilarity_device_lv1_handler = function (row, query) {
    return ssimilarity_common_handler(row, query, {
        try_numeric_fields: ['android_ver', 'aspect_w', 'aspect_h'],
        try_string_fields: ['brand_name', 'model_name'],
        LOG_KEY: '[ss device 1v1]',
        show_log: true
    });
}

// client side apk reports ssimilarity
export const ssimilarity_device_lv2_handler = function (row, query) {
    return ssimilarity_common_handler(row, query, {
        try_numeric_fields: ['android_ver', 'aspect_w', 'aspect_h'],
        try_string_fields: ['brand', 'model'],
        LOG_KEY: '[ss device lv2]',
        show_log: true
    });
}

// client side apk reports ssimilarity
export const ssimilarity_apk_reports_handler = function (row, query) {
    return ssimilarity_common_handler(row, query, {
        try_numeric_fields: ['android_ver', 'duration_in_seconds', 'install_time'],
        try_string_fields: ['brand', 'model'],
        LOG_KEY: '[ss apk_reports]',
        show_log: true
    });
}

// ssimilarity common handler
// @see https://github.com/KarateJB/eBooks/tree/master/Vue.js/24.%20vue-tables-2%20(5)
export const ssimilarity_common_handler = function (row, query, config) {
    let try_numeric_fields = config.try_numeric_fields;
    let try_string_fields = config.try_string_fields;
    let LOG_KEY = config.LOG_KEY;
    let show_log = config.show_log;
    let keyword = query.toLowerCase();

    // try numeric
    if (!isNaN(keyword)) {
        for (let i = 0; i < try_numeric_fields.length; i++) {
            if (parseInt(row[try_numeric_fields[i]], 10) == parseInt(keyword, 10)) {
                if (show_log)
                    console.log(LOG_KEY + '..numeric..matched..', try_numeric_fields[i], '|', keyword, '|', row);
                return true;
            }
        }
    }

    // try similar numberic
    for (let i = 0; i < try_numeric_fields.length; i++) {
        if (row[try_numeric_fields[i]] == keyword) {
            if (show_log)
                console.log(LOG_KEY + '..similar numeric..matched..', try_numeric_fields[i], '|', keyword, '|', row);
            return true;
        }
    }

    // prepare words
    let try_words = [];
    for (let i = 0; i < try_string_fields.length; i++) {
        if (row[try_string_fields[i]] !== undefined)
            try_words.push(row[try_string_fields[i]].toLowerCase());
    }

    // try substring
    if (try_words.filter(data => {
            return data.indexOf(keyword) >= 0
        }).length > 0) {
        if (show_log)
            console.log(LOG_KEY + '..substring..matched..', '|', keyword, '|', row);
        return true;
    }

    // try fuzy
    let matches = ssimilarity.findBestMatch(keyword, try_words);

    // log something
    // if (matches.bestMatch.rating >= 0.1) {
    //     if (show_log)
    //         console.log(LOG_KEY +
    //             "..callback..search_report..",
    //             "keyword: ",
    //             keyword,
    //             ", try_words: ",
    //             try_words,
    //             ", rating: ",
    //             matches.bestMatch.rating,
    //             ", best: ",
    //             matches.bestMatch
    //         );
    // }

    // fuzy threshold pass
    if (matches.bestMatch.rating >= 0.3) {
        if (show_log)
            console.log(LOG_KEY + '..fuzy..matched..', '|', keyword, '|', row);
        return true;
    }

    // not found
    return false;
}