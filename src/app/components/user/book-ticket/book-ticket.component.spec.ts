import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketComponent } from './book-ticket.component';

describe('BookTicketComponent', () => {
  let component: BookTicketComponent;
  let fixture: ComponentFixture<BookTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
