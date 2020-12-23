const profilePhoto = 'https://images.prismic.io/harrisgeo%2Fd8abaa2d-b275-4896-a887-bd3263774172_me-snow.jpg?auto=compress,format'

describe('Index page test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:8000')
    
    cy.get('#frame').should('have.css', 'background-color', 'rgb(26, 32, 44)')
    
    // Navbar
    cy.get('header').find('button').should('contain.text', 'Harris Geo')
    cy.get('header').find('button').should('contain.text', 'Blogs')
    cy.get('header').find('button').should('contain.text', 'Projects')
    cy.get('header').find('button').should('contain.text', 'Newsletter')
    cy.get('header').find('button').should('contain.text', 'Feed')
    
    // section #home
    cy.get('#home').find('img').should('have.attr', 'src', profilePhoto)
    cy.get('#home').find('div').should('contain.text', 'Hi, I am Harris')
    cy.get('#social').find('button').should('have.length', 4)

    // section #blog
    cy.get('#blog div').first().find('h2').should('contain.text', 'Latest Blogs')
    cy.get('#blog div').first().find('button').should('contain.text', 'View all posts')
    cy.get('#blog').find('.blog-posts').should('have.length', 3)
    
    // section #projects
    cy.get('#projects div').first().find('h2').should('contain.text', 'Projects')
    cy.get('#projects').find('.project-items').should('have.length', 4)

    // dark / light mode
    cy.get('header div').first().find('button').last().click().should(() => {
      // add into local storage dark=false
      expect(localStorage.getItem('dark')).to.eq('false')
    })
    cy.get('#frame').should('have.css', 'background-color', 'rgb(255, 255, 255)')

    cy.get('header div').first().find('button').last().click().should(() => {
      expect(localStorage.getItem('dark')).to.eq('true')
    })
    cy.get('#frame').should('have.css', 'background-color', 'rgb(26, 32, 44)')

  })
})