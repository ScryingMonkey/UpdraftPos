import { Component, OnInit, Input } from '@angular/core';

import { Monkey } from '../monkey.interface';
import { BarrelOfMonkeysService } from '../barrelofmonkeys.service';

import { TestService } from '../../../services/test.service';

@Component({
    selector: 'monkey-skin',
    templateUrl: 'monkeyskin.component.html',
    providers: [] 
})
export class MonkeySkinComponent implements OnInit {
    @Input() monkey: Monkey;
    private testing:boolean;

    constructor(private _bomService: BarrelOfMonkeysService, private _test:TestService ) { 
        console.log('[ MonkeySkinComponent.constructor...');
        console.log(this._bomService.testState());
        this.testing = false;
    }

    ngOnInit() { 
        console.log('[ MonkeySkinComponent.ngOnInit...');
        this._bomService.testState();
        // set options on the displayed monkey to the monkeys left in the barrel
        // let options = [];
        // for(let m of this._bomService.monkeysInTheBarrel) {
        //     options.push(m.key);
        // }
        // this.monkey.options = options;        
    }

    monkeyClicked() {
        console.log('[ MonkeySkinComponent.monkeyClicked...');     
        this._bomService.monkeyClicked(this.monkey);
        // // update currentMonkey with the responses to his options
        // this._bomService.recordCurrentMonkeyAnswers(this.monkey.responses);
        //  // update monkeysInWaiting with currentMonkey followers 
        // this._bomService.updateMonkeysInWaiting(this.monkey.followers);
        // // pulls the first monkey-In-Waiting and sends to updateCurrentMonkey()
        // // if monkeysInWaiting is empty, trigger roll up
        // this._bomService.pullNextMonkey();
    }
    updateMonkeysInWaiting() {
        console.log('[ MonkeySkinComponent.updateMonkeysInTheBarrel()');
        let options = [];
        for (let monkey of this._bomService.monkeysInTheBarrel) {
            options.push(monkey.key);
        }
        console.log('...updating monkeysInWaiting options: ');
        console.log(options);
        for (let monkey of this._bomService.monkeysInWaiting) {
            monkey.options = options;
        }
    }

    // TODO: For testing.  Remove when working.
    get testingMonkey() { return JSON.stringify(this.monkey); }
    
}