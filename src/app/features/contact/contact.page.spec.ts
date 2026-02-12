import { TestBed } from '@angular/core/testing';
import { ContactPageComponent } from './contact.page';

describe('ContactPageComponent', () => {
  it('invalid form should not submit', () => {
    TestBed.configureTestingModule({ imports: [ContactPageComponent] });
    const fixture = TestBed.createComponent(ContactPageComponent);
    const component = fixture.componentInstance;

    component.submit();
    expect(component.sent).toBeFalse();
  });
});
