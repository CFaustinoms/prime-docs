---
id: pedidos-gerais
title: Pedidos Gerais
sidebar_position: 1
---

# Pedidos Gerais

O módulo **Pedidos Gerais** é a visão completa de todas as Ordens de Produção (OPs) da Prime — do pedido recém-importado até a entrega na obra.

![Tela de Pedidos Gerais](/img/pedidos-gerais.png)

---

## Métricas no topo

Quatro cards mostram o panorama atual da operação:

| Card | O que significa |
|---|---|
| **Total de OPs** | Todas as OPs ativas no sistema |
| **Aguardando** | OPs sem projetista atribuído ainda |
| **Em Projetos** | OPs em fase de desenvolvimento do projeto |
| **Em Produção** | OPs já na fábrica |

---

## Filtros

Use os filtros no topo da tabela para localizar OPs rapidamente:

- **Todos os clientes** — filtra por nome do cliente ou obra
- **Nº OP** — busca por número exato ou parcial
- **Todos os status** — filtra pela etapa atual da OP
- **Todas as arquiteturas** — filtra pelo escritório de arquitetura

---

## Tabela de OPs

Cada linha representa uma OP com as seguintes colunas:

| Coluna | Descrição |
|---|---|
| ☐ | Checkbox para seleção em massa |
| **Obra / Pedido** | Nome do cliente e número do pedido |
| **Nº OP** | Código único da ordem de produção |
| **Item** | Número do item dentro do pedido, exibido em badge cinza |
| **Descrição** | Descrição do produto — clique no ícone ✏ para editar diretamente |
| **Projetista** | Responsável pelo projeto |
| **Marceneiro** | Responsável pela produção |
| **Acabamento** | Badge laranja indica acabamento cadastrado — clique para ver ou editar interno e externo |
| **Prev. Entrega** | Data prevista de entrega |
| **Status Geral** | Etapa atual da OP com badge colorido |
| **Arquitetura** | Escritório de arquitetura responsável |
| **Ações** | Botões de ação disponíveis para a OP |

---

## Badges de status

| Badge | Cor | Significado |
|---|---|---|
| **Ag. Atribuição** | Cinza | OP aguardando atribuição de projetista |
| **Em aprovação** | Cinza escuro | Projeto enviado para aprovação |
| **Lib. Produção** | Preto | Liberada para entrar na fábrica |
| **Em Produção** | Azul | OP em andamento na fábrica |
| **Entregue** | Verde | OP entregue ao cliente |

---

## Ações disponíveis

| Botão | Função |
|---|---|
| **Atribuir** | Atribui um projetista à OP |
| Ícone 360° | Abre o painel completo da OP com histórico de projeto, produção, falhas e expedição |
| **Relatório Cliente** | Gera relatório de andamento para envio ao cliente |
| **Imprimir / PDF** | Gera relatório interno completo |
| **Importar PDF** | Importa novo pedido a partir do PDF do ERP |
| **+ Nova OP Manual** | Cadastra uma OP manualmente sem importação |

---

## Editar descrição

Clique no ícone ✏ ao lado da descrição de qualquer OP para editá-la diretamente na listagem. Disponível para perfis **Admin**, **Gestor**, **Gestor Sistema** e **Projetista**.

---

## Editar acabamento

Clique no badge laranja na coluna **Acabamento** para visualizar ou editar o acabamento interno e externo da OP. Disponível para os mesmos perfis acima.

---

## Agrupamento de OPs

OPs do mesmo pedido aparecem agrupadas na tabela, facilitando a visão de pedidos com múltiplos itens. É possível atribuir projetista a todas as OPs do grupo de uma vez.

---

## Seleção em massa

Use o checkbox no início de cada linha para selecionar múltiplas OPs e realizar ações em lote.
