import { Component } from "@angular/core";
import { Http } from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: Object[] = []

    constructor( http:Http ){

        /*let stream = http.get('v1/fotos')
        .subscribe( resp =>{
            this.fotos = resp.json();
            console.log(this.fotos);
        });*/

        http
        .get('v1/fotos')
        .map(resp => resp.json())
        .subscribe( fotos =>{
            this.fotos = fotos;
            console.log(this.fotos);
        }, erro => console.log(erro));

    }

}