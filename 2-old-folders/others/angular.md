# 1. WHat is angular ?
    - ANgular is typescript-based open source frontend framework developed by Google for building dynamic web applications. It follows MVC ( model-view-Controller) architectures and enables single page applications(SPA) with features like data binding, dependency injection and modular development.
    -it is widely used in the industry due to its simplicity, flexibility, and scalability. 
    - Angular is a popular choice for building complex, data-driven applications with a strong focus on security, performance , and maintainability.


# 2. features of angular
    - component based architecture : Everything is built using components
    - two way data binding : Synchronize the data between the model and the view automatically. 
    - Dependency injection (DI) : Helps in managing dependencies efficiently.
    - directives : custom attributes that change the behavior of elements 
    - Routing : Manages navigation between different views 
    - modular development : code is organize into reuable modulaes
    - observables & RxJS : handles asynchronous data streams 

# 3. What is the difference between AngularJS and Angular?
Feature	                AngularJS (1.x)	        Angular (2+)
Language	                JavaScript	           TypeScript
Architecture	                MVC	             Component-based
Data Binding	              Two-way	       Two-way but with unidirectional data flow
Performance                 	Slower	        Faster due to Ahead-of-Time (AOT) compilation
Mobile Support	                No	                    Yes


# 4. What are components in Angular?
Components are the building blocks of an Angular application. They are essentially classes that define a UI component and its associated template. Components are used to encapsulate a piece of the application's functionality and can be reused throughout the application. Each component has its own template, CSS, and logic. Components are created using the @Component decorator and are typically used to represent a single UI element or a group of related UI elements. 

`OR`

A component is a fundamental building block in Angular that controls a portion of the UI. It consists of:

    Template (HTML) – Defines the UI structure.
    Class (TypeScript) – Defines the logic and properties.
    Styles (CSS/SCSS) – Defines the appearance.

import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello, Angular!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HelloComponent { }


# 5. What is a module in Angular?
    Module is a container for components, services, pipes, and directives. Every ANgular app has atleas one module, the AppModule (app.module.ts)

    Ex. 
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }


# 6. WHat is data binding in angular ?
    Data binding is a mechanism in Angular that allows you to bind the data of a component to the UI 
    Types of data binding : 
        `1.` Interpolation ({{}}) : Binds values from component to view
        Ex. <h1>{{ message }}</h1>

        `2.` Property binding ([]) : Binds component properties to element properties
        Ex. <img [src]="imageUrl">

        `3.` Event binding (()) : capturs user events like clicks
        Ex. <button (click)="sayHello()">Click Me</button>

       ` 4.` Two way binding ([()]) : Synchronizes data between model and view 
        Ex. <input [(ngModel)]="name">


# 7. What are directives in angular ?
    Directives modify the behavior of elements in angular. 
    Types of directives :
    `1.` Structural directives (ngIf, ngFor, ngSwitch) : Change the structure
    Ex. <div *ngIf="isAdmin">Admin</div>
    `2.` Property directives (ngClass, ngStyle) : Change the appearance 
    Ex. <div [ngClass]="{'active': isActive}">Active</div>
    `3.` Attribute directives (ngModel, ngClass) : Change the behavior
    Ex. <input [(ngModel)]="name">

# 8. What is a service in angular ?
A service is a singleton class that provides a specific functionality to the application. It can be used to share data between components, perform complex operations, or interact with external APIs.

# 9. what is difference between ngIf and ngSwitch ?
    - ngIf is used to conditionally display an element based on a boolean expression
     Ex.   <div *ngIf="isVisible">Hello, Angular!</div>
    - ngSwitch is used when there are multiple conditions
     Ex.<div [ngSwitch]="color">
          <p *ngSwitchCase="'red'">Red color</p>
          <p *ngSwitchCase="'blue'">Blue color</p>
          <p *ngSwitchDefault>Other color</p>
        </div>

# 10. What is the difference between ngFor and ngForOf ?
- ngFor is used to iterate over an array of objects
Ex. <ul>
        <li *ngFor="let item of items">{{ item }}</li>
    </ul>
- ngForOf is used to iterate over an array of objects and also provides additional functionality like track By, index, and last 
Ex. <ul>
        <li *ngFor="let item of items; trackBy: trackById">{{ item }}</li>
    </ul>


# 11. What are Angular lifecycle hooks ?
Angular provide lifecycle hooks to control the behavior of a component at different stages

Hook	                      Description
ngOnInit()	         Runs after the component is initialized.
ngOnChanges()	     Runs when input properties change.
ngDoCheck()	         Detects and reacts to changes.
ngAfterViewInit()	 Runs after view (DOM) initialization.
ngOnDestroy()	     Runs before the component is destroyed.


# 12. Dependency injection in agular (DI)
    Dependency injection is a design pattern in which dependencies (services) are injected into components rather than being created manually.
    Ex of service : 
        import { Injectable } from '@angular/core';

        @Injectable({
          providedIn: 'root'
        })
        export class DataService {
          getData() { return 'Hello from Service!'; }
        }

    Using the service in a component:

        import { Component } from '@angular/core';
        import { DataService } from './data.service';

        @Component({
          selector: 'app-example',
          template: `<h1>{{ message }}</h1>`
        })
        export class ExampleComponent {
          message: string;
          constructor(private dataService: DataService) {
            this.message = this.dataService.getData();
          }
        }

# 13. What are pipes in angular ?
    Pipes transform data in templates
    Built in pipes : 
        1. uppercase -> {{ name | uppercase }}
        2. lowercase -> {{ name | lowercase }}
        3. titlecase -> {{ name | titlecase }}
        4. currency -> {{ price | currency }}
        5. date -> {{ date | date: 'short' }}
        Custom pipe :

        import { Pipe, PipeTransform } from '@angular/core';
        @Pipe({ name: 'custom' }) 
        export class CustomPipe implements PipeTransform {
            transform(value: any, args?: any): any {
                return value.toUpperCase();
            }
        }


# 14. what is lazy loading in angular?
    - Lazy loading is a technique used to load modules or components only when they are needed, rather than loading them all at once.
    - It can be achieved using the `loadChildren` property in the routing configuration.
    Ex of lazy loading :
    const routes: Routes = [
        { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m=> m.LazyModule) }
    ];

# 16. What is the difference between Promises and Observables?
    Feature	                Promise	                   Observable
    Execution	        Executes immediately	     Executes when subscribed
    Multiple values	    No, returns a single value	 Yes, handles multiple values over time
    Cancellation	    Cannot be canceled	         Can be unsubscribed
    Operators	        Limited	                     Rich set of operators (map, filter, etc.)

    Ex. of an observable :
        import { Observable } from 'rxjs';
        const observable = new Observable(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
        });

    Ex. of a promise :
        const promise = new Promise((resolve, reject) => {
            resolve(1);
        });

# 17. 