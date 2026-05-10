---
id: producao
title: Produção
sidebar_position: 3
---

# Produção

O módulo de **Produção** é onde o PCP programa, acompanha e controla a execução de todas as OPs na fábrica.

![Módulo de Produção](/img/producao.png)

---

## Métricas no topo

| Card | Significado |
|---|---|
| **Total** | OPs liberadas para produção |
| **Não Programadas** | Aguardando programação pelo PCP |
| **Programadas** | Com marceneiro e data definidos |
| **Próx. Prazo** | Entrega nos próximos 5 dias úteis |
| **Em Atraso** | Data de entrega já ultrapassada |

---

## Filtros

- **Todas as obras** — filtra por cliente ou obra
- **Nº OP** — busca por número
- **Todos os marceneiros** — filtra por responsável
- **Todas as prioridades** — Alta, Normal ou Baixa
- Legenda rápida: **Normal**, **Entrega próxima**, **Atrasada**, **Pausada**

---

## Lista de OPs em Produção

Cada linha exibe:

| Coluna | Descrição |
|---|---|
| **360°** | Abre o painel completo da OP |
| **OP / Item** | Número e item com badge do processo atual em execução |
| **Descrição** | Produto com acabamento interno e externo |
| **Marceneiro** | Responsável pela execução |
| **Prioridade** | Alta, Normal ou Baixa |
| **Entrega** | Data prevista — vermelha se atrasada, com indicador de reprogramação |
| **Processo** | Barra de progresso indicando percentual de conclusão |
| **Ações** | Botões de ação disponíveis |

---

## Programar uma OP

![Programar OP](/img/producao-programar.png)

Clique em **Programar** para definir:
- **Marceneiro responsável**
- **Prioridade** — Alta, Normal ou Baixa
- **Data de entrega**
- **Processos** — selecione quais serão executados, reordene arrastando e defina a data prevista de cada um
- **Observações** — campo opcional

Os processos **Instalação** e **Checklist Final** são adicionados automaticamente ao final — não aparecem na ficha impressa, mas ficam disponíveis para apontamento.

---

## Pausar uma OP

![Pausar OP](/img/producao-pausar.png)

Clique em **⏸** para pausar. Há duas opções:

- **Pausar OP inteira** — bloqueia todos os apontamentos. A OP recebe o badge **PAUSADA**
- **Pausar processos específicos** — outros processos continuam disponíveis

O motivo da pausa é obrigatório. Use **▶ Retomar** para liberar os apontamentos novamente.

---

## Visão 360° da OP

![Visão 360° de Produção](/img/producao-360.png)

Clique no botão **360°** para ver o painel completo da OP em produção:

- **Dados gerais** — status, pedido, arquitetura
- **Programação** — marceneiro, data de entrega e reprogramações com motivo
- **Total de horas lançadas** — horas normais, extras 50% e extras 100%
- **Processos** — cada processo com data prevista, data realizada e operador
- **Falhas & Retrabalho** — ocorrências registradas
- **Retornos de Obra** — peças que voltaram da instalação
- **Expedição** — status de entrega

---

## Ações disponíveis

| Botão | Função |
|---|---|
| **Programar** | Define marceneiro, processos e data de entrega |
| **Editar** | Reprograma marceneiro, prioridade ou data |
| **Processos** | Visualiza e gerencia os processos da OP |
| **↺** | Reprograma a data de entrega com motivo |
| **⏸** | Pausa a OP total ou por processo específico |
| **▶ Retomar** | Retoma uma OP pausada |

---

## Indicadores visuais

| Cor da linha | Significado |
|---|---|
| Fundo normal | OP no prazo |
| Fundo amarelo | Entrega próxima (até 5 dias úteis) |
| Fundo vermelho | OP atrasada |
| Fundo roxo | OP pausada |
| Badge **ENTREGUE** | OP já expedida |
| Badge **PAUSADA** | Apontamentos bloqueados |
| Badge **FALHA** | Ocorrência registrada |

:::caution
OPs pausadas bloqueiam o registro de apontamentos via QR Code. Use **▶ Retomar** para liberar.
:::

:::tip
A OP só é concluída e sai da lista quando todos os processos estiverem concluídos — incluindo **Instalação**, **Checklist Final** — e a expedição estiver confirmada.
:::
