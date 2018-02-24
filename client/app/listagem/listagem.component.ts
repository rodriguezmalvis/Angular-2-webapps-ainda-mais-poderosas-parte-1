import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent { 

    fotos: FotoComponent[] = [];
    mensagem: string = ""; 

    constructor(private service : FotoService) {

        service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

    remove(foto: FotoComponent){

        this.service.remove(foto)
        .subscribe(
            () =>{
                console.log('Foto removida cokm sucesso');
                this.fotos = this.fotos.filter(
                    f => f._id != foto._id)
                    this.mensagem = "Foto removida com sucesso";
            },
            erro =>{
                console.log(erro);
                this.mensagem = "Não foi possivekl remover a Foto";
            }
        );

    }

}