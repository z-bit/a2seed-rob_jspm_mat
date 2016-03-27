import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import './app.css!'

@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    directives: [MATERIAL_DIRECTIVES]
})
class App {
    name: string;

        constructor(){
            this.name = 'Angular2';
            setTimeout(() => {
                this.name = 'Boy'
        }, 1000);
    }
}

bootstrap(App);