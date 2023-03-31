import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteEnums } from 'src/app/core/enums/route.enum';
import { FormDataFactory } from 'src/app/core/form-data/form-data-factory';
import { FormFactory } from 'src/app/core/form-factory/form-factory';
import { IFormGroups } from 'src/app/core/interfaces/form.interfaces';
import { FormType } from 'src/app/core/types/form.type';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnDestroy {
  public formData: Array<IFormGroups> = [];
  public form!: FormType<unknown>;
  private subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.formData = new FormDataFactory().createData(event.url.replace('/', '') as RouteEnums);
        this.form = new FormFactory().createForm(this.formData);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  submit(): void {
    console.log(this.form.getData());
  }
}
