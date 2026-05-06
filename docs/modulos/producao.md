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

## Lista de OPs em Produção

Cada linha exibe:
- **Cliente / OP** — identificação com badge do processo atual em execução
- **Descrição** — produto com acabamento interno e externo
- **Marceneiro** — responsável pela execução
- **Prioridade** — Alta, Normal ou Baixa
- **Entrega** — data prevista (destacada em vermelho se atrasada)
- **Progresso** — barra indicando percentual de processos concluídos

---

## Programar uma OP

Clique em **Programar** para definir:
- Marceneiro responsável
- Prioridade
- Data de entrega
- Processos que serão executados (com opção de marcar/desmarcar todos)
- Datas previstas por processo

---

## Ações disponíveis

| Botão | Função |
|---|---|
| **Editar** | Reprograma marceneiro, prioridade ou data de entrega |
| **Processos** | Visualiza e gerencia os processos da OP |
| **↺** | Reprograma a data de entrega |
| **⏸** | Pausa a OP (total ou parcialmente por processo) |
| **▶ Retomar** | Retoma uma OP pausada, liberando os apontamentos |

---

## Indicadores visuais

- 🟩 **Fundo verde** — OP no prazo
- 🟧 **Fundo laranja** — entrega próxima (até 5 dias)
- 🟥 **Fundo vermelho** — OP atrasada
- 🟪 **Fundo roxo** — OP pausada
- Badge **ENTREGUE** — OP já expedida

:::caution
OPs pausadas bloqueiam o registro de apontamentos. Use **▶ Retomar** para liberar.
:::
