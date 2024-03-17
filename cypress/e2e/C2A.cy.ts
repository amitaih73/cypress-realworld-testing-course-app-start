describe("User Jouney", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com")
      })

    it("user journey for product store", () => {
        cy.location("pathname").should("eq",
        "/")
        cy.getByTarget("#logInModal").contains("Log in").click()

        const userName = "automatedUser26@example.com";
        const userPassWord = "4r4nd0mp4ssw0rd";

        //define a function to type user name and make sure that it is inserted corectly
        const typeUsername = () => {
            cy.get('#loginusername').clear().type(userName);
            cy.get('#loginusername').should('have.value', userName);
        };
        //define a function to type user password and make sure that it is inserted corectly
        const typePassWord = () => {
            cy.get('#loginpassword').clear().type(userPassWord);
            cy.get('#loginpassword').should('have.value', userPassWord);
        };
        typeUsername();
        typePassWord();
        cy.get("#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click()
        //chose  cheepest phone
        cy.getByOnClick("byCat('phone')").click()

        const selectCheapestProduct = () => {
            let cheapestPrice = Infinity;
            let cheapestProductName = '';
            cy.get('.card').each(($product) => {
                const productName =  $product.find('.card-title .hrefch').text();
                const productPrice = parseFloat($product.find('.card-block > h5').text().replace('$', ''));
                if (productPrice < cheapestPrice) {
                    cheapestPrice = productPrice;
                    cheapestProductName = productName;
                }
            }).then(() => {
                cy.contains('.card-title', cheapestProductName).click();
            });    
        };
        
        selectCheapestProduct();
         //add it to cart
        const GoTohomePage = () => {
            cy.get(".active > .nav-link").click()
        }
        cy.get(".col-sm-12 > .btn").click()
        // go back to home page
        GoTohomePage();
        //chose  exspensive laptop
        cy.getByOnClick("byCat('notebook')").click()
        const selectExpensivProduct = () => {
            let exspensivePrice = Number.NEGATIVE_INFINITY;;
            let cheapestProductName = '';
            cy.get('.card').each(($product) => {
                const productName =  $product.find('.card-title .hrefch').text();
                const productPrice = parseFloat($product.find('.card-block > h5').text().replace('$', ''));
                if (productPrice > exspensivePrice) {
                    exspensivePrice = productPrice;
                    cheapestProductName = productName;
                }
            }).then(() => {
                cy.contains('.card-title', cheapestProductName).click();
            });    
        };
        selectExpensivProduct();
        //add it to cart
        cy.get(".col-sm-12 > .btn").click()
        // go back to home page
        GoTohomePage();

        //chose   monitor
        cy.getByOnClick("byCat('monitor')").click()
        cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch").click()
        //add it to cart and go to home page
        cy.get(".col-sm-12 > .btn").click()
        // go back to home page
        GoTohomePage();
        // opening cart
        cy.get(":nth-child(4) > .nav-link").click()
        // delete phone product
        cy.get(":nth-child(2) > :nth-child(4) > a").click()
        //verfy it deleted corect
        cy.get("#tbodyid > :nth-child(1) > :nth-child(2)").should("not.exist")
        //place order
        cy.get(".col-lg-1 > .btn").click()
        const name = "ami";
        const country = "israel";
        const city = "jeru";
        const card = "123456";
        const month = "09";
        const year = "2026";

        //define a functio to fil in the deatails for the order
        const typeDeatails = () => {
            cy.get("#name").clear().type(name).should('have.value', name);
            cy.get("#country").clear().type(country).should('have.value', country);
            cy.get("#city").clear().type(city).should('have.value', city);
            cy.get("#card").clear().type(card).should('have.value', card);
            cy.get("#month").clear().type(month).should('have.value', month);
            cy.get("#year").clear().type(year).should('have.value', year);
        };

        //fil in  order details and verifing the data
        typeDeatails();
        //Purchase the order
        cy.getByOnClick("purchaseOrder()").click()
    })  
})