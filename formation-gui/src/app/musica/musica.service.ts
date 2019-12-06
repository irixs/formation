import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Musica } from './../../../../formation-common/musica';


@Injectable({
    providedIn: 'root',
  })
export class MusicasService {

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private taURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    criar(musica: Musica): Observable<Musica> {
        return this.http.post<any>(this.taURL + "/musicas", musica, { headers: this.headers })
            .pipe(
                retry(2),
                map(res => { if (res.success) { return musica; } else { return null; } })
            );
    }

    atualizar(musica: Musica): Observable<Musica> {
        return this.http.put<any>(this.taURL + "/musicas", JSON.stringify(musica), { headers: this.headers }).pipe(
            retry(2),
            map(res => { if (res.success) { return musica; } else { return null; } })
        );
    }

    getMusicas(): Observable<Musica[]> {
        return this.http.get<Musica[]>(this.taURL + "/musica")
            .pipe(
                retry(2)
            );
    }

    /*
    deletaMusica (musica: Musica | number): Observable<Musica> {
        const id = typeof musica === 'number' ? musica : musica.id;
        const url = `${this.taURL + "/musicas"}/${id}`;
  
        return this.http.delete<Musica>(url, { headers: this.headers })
           .pipe(
               
           );
  } */

}