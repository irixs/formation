import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Formacao } from '../../../../formation-common/formacao';

@Injectable()
export class FormacaoService {

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private taURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    criar(formacao: Formacao): Observable<Formacao> {
        return this.http.post<any>(this.taURL + "/formacao", formacao, { headers: this.headers })
            .pipe(
                retry(2),
                map(res => { if (res.success) { return formacao; } else { return null; } })
            );
    }

    atualizar(formacao: Formacao): Observable<Formacao> {
        return this.http.put<any>("/formacao", formacao, { headers: this.headers }).pipe(
            retry(2),
            map(res => { if (res.success) { return formacao; } else { return null; } })
        );
    }

    getFormacoes(): Observable<Formacao[]> {
        return this.http.get<Formacao[]>(this.taURL + "/formacoes")
            .pipe(
                retry(2)
            );
    }

}