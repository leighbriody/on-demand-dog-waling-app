import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RapidWalkWalkerPage } from './rapid-walk-walker.page';

describe('RapidWalkWalkerPage', () => {
  let component: RapidWalkWalkerPage;
  let fixture: ComponentFixture<RapidWalkWalkerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidWalkWalkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RapidWalkWalkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
