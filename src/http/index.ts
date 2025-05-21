import IRacao from '@/interface/IRacao';
import ListarRacao from '@/interface/ListarRacao';
import AtualizarRacao from '@/interface/AtualizarRacao';
import axios from 'axios';
import Cadastrousuario from '@/interface/CadastroUsuario';
import LoginUser from '@/interface/LoginUser';
import AtualizarUser from '@/interface/AtualizarUser';
import atualizarUsuario from '@/interface/AtualizacaoUsuario';
import AtualizacaoUsuario from '@/interface/AtualizacaoUsuario';
import EsqueceuSenha from '@/interface/EsqueceuSenha';
import ListarUsuario from '@/interface/ListarUsuario';
import CadastroAgendaDTO from '@/interface/CadastroAgendaDTO';
const urlDeAcesso = 'http://localhost:8080';
export async function cadastroRacao(salvarRacao: IRacao): Promise<string> {
  const body = JSON.stringify(salvarRacao);
  // console.log(body);
  const resposta = await axios.post(`${urlDeAcesso}/racao`, salvarRacao);
  return resposta.data as string;
}

export async function cadastroAgenda(
  salvarAgenda: CadastroAgendaDTO
): Promise<string> {
  const body = JSON.stringify(salvarAgenda);

  try {
    const resposta = await axios.post(`${urlDeAcesso}/agenda`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return resposta.data; // Resposta esperada como string do backend
  } catch (error) {
    // Aqui pode ser feito um tratamento mais robusto de erros
    console.error('Erro ao salvar agendamento:', error);
    throw new Error('Erro ao salvar agendamento');
  }
}
export async function obterRacao(): Promise<ListarRacao> {
  const resposta = await axios.get(`${urlDeAcesso}/racao`);

  return resposta.data.content as ListarRacao;
}
export async function obterLogin(): Promise<ListarUsuario> {
  const resposta = await axios.get(`${urlDeAcesso}/login`);
  console.log(resposta);

  return resposta.data.content as ListarUsuario;
}

export async function updateRacao(
  atualizarRacao: AtualizarRacao
): Promise<string> {
  try {
    const resposta = await axios.put(
      `${urlDeAcesso}/racao`,
      JSON.stringify(atualizarRacao),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return resposta.data as string;
  } catch (error) {
    console.error('Erro ao atualizar a ração:', error);
    throw error;
  }
}

export async function deleteItem(id: number) {
  const resposta = await axios.delete(`${urlDeAcesso}/racao/${id}`);
  console.log(resposta, 'excluida');
}
export async function Cadastrousuario(
  salvarUsuario: Cadastrousuario
): Promise<string> {
  const body = JSON.stringify(salvarUsuario);
  const resposta = await axios.post(`${urlDeAcesso}/usuario`, salvarUsuario);

  return resposta.data as string;
}
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;

export async function gerarLogin(user: LoginUser): Promise<LoginUser> {
  const resposta = await axios.post(`${urlDeAcesso}/login`, user);
  const token = resposta.data.token;
  const userNovo = userLogado();
  console.log(user + token);

  localStorage.setItem('token', token);
  console.log(localStorage, 'aaaaaaa');
  console.log(userNovo, 'sddsdsd');

  return token;
}

export async function realizarLogout(): Promise<void> {
  localStorage.removeItem('token');
  console.log(localStorage);
}

// export async function userLogado():Promise<LoginUser>{
// const resposta = await axios.get(`${urlDeAcesso}/login`);
// console.log(resposta, 'o user aqui');

// return resposta.data as LoginUser

// }

export async function userLogado(): Promise<LoginUser> {
  return {
    login: 'usuario@fake.com',
    senha: '123456',
    token: 'fake-token',
  };
}

export async function verificarUsuarioLogado(dadosAtualizados: AtualizarUser) {
  try {
    const usuarioLogado = await userLogado();
    console.log('Usuário logado:', usuarioLogado);

    if (usuarioLogado) {
      // Crie um objeto com os dados do usuário que deseja atualizar

      // Faz a requisição PUT para atualizar os dados do usuário
      const resposta = await axios.put(`${urlDeAcesso}/user`, dadosAtualizados);
      console.log(resposta);

      // Retorna os dados atualizados, se necessário
      return resposta.data;
    }
  } catch (error) {
    console.error('Erro ao verificar usuário logado:', error);
    // Lide com o erro, exiba uma mensagem para o usuário, etc.
  }
}
export async function updateUsuario(
  atualizarUsuario: AtualizacaoUsuario
): Promise<string> {
  try {
    const resposta = await axios.post(
      `${urlDeAcesso}/usuario/atualizar`,
      JSON.stringify(atualizarUsuario),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return resposta.data as string;
  } catch (error) {
    console.error('Erro ao atualizar a ração:', error);
    throw error;
  }
}

export async function esqueceuSenha(credenciais: EsqueceuSenha) {
  const resposta = await axios.post(`${urlDeAcesso}/user`, credenciais);

  return resposta.data as string;
}
