import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public qrCodeDownloadLink: SafeUrl = "";
  qrStringControl: FormControl = new FormControl('', [Validators.required])
  title = 'GenerateQR';

  onChangeURL(url: SafeUrl) {
    console.log(url);
    this.qrCodeDownloadLink = url;
  }
}
