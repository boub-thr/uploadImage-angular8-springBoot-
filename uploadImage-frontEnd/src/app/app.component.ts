import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uploadImage';
  selectedFile;
  event1;
  imgURL: any ;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any ;

  constructor(private http: HttpClient) {}

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    if(!this.selectedFile) {console.error(" no file was loaded .."); return;}
    const fr = new FileReader();
    fr.onload = ()=>{
      this.imgURL = fr.result;
    };
    fr.readAsDataURL(this.selectedFile);
  }

  onUpload() {
    console.log("starting upload image ...")
    const uploadData = new FormData();
    uploadData.append("MyFile",this.selectedFile,this.selectedFile.name);
    this.http.post("http://localhost:8080/upload/image", uploadData).subscribe(res=>{
      console.log(res);
      this.receivedImageData = res ;
      this.base64Data = this.receivedImageData.pic ;
      this.convertedImage = 'data:image/jpeg;base64,'+ this.base64Data;
    },
    error => {
      console.error("Error Occurred during saving: "+error);
    })
  }
}
