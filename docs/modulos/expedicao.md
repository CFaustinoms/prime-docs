---
id: expedicao
title: Expedição / Romaneios
sidebar_position: 9
---

# Expedição / Romaneios

O módulo de **Embalagem e Expedição** controla a saída de volumes da fábrica — desde a embalagem das peças até a confirmação de recebimento na obra, com conferência por QR Code em duas etapas.

---

## Estrutura do módulo

O módulo é dividido em três abas:

- **Embalagem** — cadastro e gestão de volumes por OP
- **Avulsos** — volumes sem OP vinculada (amostras, protótipos, diversos)
- **Romaneios** — criação e acompanhamento das entregas

---

## Aba Embalagem

![Lista de OPs para embalagem](/img/expedicao-embalagem.png)

O painel esquerdo lista todas as OPs em produção. Use o campo de busca para localizar uma OP ou obra rapidamente. Clique na OP para gerenciar seus volumes.

![OP selecionada com volumes](/img/expedicao-op.png)

Com a OP selecionada, estão disponíveis:

- **Etiquetas** — imprime as etiquetas QR Code de todos os volumes da OP
- **Finalizar Embalagem** — marca a embalagem como concluída
- **Adicionar Kit Ferragens (Obrigatório)** — cria automaticamente o volume de ferragens da OP (obrigatório antes de finalizar)
- **+ Adicionar Volume** — adiciona volumes adicionais de peças

### Adicionando um volume

![Modal adicionar volume](/img/expedicao-volume-modal.png)

Preencha o **Tipo** do volume (Peça, Madeira, Ferragens, etc.) e a **Descrição da Peça**. Cada volume criado recebe um código único (ex: `OP2327-V1`) e uma etiqueta QR Code.

### Etiqueta de volume

![Etiqueta QR Code de volume](/img/expedicao-etiqueta.png)

Cada etiqueta contém:
- Obra e data
- Número do volume (ex: `1/1`)
- QR Code único para conferência
- Pedido, OP, Item e tipo
- Descrição do ambiente no rodapé

---

## Aba Avulsos

![Aba avulsos com modal](/img/expedicao-avulsos.png)

Volumes sem OP vinculada — usados para amostras, protótipos ou itens diversos. Clique em **+ Novo Volume Avulso**, informe o **Tipo** (Amostra, Protótipo, etc.) e a **Descrição**. O volume recebe um código no formato `AVL-XXX-XXXXX` e pode ser incluído em qualquer romaneio.

---

## Aba Romaneios

### Criando um romaneio

![Modal novo romaneio](/img/expedicao-romaneio-novo.png)

Clique em **+ Novo Romaneio** e preencha:

| Campo | Descrição |
|---|---|
| **Tipo** | Pedido (vinculado a uma OP), Obra manual ou Avulsos |
| **Obra / Pedido** | Selecione a obra de destino |
| **Data de Saída** | Data prevista de saída do caminhão |
| **Motorista** | Nome do responsável pela entrega |
| **Observação** | Campo livre opcional |
| **Volumes a incluir** | Selecione quais volumes farão parte desta entrega |

O botão **Criar Romaneio** indica a quantidade de volumes selecionados (ex: `Criar Romaneio (1 vol.)`).

### Acompanhando um romaneio

![Detalhe do romaneio](/img/expedicao-romaneio-detalhe.png)

Cada romaneio exibe:
- Código (ex: `ROM-0005`), obra, data, motorista
- Contadores **Carregado: X/X** e **Entregue: X/X**
- Lista de volumes com Vol., Tipo, Peça, Código e status de Carregado/Entregue
- Status geral: **Em Separação** ou **Entregue**

### Status dos romaneios

| Status | Significado |
|---|---|
| **Em Separação** | Volumes ainda sendo preparados ou carregados |
| **Entregue** | Todos os volumes confirmados na obra |

### Romaneio impresso

![Romaneio em PDF](/img/expedicao-romaneio-pdf.png)

Clique em **Imprimir** para gerar o PDF do romaneio. O documento contém cabeçalho com obra, data, motorista e status, total de volumes e OPs, relação completa de volumes com checkbox de conferência e espaços para assinatura de **Responsável pelo Carregamento** e **Responsável pelo Recebimento na Obra**. O QR Code no cabeçalho abre a tela de conferência mobile do romaneio.

---

## Conferência por QR Code (mobile)

O fluxo mobile tem **duas etapas independentes**: conferência de carregamento na fábrica e conferência de entrega na obra.

### Etapa 1 — Conferência de carregamento (fábrica)

![Conferência de carregamento mobile](/img/expedicao-mobile-carga.png)

O motorista acessa o romaneio pelo celular e bipa o QR Code de cada caixa ao carregar no caminhão. Cada volume bipado exibe a tela de confirmação:

![Confirmação de volume individual](/img/expedicao-mobile-volume.png)

A tela mostra Volume, Tipo, Obra, OP e Peça. Clique em **Confirmar Carregamento** para registrar. Quando todos os volumes são conferidos, o sistema exibe **"Carregamento completo!"** e solicita **Confirmar Saída** do caminhão.

### Etapa 2 — Conferência de entrega (obra)

![Conferência de entrega na obra mobile](/img/expedicao-mobile-camera.png)

Na obra, o responsável pelo recebimento abre a câmera e bipa o QR Code de cada caixa ao descarregar. A barra de progresso verde avança conforme os volumes são confirmados.

![Entrega completa mobile](/img/expedicao-mobile-obra.png)

Quando todos os volumes são bipados, o sistema exibe **"Entrega completa!"** com a contagem total e solicita **Confirmar Recebimento**. O romaneio passa para status **Entregue** automaticamente.

:::tip
O QR Code do romaneio impresso pode ser bipado pelo responsável na obra para abrir diretamente a tela de conferência, sem precisar digitar nada.
:::

---

## Entrega parcial

É possível criar um romaneio selecionando apenas parte dos volumes de uma OP. O sistema mantém o controle do saldo pendente e exibe o badge **ENTREGA PARCIAL** em laranja na tela de Produção enquanto houver volumes não entregues.
