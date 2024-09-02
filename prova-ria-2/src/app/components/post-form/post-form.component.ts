import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  private Studentid: number = +1;  


  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.postForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      dataHora: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Inicialize o ID do estudante, possivelmente recebendo-o de um serviço ou rota
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.apiService.addPost(this.Studentid, this.postForm.value).subscribe();
    }
  }
}
