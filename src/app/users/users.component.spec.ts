import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Discard row', () => {
    let index=0;
    let instane=new UsersComponent();
    instane.users = [
      { Name: 'Mahesh', age: 25, display: true },
      { Name: 'Shakti', age: 23, display: true },
      { Name: 'Krishna', age: 23, display: true },
      { Name: 'Radha', age: 21, display: true },
    ];
    instane.discardRow(index);
    expect(instane.users[index].display).toBeFalse();
  });
});
