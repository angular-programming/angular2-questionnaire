import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { DebugElement } from '@angular/core';

import { AboutComponent } from './about.component';
import { AccordionModule } from 'ng2-bootstrap/components/accordion';
import { SharedModule } from '../shared/shared.module';

export function main() {
  describe('About component', () => {

    let comp: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;
    let aboutEl: DebugElement;

    // setting module for testing
    // compile template and css
    beforeEach( async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule, AccordionModule],
        declarations: [AboutComponent],
      })
      .compileComponents();
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(AboutComponent);
      comp    = fixture.componentInstance;
      aboutEl  = fixture.debugElement;

      fixture.detectChanges(); // trigger initial data binding
    });

    it('should render accordion', ()=>{

      const de = aboutEl.queryAll(By.css('accordion'));
      expect(de.length).toBe(1);
    });

    it('should render correct accordion text', ()=>{

      // const de = aboutEl.queryAll(By.css('accordion'));
      expect(aboutEl.nativeElement.textContent).toContain('常见FAQ');
    });
  });
}

////// Test Host Component //////
import { Component } from '@angular/core';

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>'
})
class TestComponent {}
