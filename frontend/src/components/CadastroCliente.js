// Importa React e hooks necessários
import React, { useState, useEffect } from "react";

// Importa a biblioteca axios para fazer requisições HTTP (API)
import axios from "axios";

// Importa o arquivo de estilos CSS específico do formulário
import "./CadastroCliente.css";

// Declara o componente funcional CadastroCliente
const CadastroCliente = () => {
  // Cria variáveis de estado para cada campo do formulário
  const [nome, setNome] = useState("");               // Nome do cliente
  const [email, setEmail] = useState("");             // Email do cliente
  const [telefone, setTelefone] = useState("");       // Telefone do cliente
  const [cep, setCep] = useState("");                 // CEP digitado
  const [endereco, setEndereco] = useState("");       // Endereço retornado via CEP
  const [estado, setEstado] = useState("");           // UF selecionada
  const [cidade, setCidade] = useState("");           // Cidade selecionada

  const [estados, setEstados] = useState([]);         // Lista de UFs disponíveis (IBGE)
  const [cidades, setCidades] = useState([]);         // Lista de cidades conforme UF

  const [erro, setErro] = useState("");               // Mensagem de erro
  const [sucesso, setSucesso] = useState("");         // Mensagem de sucesso

  // useEffect executa ao montar o componente (carrega os estados)
  useEffect(() => {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => {
        // Ordena os estados em ordem alfabética
        const estadosOrdenados = res.data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(estadosOrdenados); // Armazena os estados na variável de estado
      });
  }, []);

  // useEffect executa toda vez que o "estado" mudar (carrega as cidades)
  useEffect(() => {
    if (estado) {
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
        .then((res) => {
          const cidadesOrdenadas = res.data.sort((a, b) => a.nome.localeCompare(b.nome));
          setCidades(cidadesOrdenadas); // Armazena as cidades referentes ao estado selecionado
        });
    } else {
      setCidades([]); // Se nenhum estado estiver selecionado, zera a lista de cidades
    }
  }, [estado]);

  // Valida se o email tem um formato válido com regex
  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Busca endereço a partir do CEP usando a API ViaCEP
  const buscarEnderecoPorCep = async () => {
    if (cep.length !== 8) return; // Só busca se tiver 8 dígitos

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (data.erro) {
        setErro("CEP não encontrado.");
        setEndereco("");
      } else {
        const enderecoCompleto = `${data.logradouro}, ${data.bairro}`;
        setEndereco(enderecoCompleto);
        setErro("");
      }
    } catch (err) {
      console.error(err);
      setErro("Erro ao buscar o endereço.");
    }
  };

  // Função executada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarregar a página
    setErro("");
    setSucesso("");

    // Validação dos campos obrigatórios
    if (!nome || !email || !telefone || !cep || !endereco || !estado || !cidade) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    // Valida formato do e-mail
    if (!validarEmail(email)) {
      setErro("Por favor, insira um email válido.");
      return;
    }

    // Cria objeto com os dados preenchidos
    const novoCliente = {
      nome,
      email,
      telefone,
      cep,
      endereco,
      estado,
      cidade,
    };

    console.log("Cliente cadastrado:", novoCliente); // Simula envio (ainda não envia para API)

    setSucesso("Cliente cadastrado com sucesso!");

    // Limpa os campos do formulário após o envio
    setNome("");
    setEmail("");
    setTelefone("");
    setCep("");
    setEndereco("");
    setEstado("");
    setCidade("");
  };

  // Retorna a interface do formulário (JSX)
  return (
    <form className="cadastro-cliente-form" onSubmit={handleSubmit}>
      <h2>Cadastro de Cliente</h2>
      {erro && <p className="erro">{erro}</p>}
      {sucesso && <p className="sucesso">{sucesso}</p>}

      <label>Nome Completo *</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome completo" />

      <label>Email *</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@exemplo.com" />

      <label>Telefone *</label>
      <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(00) 00000-0000" />

      <label>CEP *</label>
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={buscarEnderecoPorCep} placeholder="CEP (somente números)" />

      <label>Endereço *</label>
      <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} readOnly />

      <label>Estado (UF) *</label>
      <select value={estado} onChange={(e) => setEstado(e.target.value)} required>
        <option value="">Selecione o estado</option>
        {estados.map((uf) => (
          <option key={uf.sigla} value={uf.sigla}>
            {uf.nome} ({uf.sigla})
          </option>
        ))}
      </select>

      <label>Cidade *</label>
      <select value={cidade} onChange={(e) => setCidade(e.target.value)} required disabled={!estado}>
        <option value="">Selecione a cidade</option>
        {cidades.map((cidade) => (
          <option key={cidade.id} value={cidade.nome}>
            {cidade.nome}
          </option>
        ))}
      </select>

      <button type="submit">Cadastrar Cliente</button>
    </form>
  );
};

// Exporta o componente para uso no App.js ou outras rotas
export default CadastroCliente;
