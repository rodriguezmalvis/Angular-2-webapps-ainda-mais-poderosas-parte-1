import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit{

    @Input() titulo: string;

    ngOnInit(): void {
        this.titulo =
        this.titulo.length > 7
        ? this.titulo.substr(0,7) + '...'
        : this.titulo;
    }

}