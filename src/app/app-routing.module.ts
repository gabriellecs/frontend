import { LocalizacaoListaComponent } from './localizacao-lista/localizacao-lista.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoListaComponent } from './carrinho-lista/carrinho-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { LocalizacaoCadastroComponent } from './localizacao-cadastro/localizacao-cadastro.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';


const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"carrinho",
  component: CarrinhoListaComponent
},{
  path:"relatorio",
  component: ReportComponent
},{
  path:"login",
  component: LoginComponent
},{
  path:"localizacao-lista",
  component: LocalizacaoListaComponent
},{
  path:"localizacao-cadastro",
  component: LocalizacaoCadastroComponent
},{
  path:"localizacao-cadastro/:id",
  component: LocalizacaoCadastroComponent
},{
  path:"cliente-cadastro",
  component: ClienteCadastroComponent
},{
  path:"cliente-cadastro/:id",
  component: ClienteCadastroComponent
},{
  path:"cadastro-categoria",
  component: CadastroCategoriaComponent
}, {
  path:"cadastro-categoria/:id",
  component: CadastroCategoriaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
