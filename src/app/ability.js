import {
    AbilityBuilder,
} from '@casl/ability'

export default AbilityBuilder.define(can => {
    let data = JSON.parse(localStorage.getItem('abilities'));
    if (data) {
        Object.keys(data)
            .reduce(function (r, k) {
                return r.concat(k).concat(data[k]); // key & value
            }, [])
            .forEach(key => {
                can([key], 'all');
                console.log('@casl/ability can: ' + key);
            });
    }
});

// export const my_abilities = () => {
//     const {
//         rules,
//         can,
//     } = AbilityBuilder.extract()

//     let data = JSON.parse(localStorage.getItem('abilities'));
//     if (data) {
//         Object.keys(data)
//             .reduce(function (r, k) {
//                 return r.concat(k).concat(data[k]); // key & value
//             }, [])
//             .forEach(key => {
//                 can([key], 'all');
//                 console.log('@casl/ability can: ' + key);
//             });
//     }

//     return new Ability(rules)
// }

// export default my_abilities();