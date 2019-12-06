import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicaDetalhesComponent } from './musica-detalhes.component';

describe('MusicaDetalhesComponent', () => {
  let component: MusicaDetalhesComponent;
  let fixture: ComponentFixture<MusicaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
