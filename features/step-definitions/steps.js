const {Given, When, Then} = require('@cucumber/cucumber')

Given('that the visitor has accessed the Redsauce page', async function () {
    await browser.url('');
    await expect(browser).toHaveUrl('https://redsauce.net/es')
});
When('the visitor accesses the section {string}', async function (string) {
    await browser.url(string);
    await expect(browser).toHaveUrl('https://redsauce.net/es/nosotros')
});
Then('the page shows {int} profiles', async function (int) {
    const text = await $('/html/body/section[3]/div');
    const prueba = await text.$$('[class="col-xs-12 col-sm-6 col-md-3"]')
    await expect(prueba.length).toEqual(int);
});


