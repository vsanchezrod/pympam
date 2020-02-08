import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresupuestosPage } from './presupuestos.page';

describe('PresupuestosPage', () => {
  let component: PresupuestosPage;
  let fixture: ComponentFixture<PresupuestosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresupuestosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
