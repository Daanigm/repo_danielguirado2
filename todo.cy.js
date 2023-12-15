describe('crear tareas y clickar en ellas', () => {


    it('crear tarea 1', () => {
      cy.visit('https://todomvc.com/examples/react/#/')
      cy.get('.new-todo').type("tarea 1{enter}")
      cy.get('.view > label').contains("tarea 1")
      
          
 
    })

    it('crear tarea 2 y verificar como completada', () => {
      cy.visit('https://todomvc.com/examples/react/#/')
      cy.get('.new-todo').type("tarea 2{enter}")
      cy.get('.toggle').click()
      
      
      
           
       
   })    

   it('crear tarea 3 y verificar no como completada', () => {
      cy.visit('https://todomvc.com/examples/react/#/')
      cy.get('.new-todo').type("tarea 3{enter}")
      cy.get('.toggle').click()
      cy.get('.toggle').click()
      
  })  


  it('crear tarea 4 y editar nombre', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type("tarea 4{enter}")
    cy.get('.view > label').dblclick()
    cy.get('.edit').type("editada{enter}")
  

         
  
 })
   
 it("crear tarea 5 y eliminarla  ", () => {
    
  cy.visit('https://todomvc.com/examples/react/#/')
  cy.get(".new-todo").type("tarea 5{enter}");
  cy.get(".view > label").trigger("mouseover");
  cy.get(".destroy").invoke("show").click({ force: true });
  cy.get(".new-todo");
});
  

  
  


  it('crear tareas completadas y no completadas', () => { 
  
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get(".new-todo").type("tarea 1{enter}");
    cy.get(".new-todo").type("tarea 2{enter}");
    cy.get(".new-todo").type("tarea 3{enter}");
    cy.get(".new-todo").type("estudiar{enter}");
    cy.get(":nth-child(1) > .view > .toggle").click();
    cy.get(":nth-child(3) > .view > .toggle").click();
    cy.get(":nth-child(3) > a").click();
    cy.get(":nth-child(2) > .view > label").contains("tarea 2");
    cy.get(":nth-child(1) > .view > label").contains("tarea 1");
    cy.get(":nth-child(2) > a").click();
    cy.get(":nth-child(1) > .view > label").contains("tarea3");
    cy.get(":nth-child(2) > .view > label").contains("tarea 4");
    cy.get(":nth-child(1) > a").click();
  });
  




})