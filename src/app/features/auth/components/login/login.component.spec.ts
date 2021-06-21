import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from "./login.component";
import { AuthApiService } from "../../../../core/services/api/auth.api.service";
import { AuthModule } from "../../auth.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../../../../core/core.module";
import { AuthRoutingModule } from "../../auth.routing.module";
// TODO
describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, CoreModule, AuthRoutingModule],
      declarations : [LoginComponent],
      providers : [AuthApiService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
