import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css'
})
export class UserListComponentComponent {

  users: any[] = [];

  constructor(private dataService: DataServiceService){ }

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }
}
