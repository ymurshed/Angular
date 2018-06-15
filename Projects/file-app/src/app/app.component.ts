import { Component, ElementRef } from '@angular/core';
import { FileUploaderService } from './services/file-uploader-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FileUploaderService]
})

export class AppComponent {
  title = 'File uploader app';

  constructor(private fileUploader: FileUploaderService, private elem: ElementRef) {
  }

  public uploadFile(): void {
    //this.elem.nativeElement.querySelector('#spinner').style.visibility = 'visible';
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let formData = new FormData();
    let file =  files[0];
    formData.append('file', file, file.name);
    this.fileUploader.uploadFile(formData).subscribe(res=> this.dataLoaded(res));
  }

  private dataLoaded(data: any): void {
    //this.elem.nativeElement.querySelector('#spinner').style.visibility = 'hidden';  
  }
}


