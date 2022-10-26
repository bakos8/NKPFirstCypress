describe('NKPFirstTest', () => {
  before('login', () => {

    cy.visit('https://nkp.hu');

    cy.get('#HEADER_LOGIN').should('be.visible').click();

    cy.get(':nth-child(1) > input').type('m95ettszakdolg@gmail.hu');

    cy.get(':nth-child(2) > input').type('szakdolg01');

    cy.get('#btn_submit').click();

    cy.get('.eke-user-menu > .dropdown > .has-submenu > .submenu-title > .top-bar__link > .menu-title')
    .should('have.text', 'Bakos Dominik');
  })

  it('okostankonyv_test', () => {

    cy.get('.eke-header-book-btn > .submenu-title > .top-bar__link > .eke-header-icons').trigger('mouseover');

    cy.contains('Okostankönyvek').click();

    cy.get(':nth-child(8) > a').click();

    cy.get(':nth-child(6) > div > a > .subject-name').click();

    cy.scrollTo(0, 500);

    cy.contains('III. Alkalmazói ismeretek').click();

    cy.get('.next').click();
    cy.get('.next').click();
    cy.get('.next').click();

    cy.scrollTo(0, 700);

    cy.get('[data-exercise-id="26973769501"] > .exe-wrapper > .exe-container > .exe-container-toggletoShown > .exe-modal-parent > .exe-start-mask > div > .exe-start-button').click();

    cy.get(':nth-child(9) > #\\38 _0').type('webfejlesztés');

    cy.get('#\\31 _answerRow > :nth-child(5) > #\\34 _1').type('szövegszerkesztés');

    cy.get('#\\32 _answerRow > :nth-child(7) > #\\36 _2').type('táblázat');

    cy.get(':nth-child(8) > #\\37 _3').type('dokumentum');

    cy.get(':nth-child(6) > #\\35 _4').type('html');

    cy.get(':nth-child(7) > #\\36 _5').type('index');

    cy.get(':nth-child(1) > #\\30 _6').type('hiperhivatkozás');

    cy.get(':nth-child(6) > #\\35 _7').type('honlap');

    cy.get(':nth-child(2) > .exe-controls-button').click();

    cy.contains('A megoldásod tökéletes!');
  })

  it('mediatar_test', () => {

    cy.scrollTo(0, -12000);

    cy.get('.dropdown > :nth-child(3) > .top-bar__link').click();

    cy.get('#downshift-1-input').type('Kis Gömböc');

    cy.get('.button-group > .button').click();

    cy.get('.eke-media-stat').click();
  })
})