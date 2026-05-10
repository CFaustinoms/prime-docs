---
id: almoxarifado
title: Almoxarifado
sidebar_position: 10
---

# Almoxarifado

O módulo de **Almoxarifado** controla equipamentos, empréstimos e insumos da Prime — com geração automática de Termo de Responsabilidade em PDF.

---

## Estrutura do módulo

O módulo é dividido em três abas:

- **Painel** — visão geral de status dos equipamentos e empréstimos em aberto
- **Equipamentos** — cadastro e gestão do patrimônio
- **Insumos** — controle de estoque e retiradas

---

## Aba Painel

![Painel do Almoxarifado](/img/almoxarifado-painel.png)

O painel exibe seis indicadores no topo:

| Card | Descrição |
|---|---|
| **Total** | Total de equipamentos cadastrados |
| **Disponíveis** | Equipamentos prontos para uso |
| **Emprestados** | Equipamentos fora da fábrica |
| **Manutenção** | Equipamentos em reparo |
| **Atrasados** | Empréstimos com devolução vencida — em vermelho |
| **Insumos Crít.** | Insumos abaixo do estoque mínimo |

Abaixo dos indicadores, a tabela **Empréstimos em Aberto** lista todos os empréstimos ativos com Código, Equipamento, Responsável, Local, Data de Saída e Previsão de Devolução. Devoluções atrasadas aparecem com a data em vermelho e ícone de alerta. As ações disponíveis são **Imprimir** o termo e **Devolver** o equipamento.

---

## Aba Equipamentos

![Lista de equipamentos](/img/almoxarifado-equipamentos.png)

A tabela exibe todos os equipamentos cadastrados com:

| Coluna | Descrição |
|---|---|
| **Cód.** | Código patrimonial |
| **Descrição** | Nome do equipamento |
| **Marca** | Fabricante |
| **Nº Série** | Número de série (quando disponível) |
| **Categoria** | Ex: Elétrica, Manual |
| **Status** | **Disponível** (verde) ou **Emprestado** (azul) |
| **Com Quem** | Colaborador que está com o equipamento |

As ações por linha são **Editar**, **Emprestar** e **Histórico**.

Use o campo de filtro para buscar por descrição, código, marca ou número de série. O botão **+ Equipamento** cadastra um novo item no patrimônio.

### Registrando um empréstimo

![Modal de empréstimo](/img/almoxarifado-emprestimo.png)

Clique em **Emprestar** na linha do equipamento desejado e preencha:

| Campo | Descrição |
|---|---|
| **Responsável** | Colaborador que receberá o equipamento |
| **Entregue por** | Colaborador do almoxarifado que está entregando |
| **Local de Uso** | Fábrica ou Obra |
| **Data de Saída** | Data da retirada |
| **Previsão de Devolução** | Prazo para retorno |
| **Observação** | Estado do equipamento ou notas adicionais |

Clique em **Confirmar Saída** para registrar. O sistema gera automaticamente o Termo de Responsabilidade.

### Termo de Responsabilidade (PDF)

![Termo de Responsabilidade](/img/almoxarifado-termo.png)

O termo **T-XXXX** é gerado automaticamente com:
- Identificação completa do colaborador e data de emissão
- Identificação do equipamento: descrição, marca, número de série, patrimônio, local de uso, data de retirada e previsão de devolução
- Declaração de responsabilidade com 4 cláusulas
- Espaços para assinatura do colaborador (Receptor) e do almoxarifado (Responsável pela Entrega)

O termo pode ser impresso a qualquer momento pelo botão **Imprimir** no painel de empréstimos em aberto.

---

## Aba Insumos

![Lista de insumos com modal de retirada](/img/almoxarifado-insumos.png)

A lista exibe todos os insumos cadastrados com código, descrição, unidade, saldo atual e status (**Ok** ou **Crítico**). Use o filtro de texto para localizar itens e o botão **Só Críticos** para exibir apenas insumos abaixo do mínimo.

### Registrando uma retirada

Clique em **Nova Retirada** e preencha:

- **Colaborador** — quem está retirando o material
- **Data** — data da retirada
- **Adicionar Insumo** — busque pelo nome e adicione os itens desejados
- Para cada item, informe a **quantidade** e o **destino** (ex: Uso Fábrica)

O botão **Registrar** indica a quantidade de itens a registrar (ex: `Registrar (1)`). Após confirmação, o saldo de cada insumo é atualizado automaticamente.
