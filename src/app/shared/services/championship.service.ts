import { Injectable }                      from '@angular/core';
import { Http, Response, RequestOptions }  from '@angular/http';
import { Observable }                      from 'rxjs/Observable';
import { Championship }                    from '../entities/championship';

@Injectable()
export class ChampionshipService {

  private apiUrl = 'http://localhost:3000/api/championships';

  constructor (private http: Http) {}

  upsert (championship: Championship): Observable<Championship> {
    return this.http.post(this.apiUrl, championship)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getChampionship (id: number): Observable<Championship> {
    return this.http.get(this.apiUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getChampionships (): Observable<Championship[]> {
    return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
