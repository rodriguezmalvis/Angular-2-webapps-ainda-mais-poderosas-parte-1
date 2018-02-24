import { Http, Headers, Response } from "@angular/http";
import { FotoComponent } from "./foto.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

 @Injectable()
 export class FotoService{

    headers: Headers = new Headers();
    url: string = 'v1/fotos';

    constructor(private http: Http){

        // Adiciona o tipo de conteúdo application/json 
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(foto: FotoComponent): Observable<MensagemCadastro>{
        if(foto._id){
            return this.http.put(this.url+"/"+foto._id, JSON.stringify(foto), { headers: this.headers })
            .map(() =>( new MensagemCadastro('Foto Alterada com sucesso',false)));
        }else{
            return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
            .map(() =>(new MensagemCadastro('Foto incluida com sucesso',true)));
        }

    }

    lista(): Observable<FotoComponent[]>{

        return this.http.get(this.url)
            .map(res => res.json());

    }

    remove(foto: FotoComponent){

        return this.http.delete(this.url+"/"+foto._id);

    }

    buscaPorId(id): Observable<FotoComponent> {
        return this.http.get(this.url+"/"+id)
        .map(res => res.json())
    }

}

export class MensagemCadastro{

    constructor(private _mensagem: string, private _inclusao: boolean){
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string{
        return this._mensagem;
    }

    get inclusao(): boolean{
        return this._inclusao;
    }
}