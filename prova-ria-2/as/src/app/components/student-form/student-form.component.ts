import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
enviar(_t40: NgForm) {
throw new Error('Method not implemented.');
}
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.studentForm = this.fb.group({
      matricula: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.apiService.addStudent(this.studentForm.value).subscribe();
    }
  }
}
