// describe('Shop CTA button', function () {
//     it('should link to the product page', function (){
//     return browser
//          .get('./')
//          .getTitle().then(function(title) {
//              console.log('Title is:' , + title);
//      })
//          .click('.sho-callout a')
//          .getTitle().then(function(title){
//              console.log('Title is: ' + title);
//      })
//          .getUrl().then(function(url) {
//              console.log('Url is: ' + url);
//         });
//
//     })
// })

describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('./')

        var title = browser.getTitle()
        console.log('Title is:' , + title);

        // browser.click('.shop-callout a');
        // var productTitle = browser.getTitle()
        // console.log('Title is: ' + productTitle);

        var url = browser.getUrl()
        console.log('Url is: ' + url);


        // $('#search_form_input_homepage').setValue('WebdriverIO')
        // $('#search_button_homepage').click()
        //
        // const title = browser.getTitle()
        // console.log('Title is: ' + title)
        // // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
})





// const { remote } = require('webdriverio');
//
// (async () => {
//     const browser = await remote({
//         logLevel: 'trace',
//         capabilities: {
//             browserName: 'chrome'
//         }
//     })
//
//     await browser.url('./')
//         .getTitle().then(function(title) {
//         console.log('title is: ' + title);
//
//     })
//
//     await submitBtn.click()
//
//     console.log(await browser.getTitle()) // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
//
//     await browser.deleteSession()
// })().catch((e) => console.error(e))