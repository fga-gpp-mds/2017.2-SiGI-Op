module.exports = {
     /*
  'Login' : function (browser) {
    browser
      .url('localhost:8080')
      .waitForElementVisible('input[name=user-login]', 100000)
      .setValue('input[name=user-login]', 'admin')
      .setValue('input[name=user-password]', 'abc123456')
      .assert.elementPresent('button[name=logout-button]')
      .click('button[name=logout-button]')
      .pause(1000)
      .end();
}, */
  'Create IPA' : function (browser) {
    browser

     // .url('localhost:8000/ipa-types/')
     // .setValue('input[name=description]', 'TestType')
     // .click('#post-object-form > form > fieldset > div.form-actions > button')

     .url('localhost:8080')
     .waitForElementVisible('input[name=user-login]', 100000)
     .setValue('input[name=user-login]', 'user')
     .setValue('input[name=user-password]', 'abc123456')
     .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
     .waitForElementVisible('button[name=logout-button]')

     .url('localhost:8080/ipas')
     .waitForElementVisible('#content > div.segment > div > div > button > div', 1000)
     .click('#content > div.segment > div > div > button > div')

     .setValue('input[name="Nome"]', 'NightwatchTestIpa')
	 .click('.input-group__selections')
	 .pause(1000)
	 .click('div.menu__content:nth-child(12) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
     .setValue('input[name="CNPJ"]', '123')
     .setValue('input[name="Sigla"]', 'NTI')
	 .click('button[name=register-modal]')
	 .pause(1000)
	 .assert.elementPresent('td.text-xs-right:nth-child(1) > p:nth-child(1)')
     .end();
},
  'Create Site' : function (browser) {
    browser
     // .url('localhost:8000/sitetypes/')
     // .setValue('input[name=description]', 'TestType')
     // .click('#post-object-form > form > fieldset > div.form-actions > button')

     .url('localhost:8080')
     .waitForElementVisible('input[name=user-login]', 100000)
     .setValue('input[name=user-login]', 'user')
     .setValue('input[name=user-password]', 'abc123456')
     .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
     .waitForElementVisible('button[name=logout-button]')

     .url('localhost:8080/sites')
     .waitForElementVisible('button[name=register]', 5000)
     .click('button[name=register]')


     .setValue('input[name="Nome"]', 'SiteTest')
     .setValue('input[name="Latitude"]', '123')
     .setValue('input[name="Longitude"]', '123')
	 .setValue('input[name="Largura de Banda"]', '123')
	 .click('div.layout:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
	 .pause(1000)
	 .click('div.menu__content:nth-child(5) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
	 .click('div.layout:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
	 .pause(1000)
	 .click('#app > div:nth-child(3) > div > ul > li > div')
	 .pause(1000)
	 .click('button[name=done]')
	 .pause(1000)
	 .assert.elementPresent('td.text-xs-right:nth-child(1) > p:nth-child(1)')
     .end();
},
'Create Contact' : function (browser) {
 browser
   // .url('localhost:8000/contacttypes/')
   // .setValue('input[name=description]', 'TestType')
   // .click('#post-object-form > form > fieldset > div.form-actions > button')

    .url('localhost:8080')
    .waitForElementVisible('input[name=user-login]', 2000)
    .setValue('input[name=user-login]', 'user')
    .setValue('input[name=user-password]', 'abc123456')
    .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
    .waitForElementVisible('button[name=logout-button]')
 
    .url('localhost:8080/contacts')
    .waitForElementVisible('button[name=register]', 5000)
    .click('button[name=register]')

	.setValue('input[name="Nome"]', 'ContactTest')
    .setValue('input[name="Número de Telefone"]', '12345678')
    .setValue('input[name="Email"]', 'email@email.com')
	.setValue('input[name="Prioridade"]', '1')
	.click('div.layout:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
	.pause(1000)
	.click('div.menu__content:nth-child(5) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1)')
	.click('div.layout:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
	.pause(1000)
	.click('div.menu__content:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1)')
	.click('button[name=done]')
	.pause(1000)
	.assert.elementPresent('td.text-xs-right:nth-child(1) > p:nth-child(1)')
	.end()
},
'Create Techinical Reserve' : function (browser) {
 browser
   // .url('localhost:8000/contacttypes/')
   // .setValue('input[name=description]', 'TestType')
   // .click('#post-object-form > form > fieldset > div.form-actions > button')

    .url('localhost:8080')
    .waitForElementVisible('input[name=user-login]', 2000)
    .setValue('input[name=user-login]', 'user')
    .setValue('input[name=user-password]', 'abc123456')
    .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
    .waitForElementVisible('button[name=logout-button]')
 
    .url('localhost:8080/technical_reserves')
    .waitForElementVisible('button[name=register]', 5000)
    .click('button[name=register]')

	.setValue('input[name="Código"]', '123')
    .setValue('input[name="Comprimento"]', '123')
    .setValue('input[name="Latitude"]', '123')
	.setValue('input[name="Longitude"]', '123')
	.click('button[name=done]')
	.pause(1000)
	.assert.elementPresent('td.text-xs-right:nth-child(1) > p:nth-child(1)')
	.end()
   },
'Create Techinical Reserve' : function (browser) {
 browser
   // .url('localhost:8000/contacttypes/')
   // .setValue('input[name=description]', 'TestType')
   // .click('#post-object-form > form > fieldset > div.form-actions > button')

    .url('localhost:8080')
    .waitForElementVisible('input[name=user-login]', 2000)
    .setValue('input[name=user-login]', 'user')
    .setValue('input[name=user-password]', 'abc123456')
    .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
    .waitForElementVisible('button[name=logout-button]')
 
    .url('localhost:8080/Uplink')
    .waitForElementVisible('button[name=register]', 5000)
    .click('button[name=register]')

	.setValue('input[name="Nome VLan"]', 'nome')
    .setValue('input[name="Banda"]', '123')
    .setValue('input[name="Código"]', '123')
	.click('button[name=done]')
	.pause(1000)
	.assert.elementPresent('td.text-xs-right:nth-child(1) > p:nth-child(1)')
	.end()
   },

   /*'Create DGO' : function (browser) {
    browser

      .url('localhost:8080')
      .waitForElementVisible('input[name=user-login]', 2000)
      .setValue('input[name=user-login]', 'user')
      .setValue('input[name=user-password]', 'abc123456')
      .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
      .waitForElementVisible('button[name=logout-button]')

      .url('localhost:8080/dgos')
      .waitForElementVisible('button[name=register]', 5000)
      .click('button[name=register]')

      .waitForElementVisible('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="number"]', 1000)
      .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="number"]', 42)
      .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(3) > div > div > div.input-group__input > input[type="text"]', 'Douglas A. Company')
      .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(4) > div > div > div.input-group__input > input[type="number"]', 12)
      // site fk
      .end();
},*/
/*'Create Uplink' : function (browser) {
 browser

   .url('localhost:8080')
   .waitForElementVisible('input[name=user-login]', 2000)
   .setValue('input[name=user-login]', 'user')
   .setValue('input[name=user-password]', 'abc123456')
   .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
   .waitForElementVisible('button[name=logout-button]')

   .url('localhost:8080/uplink')
   .waitForElementVisible('button[name=register]', 5000)
   .click('button[name=register]')

   .waitForElementVisible('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="text"]', 1000)
   .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="text"]', "NightwatchTestUplink")
   .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(3) > div > div > div.input-group__input > input[type="number"]', 42)
   .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(4) > div > div > div.input-group__input > input[type="number"]', 12)
   .end();
},*/
/*'Create Segment' : function (browser) {
 browser

   .url('localhost:8080')
   .waitForElementVisible('input[name=user-login]', 2000)
   .setValue('input[name=user-login]', 'user')
   .setValue('input[name=user-password]', 'abc123456')
   .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
   .waitForElementVisible('button[name=logout-button]')

   .url('localhost:8080/segments')
   .waitForElementVisible('button[name=register]', 5000)
   .click('button[name=register]')

   .waitForElementVisible('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="number"]', 1000)
   .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="number"]', 42)
   .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(3) > div > div > div.input-group__input > input[type="number"]', 42)
   // .setValue('slider[name=Cable Stretch Quantity]', 12) // Acho que é impossível testar slider
   // Um monte de FK
   .end();
},*/
  /*'Create DGO' : function (browser) {
       browser
       .url('localhost:8080')
       .waitForElementVisible('input[name=user-login]', 2000)
       .setValue('input[name=user-login]', 'user')
       .setValue('input[name=user-password]', 'abc123456')
       .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
       .waitForElementVisible('button[name=logout-button]')

       .url('localhost:8080/dgos')
       .waitForElementVisible('button[name=register]', 5000)
      .click('button[name=register]')

       .waitForElementVisible('input[name=code]', 2000)
 },*/
  /*'Create DGO Fabricant' : function (browser) {
       browser
       .url('localhost:8080')
       .waitForElementVisible('input[name=user-login]', 2000)
       .setValue('input[name=user-login]', 'user')
       .setValue('input[name=user-password]', 'abc123456')
       .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
       .waitForElementVisible('button[name=logout-button]')

       .url('localhost:8080/god_fabricants')
       .waitForElementVisible('button[name=register]', 3000)
       .click('button[name=register]')

       .waitForElementVisible('input[name=description]', 1000)
       .setValue('input[name=description]', 'NightwatchTestFabricant')
       .click('button[name=done]')
       .waitForElementVisible('#god_fabricant > div.table > div.table__overflow.elevation-1 > table > tbody > tr > td:nth-child(2) > p')
       .end();
 },*/
 /*'Create DGO Fabricant' : function (browser) {
      browser
      .url('localhost:8080')
      .waitForElementVisible('input[name=user-login]', 2000)
      .setValue('input[name=user-login]', 'user')
      .setValue('input[name=user-password]', 'abc123456')
      .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
      .waitForElementVisible('button[name=logout-button]')

      .url('localhost:8080/god_fabricant_models')
      .waitForElementVisible('button[name=register]', 3000)
      .click('button[name=register]')

     //  .waitForElementVisible('#app > div:nth-child(1) > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group.input-group--focused.input-group--append-icon.input-group--text-field.input-group--select > div.input-group__input > div.input-group__selections', 1000)
     //  .click('#app > div:nth-child(1) > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group.input-group--focused.input-group--append-icon.input-group--text-field.input-group--select > div.input-group__input > div.input-group__selections')
     //  .waitForElementVisible('#app > div.menu__content.menu__content--select > div > ul > li > div > div > div')
     //  .click('#app > div.menu__content.menu__content--select > div > ul > li > div > div > div')
      .setValue('input[name=name]', 'NightwatchTestModel')
      .setValue('input[name=port_quantity]', '42')
      .end();
},*/
  /*'Create EmendationBox' : function (browser) {
       browser
      .url('localhost:8080')
      .waitForElementVisible('input[name=user-login]', 2000)
      .setValue('input[name=user-login]', 'user')
      .setValue('input[name=user-password]', 'abc123456')
      .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
      .waitForElementVisible('button[name=logout-button]')

      .url('localhost:8080/emendation_boxes')
      .waitForElementVisible('button[name=register]', 3000)
      .click('button[name=register]')

      .waitForElementVisible('input[name=designNumber]', 1000)
      .setValue('input[name=designNumber]', '123')
      .setValue('input[name=lattitude]', '123')
      .setValue('input[name=longitude]', '123')
      .click('#app > div:nth-child(1) > div > div > div.card__text > div > form > div:nth-child(5) > div > div.input-group.checkbox.input-group--selection-controls > div.input-group__input > div')
      // fks
},*/
  /*'Create Generator' : function (browser) {
     browser
   .url('localhost:8080')
   .waitForElementVisible('input[name=user-login]', 2000)
   .setValue('input[name=user-login]', 'user')
   .setValue('input[name=user-password]', 'abc123456')
   .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
   .waitForElementVisible('button[name=logout-button]')

   .url('localhost:8080/generators')
   .waitForElementVisible('button[name=register]', 3000)
   .click('button[name=register]')

   .waitForElementVisible('input[name=power]', 1000)
   .setValue('input[name=power]', '123')
   .setValue('input[name=manufacturer]', 'NightwatchTest')
   .setValue('input[name=patrimony]', 'TestCase')
   // fks
   .end();
},*/
  /*'Create Jumper' : function (browser) {
        browser
     .url('localhost:8080')
     .waitForElementVisible('input[name=user-login]', 2000)
     .setValue('input[name=user-login]', 'user')
     .setValue('input[name=user-password]', 'abc123456')
     .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
     .waitForElementVisible('button[name=logout-button]')

     .url('localhost:8080/jumpers')
     .waitForElementVisible('button[name=register]', 3000)
     .click('button[name=register]')

     // fks
     .end();
},*/
  /*'Register TechnicalReserve' : function (browser) {
     browser
     .url('localhost:8080')
     .waitForElementVisible('input[name=user-login]', 100000)
     .setValue('input[name=user-login]', 'user')
     .setValue('input[name=user-password]', 'abc123456')
     .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
     .waitForElementVisible('button[name=logout-button]')

     .url('localhost:8080/technical_reserves')
     .waitForElementVisible('button[name=register]', 1000)
     .click('button[name=register]')
     .waitForElementVisible('#app > div:nth-child(3) > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="number"]', 500)
     .setValue('#app > div:nth-child(3) > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="number"]', '42')
     .setValue('#app > div:nth-child(3) > div > div > div.card__text > div > form > div:nth-child(3) > div > div > div.input-group__input > input[type="number"]', '99')
     .setValue('#app > div:nth-child(3) > div > div > div.card__text > div > form > div:nth-child(4) > div > div > div.input-group__input > input[type="number"]', '-15.7801')
     .setValue('#app > div:nth-child(3) > div > div > div.card__text > div > form > div:nth-child(5) > div > div > div.input-group__input > input[type="number"]', '-47.9292')
     .click('#app > div.dialog__content > div > div > div.card__actions > button:nth-child(3) > div')
},*/
/*'Create Posts' : function (browser) {
        browser
     .url('localhost:8080')
     .waitForElementVisible('input[name=user-login]', 2000)
     .setValue('input[name=user-login]', 'user')
     .setValue('input[name=user-password]', 'abc123456')
     .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
     .waitForElementVisible('button[name=logout-button]')

     .url('localhost:8080/posts')
     .waitForElementVisible('button[name=register]', 3000)
     .click('button[name=register]')

     .waitForElementVisible('input[name=cable_length]', 1000)
     .setValue('input[name=cable_length]', '42')
     // fks
     .end();
},*/
  /*'Create Nobreak' : function (browser) {
        browser
     .url('localhost:8080')
     .waitForElementVisible('input[name=user-login]', 2000)
     .setValue('input[name=user-login]', 'user')
     .setValue('input[name=user-password]', 'abc123456')
     .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
     .waitForElementVisible('button[name=logout-button]')

     .url('localhost:8080/NoBreaks')
     .waitForElementVisible('button[name=register]', 3000)
     .click('button[name=register]')

     .waitForElementVisible('input[name=power]', 1000)
     .setValue('input[name=power]', '123')
     .setValue('input[name=proprietary]', 'NightwatchTest')
     .setValue('input[name=patrimony_number]', 'TestCase')
     // fks
     .end();
},*/
  /*'Create Access Cable' : function (browser) {
        browser
     .url('localhost:8080')
     .waitForElementVisible('input[name=user-login]', 2000)
     .setValue('input[name=user-login]', 'user')
     .setValue('input[name=user-password]', 'abc123456')
     .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
     .waitForElementVisible('button[name=logout-button]')

     .url('localhost:8080/access_cables')
     .waitForElementVisible('button[name=register]', 3000)
     .click('button[name=register]')

     .waitForElementVisible('input[name=cod]', 1000)
     .setValue('input[name=cod]', '123')
     .setValue('input[name=length]', '42')
     .setValue('input[name=fiber_quantity]', '99')
     // fks
     .end();
},*/
  /*'Create Cable Stretch' : function (browser) {
        browser
     .url('localhost:8080')
     .waitForElementVisible('input[name=user-login]', 2000)
     .setValue('input[name=user-login]', 'user')
     .setValue('input[name=user-password]', 'abc123456')
     .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
     .waitForElementVisible('button[name=logout-button]')

     .url('localhost:8080/cable_stretch')
     .waitForElementVisible('button[name=register]', 3000)
     .click('button[name=register]')

     .waitForElementVisible('input[name=cod]', 1000)
     .setValue('input[name=cod]', '123')
     .setValue('input[name=length]', '42')
     .setValue('input[name=manufacturing_year]', '2020')
     .setValue('input[name=infrastructure]', 'NightwatchInfra')
     .setValue('input[name=owner]', 'PO')
     .setValue('input[name=fabricant]', 'Someone')
     // fks
     .end();
},*/

  /*'Register User' : function (browser) {
       browser
       .url('localhost:8080')
       .waitForElementVisible('input[name=user-login]', 2000)
       .setValue('input[name=user-login]', 'admin')
       .setValue('input[name=user-password]', 'abc123456')
       .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
       .waitForElementVisible('button[name=logout-button]')

       .url('localhost:8080/register')
       .waitForElementVisible('#register > div.container > div > div > div > div > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="text"]')
       .setValue('#register > div.container > div > div > div > div > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="text"]', 'user42')
       .setValue('#register > div.container > div > div > div > div > div > form > div:nth-child(3) > div > div > div.input-group__input > input[type="password"]', 'aabbcc42')
       .setValue('#register > div.container > div > div > div > div > div > form > div:nth-child(4) > div > div > div.input-group__input > input[type="password"]', 'aabbcc43')
       .waitForElementVisible('#register > div.container > div > div > div > div > div > form > div:nth-child(4) > div > div > div.input-group__details > div > div', 1000)
       .clearValue('#register > div.container > div > div > div > div > div > form > div:nth-child(4) > div > div > div.input-group__input > input[type="password"]')
       .setValue('#register > div.container > div > div > div > div > div > form > div:nth-child(4) > div > div > div.input-group__input > input[type="password"]', 'aabbcc42')
       .setValue('#register > div.container > div > div > div > div > div > form > div:nth-child(5) > div > div > div.input-group__input > input[type="text"]', 'user42@mail.com')
       .click('#register > div.container > div > div > div > div > div > form > div:nth-child(6) > div > button > div')
       .end();
 },*/
 /*'Register Group': function (browser) {
       browser
       .url('localhost:8080')
       .waitForElementVisible('input[name=user-login]', 100000)
       .setValue('input[name=user-login]', 'admin')
       .setValue('input[name=user-password]', 'abc123456')
       .click('#login > div > div > div > div > div > div > form > div:nth-child(5) > div > center > button')
       .waitForElementVisible('button[name=logout-button]')

       .url('localhost:8080/groups')
       .waitForElementVisible('button[name=register]', 1000)
       .click('button[name=register]')
       .waitForElementVisible('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="text"]', 1000)
       .setValue('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(2) > div > div > div.input-group__input > input[type="text"]', 'NightwatchTestGroup')
       .click('#app > div.dialog__content > div > div > div.card__text > div > form > div:nth-child(3) > div > div > div.input-group__input > div.input-group__selections')
       .waitForElementVisible('#app > div.menu__content.menu__content--select > div > ul > li:nth-child(1) > div > div.list__tile__content > div', 500)
       .click('#app > div.menu__content.menu__content--select > div > ul > li:nth-child(1) > div > div.list__tile__action.list__tile__action--select-multi > div > div.input-group__input > i')
       .click('#app > div.menu__content.menu__content--select > div > ul > li:nth-child(2) > div > div.list__tile__action.list__tile__action--select-multi > div > div.input-group__input > i')
       .click('button[name=done]')
       .end();
 }*/
}