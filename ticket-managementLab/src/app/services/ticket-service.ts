import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/Ticket'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'https://localhost:7112/api/Tickets'; // update port if needed

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
    }
}
