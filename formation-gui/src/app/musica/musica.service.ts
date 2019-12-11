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
    private formationURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    criar(musica: Musica): Observable<Musica> {
        return this.http.post<any>(this.formationURL + "/musica", musica, { headers: this.headers })
            .pipe(
                retry(2),
                map(res => { if (res.success) { return musica; } else { return null; } })
            );
    }

    atualizar(musica: Musica): Observable<Musica> {
        return this.http.put<any>(this.formationURL + "/musica", JSON.stringify(musica), { headers: this.headers }).pipe(
            retry(2),
            map(res => { if (res.success) { return musica; } else { return null; } })
        );
    }

    getMusicas(): Observable<Musica[]> {
        return this.http.get<Musica[]>(this.formationURL + "/musicas")
            .pipe(
                retry(2)
            );
    }

}