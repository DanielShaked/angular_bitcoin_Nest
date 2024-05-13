import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }
  user!: any
  btc!: any

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.btc = this.bitcoinService.getRate(this.user.coins)
  }

}