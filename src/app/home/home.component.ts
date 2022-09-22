import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
  }

  copyText(content: string) {
    this.clipboardApi.copyFromContent(content)
  }

}
