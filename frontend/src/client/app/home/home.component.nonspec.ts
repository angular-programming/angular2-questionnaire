import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CarouselModule } from 'ng2-bootstrap/components/carousel';
import { SharedModule } from '../shared/shared.module';
// import { NavbarComponent } from '../core/navbar/index';
import { CoreModule } from '../core/core.module';

import { Router, ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';

export function main() {
  describe('Home component', () => {

    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let homeEl: DebugElement;

    it('should just work', ()=>{
      expect(true).toBeTruthy();
    });

    // setting module for testing
    // compile template and css
    beforeEach( async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, CoreModule, SharedModule, CarouselModule],
        declarations: [HomeComponent],
        providers: [
          { provide: Router,      useClass: RouterStub }
        ]
      })
      .compileComponents();
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      comp    = fixture.componentInstance;
      homeEl  = fixture.debugElement;

      fixture.detectChanges(); // trigger initial data binding
    });

    it('should render slides', ()=>{

      const de = homeEl.queryAll(By.css('.slide-image'));

      expect(de.length).toBe(3);
    });
  });
}

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

////// Test Host Component //////
import { Component } from '@angular/core';

@Component({
  selector: 'test-cmp',
  template: '<sd-home></sd-home>'
})
class TestComponent { }
