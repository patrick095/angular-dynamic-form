# DynamicForm

 - This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

 - This project was created with the intention of demonstrating a solution for applications that have multiple forms, using the factory design pattern.

 - For each form, just create a 'FormData' class following the default implemented project (or adjusting your needs), calling the formFactory to create the form (formGroup) and the dynamicForm to render the form.

- I also implemented a basic dependency system in case a question depends on the answer of another to be able to be rendered.
- I used the same component to render multiple different pages with different forms, taking the route and using the FormDataFactory to create each specific form on the page.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

