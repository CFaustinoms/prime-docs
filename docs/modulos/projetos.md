---
id: projetos
title: Projetos
sidebar_position: 2
---

# Projetos

O módulo **Projetos** controla o fluxo de desenvolvimento do projeto de cada OP — desde a atribuição ao projetista até a liberação para a fábrica.

![Módulo de Projetos](/img/projetos.png)

---

## Abas do módulo

- **OPs** — listagem e acompanhamento de todas as OPs em projetos
- **KPIs** — indicadores de desempenho do setor de projetos

---

## Métricas no topo

| Card | Significado |
|---|---|
| **Total** | OPs atribuídas a projetistas |
| **Falta Medição** | OPs aguardando visita técnica |
| **Projetando** | Em desenvolvimento pelo projetista |
| **Em Aprovação** | Aguardando retorno da arquitetura |
| **Em Revisão** | Devolvido pela arquitetura para ajustes |
| **Com Pendência** | Bloqueadas por pendência específica |
| **Lib. Produção** | Aprovadas, aguardando início na fábrica |

---

## Filtros

- **Obra / Cliente** — filtra por nome da obra ou cliente
- **Projetista** — filtra por responsável
- **Status** — etapa atual no fluxo
- **Complexidade** — Baixa, Média ou Alta
- **Nº OP** — busca por número
- **Período** — intervalo de datas

---

## Tabela de OPs em Projetos

Cada linha exibe:

| Coluna | Descrição |
|---|---|
| **360°** | Botão que abre a visão completa da OP |
| **OP / Item** | Número da ordem e item do pedido |
| **Descrição** | Descrição do produto |
| **Projetista** | Responsável pelo desenvolvimento |
| **Complexidade** | Baixa, Média ou Alta |
| **Status** | Etapa atual no fluxo de projeto |
| **Revisões** | Número de revisões realizadas |
| **Início Proj.** | Data de início do projeto |
| **Prev. Entrega** | Prazo acordado |
| **Ferragens** | Status do envio da lista de ferragens |
| **Lib. Produção** | Data de liberação para a fábrica |
| **Ações** | Duplo clique na linha para abrir ações |

As linhas são coloridas por status para identificação visual rápida. Linhas **vermelhas** indicam 3 ou mais revisões. Linhas **verdes** indicam OP liberada para produção.

---

## Fluxo de status

```
Aguardando Atribuição
       ↓
Falta Medição → Projetando → Em Aprovação → Lib. p/ Produção
                     ↑              ↓
                Em Revisão ←────────
```

---

## Visão 360° da OP

![Visão 360° de Projetos](/img/projetos-360.png)

Clique no botão **360°** de qualquer OP para ver o painel completo, que inclui:

- **Dados da OP** — cliente, pedido, status, acabamento interno e externo
- **Projeto** — projetista, timeline com datas de atribuição, início, previsão de entrega e liberação
- **Medição** — data da visita técnica (quando houver)
- **Aprovação** — data e status da aprovação pela arquitetura
- **Liberação para Produção** — data em que foi liberada
- **Histórico de Arquitetura** — todos os envios com datas de ida e retorno, resultado de cada envio

---

## Ações disponíveis

- **Atribuir projetista** — define o responsável pelo projeto da OP
- **Registrar Início** — marca a data de início do projeto (aparece apenas se ainda não foi registrado)
- **Enviar para Arquitetura** — registra o envio do projeto para aprovação
- **Marcar ferragens** — registra o envio da lista de ferragens para compras
- **Liberar para Produção** — marca a OP como aprovada e disponível para programação

:::tip
Apenas OPs com status **Lib. p/ Produção** aparecem no módulo de Produção para programação.
:::
