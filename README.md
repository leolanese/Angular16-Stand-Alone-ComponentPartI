# Using Angular 16 to test Stand Alone Components (Part I)

> Angular includes 2 (or 3) long-awaited features: `Stricly Typed Reactive Forms` and `Standalone Components`, as well as several minor like `new Diagnostics framework`, which provides improved feedback on template errors and best practices.

> Standalone components allow us to create `simpler applications` in a `faster way`
> Simplifying Angular with Standalone Components: Reducing the need for NgModules
> The built-in Angular directives and pipes offered by CommonModule: NgIf, NgFor, DatePipe, DecimalPipe, AsyncPipe, etc. are now available as standalone! we can import individually

> Angular 14 introduces an alternative way to write applications — Standalone components, directives, and pipes.

> The term “standalone” refers to components, directives, or pipes that can be used independently of NgModule.

> With standalone components, directives and pipes, the `standalone: true` flag allows you to add imports directly in your @Component() without an @NgModule().



> Standalone components allow us to create `simpler applications` in a `faster way`

> Simplifying Angular with Standalone Components: Reducing the need for NgModules


## Stricly Typed Reactive Forms
is a long-standing community request that can be dated to the release of Angular
With Angular 14, the FormGroup, formControl, and related classes include type definitions enabling TypeScript to catch many common errors.


```js
const login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
});

console.log(login.value.notanemail);
```


## Angular Standalone Components
A14 It includes 2 (or 3) long-awaited features:
`Stricly Typed Reactive Forms` and `Standalone Components`, as well as several minor like `new Diagnostics framework`, which provides improved feedback on template errors and best practices.


```js
@Component({
    selector: 'app-sample-component',
    // standalone component
    standalone: true,
    template: '',
    // imports
    imports: [ ComponentOne, ComponentTwo, SampleDirective, SampleService, CommonModule ],
})
export class SampleComponent {
    ...
}
```

## Extended developer diagnostics
* Catch the invalid “Banana in a box” error on your two-way data bindings
* Catch nullish coalescing on non-nullable values
* Tree-shakeable error messages

## Angular CLI enhancements
```js
// eg
ng completion
ng analytics
ng analytics enable
ng analytics info
ng cache enable
ng cache info
```

## New Angular CDK
* CDK Menu 
* CDK Dialog

## Tree-shakeable error messages

etc.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


```js
ng serve -o --poll=2000
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further information
Read: [# Angular 14. Testing Stand Alone Components. Part II](https://github.com/leolanese/Angular-v14-stand-alone)

---
### :100: <i>Thanks!</i>
#### Now, don't be an stranger. Let's stay in touch!

##### :radio_button: linkedin: <a href="https://www.linkedin.com/in/leolanese/" target="_blank">@LeoLanese</a>
##### :radio_button: Twitter: <a href="https://twitter.com/LeoLanese" target="_blank">@LeoLanese</a>
##### :radio_button: Portfolio: <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### :radio_button: DEV.to: <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### :radio_button: Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### :radio_button: Questions / Suggestion / Recommendation: developer@leolanese.com
