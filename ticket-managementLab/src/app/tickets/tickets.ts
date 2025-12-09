import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TicketService } from '../services/ticket-service';
import { Ticket } from '../models/Ticket';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, DatePipe],   
  templateUrl: './tickets.html',
  styleUrls: ['./tickets.css'],        
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe({
      next: (data) => {
        this.tickets = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load tickets';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
