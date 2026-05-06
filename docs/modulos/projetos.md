---
id: projetos
title: Projetos
sidebar_position: 2
---

# Projetos

O módulo **Projetos** controla o fluxo de desenvolvimento do projeto de cada OP — desde a atribuição ao projetista até a liberação para a fábrica.

![Módulo de Projetos](/img/projetos.png)

---

## Métricas no topo

| Card | Significado |
|---|---|
| **Total** | OPs atribuídas a projetistas |
| **Falta Medição** | OPs aguardando visita técnica |
| **Projetando** | Em desenvolvimento pelo projetista |
| **Em Aprovação** | Aguardando retorno do cliente/arquitetura |
| **Em Revisão** | Devolvido pela arquitetura para ajustes |
| **Com Pendência** | Bloqueadas por pendência específica |
| **Lib. Produção** | Aprovadas, aguardando início na fábrica |

---

## Tabela de OPs em Projetos

Cada linha exibe:
- **Cliente / OP / Item / Descrição** — identificação da peça
- **Projetista** — responsável pelo desenvolvimento
- **Complexidade** — Baixa, Média ou Alta
- **Status** — etapa atual no fluxo de projeto
- **Revisões** — número de revisões realizadas
- **Início Proj.** — data de início do projeto
- **Prev. Entrega** — prazo acordado com o cliente
- **Ferragens** — status do envio da lista de ferragens
- **Lib. Produção** — data em que foi liberada para a fábrica

As linhas são coloridas por status para identificação visual rápida.

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

## Ações disponíveis

- **Atribuir projetista** — define o responsável pelo projeto da OP
- **Atualizar status** — avança ou retrocede a OP no fluxo
- **Marcar ferragens** — registra o envio da lista de ferragens para compras
- **Liberar para Produção** — marca a OP como aprovada e disponível para programação

:::tip
Apenas OPs com status **Lib. p/ Produção** aparecem no módulo de Produção para programação.
:::
