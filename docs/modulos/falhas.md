---
id: falhas
title: Falhas e Retrabalho
sidebar_position: 7
---

# Falhas e Retrabalho

O módulo de **Falhas** registra e acompanha ocorrências de não conformidade vinculadas a uma OP e processo específico.

![Módulo de Falhas](/img/falhas.png)

---

## Visão geral

No canto superior direito, o badge **"X em aberto"** exibe o total de falhas ainda não resolvidas — em vermelho quando há pendências.

O botão **Fichas em Branco** permite imprimir fichas físicas para registro manual na fábrica.

---

## Tabela de registros

Cada linha exibe:

| Coluna | Descrição |
|---|---|
| **Data** | Data da ocorrência |
| **OP** | Número da OP — clicável para navegar direto à OP |
| **Obra** | Nome da obra/cliente |
| **Processo** | Processo onde ocorreu a falha |
| **Tipo de Falha** | Classificação da ocorrência |
| **Retrabalho** | "Sim" em vermelho quando gerou retrabalho |
| **Status** | **Aberto** (vermelho) ou **Resolvido** (verde) |
| **Registrado por** | Colaborador que registrou a ocorrência |

Registros com retrabalho pendente exibem o botão **↺ Retrabalho** em laranja para acesso rápido.

---

## Filtros

- **Nº OP** — busca por número da OP
- **Processo** — filtra por nome do processo
- **Status** — Todos / Aberto / Resolvido
- **Tipo** — filtra por tipo de falha

---

## Registrando uma falha

Clique em **+ Registrar Falha** para abrir o modal:

![Modal de registro de falha](/img/falhas-modal.png)

1. Digite o **número da OP** e clique em **Buscar** — o sistema confirma o nome da obra
2. Selecione o **processo** onde ocorreu a falha:
   - **Produção** — processos internos da OP (Listagem, Tiragem de Madeira, Prensa, etc.)
   - **Externos** — processos fora da fábrica (Projetos, Transporte, Instalação, etc.)
3. Confirme ou ajuste a **data da ocorrência**
4. Preencha a **descrição / observação** com detalhes opcionais
5. Marque **Gerou retrabalho** se a falha exige reprocessamento
6. Clique em **Registrar Falha**

---

## Retrabalho

Quando uma falha é marcada como retrabalho:

- O processo retorna ao status **⚠ Retrabalho** na lista de processos da OP
- O badge **↺ 1 retrabalho ativo** aparece no card do setor correspondente na tela **Fábrica PCP**
- Um novo apontamento deve ser feito para registrar o tempo de correção
- A falha permanece com status **Aberto** até ser resolvida manualmente

:::caution
O retrabalho **não** reabre a OP automaticamente — é um checkbox explícito no momento do registro. O PCP acompanha os retrabalhos ativos pelo painel da Fábrica PCP.
:::

---

## Aba Relatórios

A aba **Relatórios** consolida as ocorrências por período, tipo de falha e processo, permitindo identificar gargalos recorrentes na produção e colaboradores com maior incidência de não conformidades.
