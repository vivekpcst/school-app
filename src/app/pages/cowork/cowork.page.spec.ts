import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoworkPage } from './cowork.page';

describe('CoworkPage', () => {
  let component: CoworkPage;
  let fixture: ComponentFixture<CoworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
