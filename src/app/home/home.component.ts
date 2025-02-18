import { Component, OnInit } from '@angular/core';
import { PanchangService } from '../services/panchang.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private panchangService: PanchangService) {}
  panchangDetails: any;
  ngOnInit(): void {
    this.fetchPanchang();
  }

  fetchPanchang() {
    const today = new Date();
    this.panchangService.getPanchangDetails(today).subscribe(
      (data) => {
        this.panchangDetails = data;
        console.log(data); // Debugging
      },
      (error) => {
        console.error('Error fetching Panchang:', error);
      }
    );
  }

}
