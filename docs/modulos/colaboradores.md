---
id: colaboradores
title: Colaboradores 360°
sidebar_position: 11
---

# Colaboradores 360°

O módulo **Colaboradores 360°** centraliza todas as informações dos colaboradores da Prime em uma ficha completa — dados pessoais, ocorrências, documentos, férias, equipamentos e insumos retirados.

:::warning Acesso restrito
Este módulo exibe dados pessoais e salariais sensíveis. O acesso é restrito a perfis autorizados. **CPF, RG e salários são visíveis apenas para: ADMIN, GESTOR_SISTEMA, RH e DIRETORIA.**
:::

:::note Em desenvolvimento
Algumas funcionalidades deste módulo ainda estão em desenvolvimento e podem sofrer alterações.
:::

---

## Estrutura do módulo

O módulo é dividido em quatro abas:

- **Colaboradores** — lista geral e ficha individual 360°
- **Ocorrências** — faltas, advertências e outros registros
- **Documentos** — ASOs, NRs e certificados
- **Férias** — controle de períodos aquisitivos e concessivos

---

## Aba Colaboradores

![Lista de colaboradores](/img/colaboradores-lista.png)

A tabela exibe todos os colaboradores com Nome, CPF, Cargo, Setor, Vínculo (CLT/Terceiro), Data de Admissão e Status. As ações disponíveis por linha são **Ver 360°**, **Editar** e **Inativar**.

Use o campo de busca para localizar um colaborador pelo nome. O botão **+ Colaborador** cadastra um novo registro.

### Ficha 360°

![Ficha 360° do colaborador](/img/colaboradores-ficha.png)

Clique em **Ver 360°** para acessar a ficha completa do colaborador. A ficha exibe:

**Cabeçalho** — nome, status (Ativo/Inativo), cargo, setor, vínculo, matrícula, admissão, nascimento, telefone, CPF, salário CLT, complemento e total real.

**Indicadores do período** — contadores de Faltas, Atrasos, Atestados, Advertências e Equipamentos em Posse, filtráveis por mês e ano.

**Seções inferiores:**
- **Ocorrências do Período** — lista de faltas e ocorrências com tipo, data e justificativa
- **Documentos e Certificados** — documentos vinculados com status de vencimento
- **Equipamentos em Posse** — equipamentos emprestados pelo almoxarifado com alerta de atraso em vermelho
- **Retiradas de Insumos no Período** — insumos retirados com quantidade, data e motivo

---

## Aba Ocorrências

![Aba de ocorrências](/img/colaboradores-ocorrencias.png)

Lista todas as ocorrências registradas com Colaborador, Tipo, Data, Dias/Min, Justificada e Descrição. Use o seletor **Colaborador** para filtrar por pessoa.

### Registrando uma ocorrência

![Modal de ocorrência](/img/colaboradores-ocorrencia-modal.png)

Clique em **+ Registrar** e preencha:

| Campo | Descrição |
|---|---|
| **Colaborador** | Selecione o colaborador |
| **Tipo** | Falta, Atraso, Advertência, Elogio, etc. |
| **Data** | Data da ocorrência |
| **Dias** | Quantidade de dias (para faltas) |
| **Justificada?** | Sim ou Não |
| **Descrição / Observação** | Detalhes da ocorrência |

:::tip
Faltas justificadas (ex: atestado médico) não impactam o cálculo de férias da mesma forma que faltas não justificadas.
:::

---

## Aba Documentos

![Aba de documentos](/img/colaboradores-documentos.png)

Controla ASOs, NRs e certificados dos colaboradores com Tipo, Descrição, Data de Emissão, Vencimento e Status. Documentos próximos do vencimento recebem o badge **Vencendo** em laranja.

---

## Aba Férias

![Aba de férias](/img/colaboradores-ferias.png)

Exibe os períodos aquisitivos e concessivos de cada colaborador com as colunas: Colaborador, Setor, Admissão, Período Aquisitivo, Período Concessivo, Direito, Abono, A Gozar, Início do Gozo e Situação.

Dê um **duplo clique** em qualquer linha para registrar ou editar o gozo de férias.

O sistema calcula automaticamente os dias de direito com base nas faltas do período aquisitivo, seguindo o **Art. 130 da CLT**:

| Faltas no período | Dias de férias |
|---|---|
| 0 a 5 | 30 dias |
| 6 a 14 | 24 dias |
| 15 a 23 | 18 dias |
| 24 a 32 | 12 dias |
| Acima de 32 | Perde o direito |
