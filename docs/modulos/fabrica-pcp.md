---
id: fabrica-pcp
title: Fábrica / PCP
sidebar_position: 5
---

# Fábrica / PCP

A tela de **Fábrica PCP** é o mapa de produção em tempo real — exibe todas as OPs ativas na fábrica organizadas por setor, com contadores de fila, andamento e conclusões.

![Visão Geral da Fábrica](/img/fabrica-pcp.png)

---

## Métricas no topo

| Card | Significado |
|---|---|
| **OPs Ativas na Fábrica** | Total de OPs em produção e quantos setores estão ocupados |
| **Atrasadas** | OPs com prazo excedido — destacado em vermelho |
| **Setores Ocupados** | Quantidade de setores com pelo menos uma OP na fila ou em andamento |

---

## Visão da Fábrica

Cada card representa um **setor produtivo** e exibe três contadores:

| Contador | Cor | Significado |
|---|---|---|
| **Na Fila** | Laranja | Processos aguardando início neste setor |
| **Andamento** | Cinza | Processos com apontamento em aberto |
| **Concluídas** | Verde | Processos finalizados neste setor |

Setores com OPs em atraso recebem um **badge vermelho** com a contagem (ex: `1 atrasada`).

Setores com retrabalho ativo exibem um **aviso em destaque** dentro do card (ex: `↺ 1 retrabalho ativo`).

Clique em **"Clique para detalhar →"** em qualquer setor para ver as OPs e processos individuais.

---

## Setores monitorados

A tela cobre todos os setores da fábrica, incluindo:

Listagem · Tiragem de Madeira · Corte · Esquadro · Fita de Borda · Usinagem · Preparação de Lâmina · Prensa · Montagem · Pré-Acabamento · Acabamento · Embalagem · Expedição · Entrega · Instalação · Checklist Final · Serralheria · Tapeçaria · Serralheria Externa · Usinagem Externa

---

## Aba Montagem

A aba **Montagem** agrupa as OPs por marceneiro responsável, facilitando a visualização do volume de trabalho de cada colaborador na bancada. As OPs do mesmo marceneiro aparecem agrupadas com seus processos e status.

---

## Atualização manual

O botão **↺ Atualizar** no canto superior direito recarrega os dados da tela sem precisar dar F5 no navegador.
