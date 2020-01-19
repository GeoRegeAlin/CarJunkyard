import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITruck } from './ITruck';

@Injectable({
    providedIn:'root'
})
export class TrucksService{
    private getUrl='https://localhost:44336/trucks';
    constructor(private http:HttpClient){}
    getTrucks():Observable<ITruck[]>
    {
        return this.http.get<ITruck[]>(this.getUrl);
    }
    async getSpecificTruck(id:number)
    {
        const response= this.http.get<ITruck>(this.getUrl+'/'+id).toPromise();
        return response;
    }
}