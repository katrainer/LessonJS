console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// console.log('start')
// let prom = new Promise((resolve, reject) => {
//     console.log('Promise start')
//         let a = 10;
//         let b = 100;
//         let c = a - b;
//     console.log('Promise end')
// })
// console.log('end')

// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     setTimeout((res) => { // mock request
//         if (res.statusCode >= 200 && res.statusCode < 400) {
//             resolve(res.data);
//             console.log(prom);
//         } else {
//
//         }
//     }, 1000, { data : { id: 'sdjfbjdfbeu', name: 'Evgen'}, message: '', statusCode: 200});
// })
// console.log(prom)

// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     setTimeout((res) => { // mock request
//         if (res.statusCode >= 200 && res.statusCode < 400) {
//
//         } else {
//             reject(res.message);
//         }
//     }, 1000, { data : '', message: 'Unauthorized', statusCode: 401});
// })
// console.log(prom)



// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     console.log('Promise start')
//     setTimeout((res) => { // mock request
//         console.log('setTimeout start')
//         if (res.statusCode >= 200 && res.statusCode < 400) {
//             resolve(res.data);
//         } else {
//         }
//         console.log('setTimeout end')
//     }, 1000, { data : { id: 'sdjfbjdfbeu', name: 'Evgen'}, message: '', statusCode: 200});
//     console.log('Promise end')
// })
//
// prom
//     .then( res => {
//         console.log('res ', res);
//         //return 100;
//     })
//     .then(res2 => {
//         console.log('res2 ', res2);
//     })


// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     console.log('Promise start')
//     setTimeout((res) => { // mock request
//         console.log('setTimeout start')
//         if (res.statusCode >= 200 && res.statusCode < 400) {
//             resolve(res.data);
//         } else {
//         }
//         console.log('setTimeout end')
//     }, 500, { data : { id: 'sdjfbjdfbeu', name: 'Evgen'}, message: '', statusCode: 200});
//     console.log('Promise end')
// })
//
// prom
//     .then( res => {
//         console.log('res ', res);
//         return new Promise( (res, rej) => {
//             setTimeout((response) => { // mock request
//                 if (response.statusCode >= 200 && response.statusCode < 400) {
//                     res(response.data);
//                 }
//             }, 1000, { data : { email: 'test@test.com' }, message: '', statusCode: 200});
//         });
//     })
//     .then( (res2: any) => {
//         console.log('res2 ', res2.email);
//     })
//     .then( res3 => {
//         console.log('res3 ', res3);
//     })


// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     setTimeout((res) => { // mock request
//         if (res.statusCode >= 200 && res.statusCode < 400) {
//
//         } else {
//             reject(res.message);
//         }
//     }, 1000, {data: '', message: 'Unauthorized', statusCode: 401});
// })
//
// prom
//     .then(
//         res => {
//             console.log('res ', res);
//         },
//         err => {
//             console.log('err ', err);
//             throw 'some Error';
//         }
//     )
//     .then(
//         res2 => {
//             console.log('res2 ', res2);
//         },
//         err2 => {
//             console.log('err2 ', err2);
//         }
//     )


// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     setTimeout((res) => { // mock request
//         if (res.statusCode >= 200 && res.statusCode < 400) {
//             resolve(res.data);
//         } else {
//         }
//     }, 500, {data: {id: 'sdjfbjdfbeu', name: 'Evgen'}, message: '', statusCode: 200});
// })
//
// prom
//     .catch(err => {
//         console.log('err ', err);
//     })
//     .then(
//         res => {
//             console.log('res ', res);
//             throw 'Error'
//         }
//     )
//     .catch(err2 => {
//         console.log('err2 ', err2);
//         //throw 100500;
//     })
//     .then(
//         res2 => {
//             console.log('res2 ', res2);
//         },
//         // err2 => {
//         //     console.log('err2 ', err2);
//         // }
//     )
//     // .then(
//     //     null,
//     //     err3 => {
//     //         console.log('err3 ', err3);
//     //     }
//     // )
//     .catch(err3 => {
//         console.log('err3 ', err3);
//     })



// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     setTimeout((res) => { // mock request
//         if (res.statusCode >= 200 && res.statusCode < 400) {
//             resolve(res.data);
//         } else {
//         }
//     }, 500, {data: {id: 'sdjfbjdfbeu', name: 'Evgen'}, message: '', statusCode: 200});
// })
//
// prom
//     .finally(() => {
//         console.log('finally1');
//         throw 'Error in Finally'
//     })
//     .then(
//         res => {
//             console.log('res ', res);
//             throw 'Error'
//         }
//     )
//     .finally(() => {
//         console.log('finally2');
//     })
//     .then(
//         res2 => {
//             console.log('res2 ', res2);
//         }
//     )
//     .finally(() => {
//         console.log('finally3');
//     })
//     .then(
//         res3 => {
//             console.log('res3 ', res3);
//         }
//     )
//     .finally(() => {
//         console.log('finally4');
//     })
//     .catch(err3 => {
//         console.log('err3 ', err3);
//     })
//     .finally(() => {
//         console.log('finally5');
//     })





let prom = new Promise((resolve, reject) => {
    let a = 10;
    setTimeout((res) => { // mock request
        if (res.statusCode >= 200 && res.statusCode < 400) {
            resolve(res.data);
        } else {
        }
    }, 500, {data: {id: 'sdjfbjdfbeu', name: 'Evgen'}, message: '', statusCode: 200});
})

prom
    .then(
        res => {
            console.log('res ', res);
        }
    )
    .then(
        res2 => {
            console.log('res2 ', res2);
        }
    )

    .then(
        res3 => {
            console.log('res3 ', res3);
        }
    )

    .catch(err3 => {
        console.log('err3 ', err3);
    })




// just a plug
export default () => {
};