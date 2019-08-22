import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, FormBuilder, NgForm, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-diretrizes',
  templateUrl: './diretrizes.page.html',
  styleUrls: ['./diretrizes.page.scss'],
})
export class DiretrizesPage implements OnInit {

  diretrizesForm: FormGroup;

  constructor(
    private platform: Platform, 
    private file: File, 
    private ft: FileTransfer, 
    private fileOpener: FileOpener, 
    private document: DocumentViewer,
    public router: Router,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.diretrizesForm = this.formBuilder.group({
      opt_diretrizes : ['', Validators.compose([Validators.required]) ]
    });
 
  }
 
  openLocalPdf() {
    let filePath = this.file.applicationDirectory + 'www/assets';
 
    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'Diretrizes_NSL.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      this.document.viewDocument(`${filePath}/Diretrizes_NSL.pdf`, 'application/pdf', options);
    }
  }

  ngOnInit() {
  }

  backMenu(){
    this.router.navigate(['menu']);
  }


}
