import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ListarComponent } from './cadastros/games/listar.component';
import { EditarComponent } from './cadastros/games/editar.component';
import { ExcluirComponent } from './cadastros/games/excluir.component';
import { IncluirComponent } from './cadastros/games/incluir.component';
import { HttpClientModule } from '@angular/common/http';

//Angular Components
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';

//Imports angular material para formulário
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule

  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    CadastrosComponent,
    ListarComponent,
    EditarComponent,
    ExcluirComponent,
    IncluirComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
