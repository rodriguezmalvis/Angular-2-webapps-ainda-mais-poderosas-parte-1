import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent { 

    fotos: FotoComponent[] = [];

    constructor(http: Http) {

        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

}