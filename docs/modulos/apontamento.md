---
id: apontamento
title: Apontamento de Processos
sidebar_position: 6
---

# Apontamento de Processos

O módulo de **Apontamento** registra as horas trabalhadas por cada colaborador em cada processo de uma OP — com cálculo automático de horas normais e extras.

![Tela principal de Apontamento](/img/apontamento.png)

---

## Como registrar um apontamento

1. Digite o **número da OP** no campo de busca e clique em **Buscar**
2. O sistema exibe o cabeçalho da OP com marceneiro, data de entrega e barra de progresso (ex: `3/5 processos`)
3. A lista de processos é exibida com status e total de horas já apontadas em cada um
4. Clique em **Apontar** no processo desejado

![Painel de apontamento](/img/apontamento-painel.png)

5. Preencha os campos:

| Campo | Obrigatório | Descrição |
|---|---|---|
| **Operador** | Sim | Digite para buscar pelo nome |
| **Ajudantes** | Não | Adicione quantos colaboradores participaram |
| **Data e Hora de Início** | Sim | Data e hora em que o processo começou |
| **Data e Hora de Fim** | Não | Deixe em branco se o processo ainda está em andamento |
| **Máquina Utilizada** | Não | Selecione a máquina ou deixe "Sem máquina / manual" |
| **Observação** | Não | Anotações livres sobre o apontamento |

6. Marque **Processo concluído** apenas quando o processo estiver 100% finalizado
7. Clique em **Salvar Apontamento**

:::caution
A data e hora de fim não pode ser anterior ou igual ao início. O sistema valida e exibe um aviso em vermelho antes de salvar.
:::

---

## Barra de progresso

O cabeçalho da OP exibe uma barra verde com o avanço dos processos concluídos em relação ao total (ex: `3/5 processos`). Cada processo concluído avança a barra proporcionalmente.

---

## Status dos processos

| Status | Significado |
|---|---|
| ● **Concluído** | Processo finalizado — exibe total de apontamentos e horas acumuladas |
| ◑ **Em Andamento** | Apontamento em aberto, sem hora de fim registrada |
| ○ **Pendente** | Ainda não iniciado |
| ▲ **Atrasado** | Data prevista já passou e o processo não foi concluído |
| ⏸ **Pausado** | OP pausada pelo PCP — apontamento bloqueado |
| ⚠ **Retrabalho** | Processo reaberto por registro de falha |

---

## Cálculo automático de horas

O sistema desconta o intervalo de almoço e identifica horas extras automaticamente:

- **Almoço** — o intervalo de **11h30 às 12h30** é descontado automaticamente se o apontamento cruzar esse período
- **Horas normais** — segunda a quinta até 17h / sexta até 16h
- **+50%** — horas além do expediente em dias úteis e aos sábados
- **+100%** — horas trabalhadas aos domingos

:::info
O aviso *"Almoço (11h30–12h30) descontado automaticamente. Horas extras identificadas pelo horário."* é exibido no painel sempre que relevante.
:::

---

## Histórico de apontamentos

Após salvar, o painel do processo exibe o histórico completo de apontamentos anteriores com operador, data/hora de início e fim, e tempo líquido calculado (incluindo horas extras separadas).

---

## Apontamento via QR Code (celular)

Cada OP tem um QR Code impresso na **Ficha de Produção**. Ao escanear com o celular, o sistema abre diretamente a tela de apontamento daquela OP — sem precisar digitar o número.

![Apontamento via celular](/img/apontamento-mobile.png)

A tela mobile possui os mesmos campos do desktop, com adaptações para toque:
- Seletores de data com **dropdown nativo**
- Botão **Agora** para preencher data e hora atual com um toque
- Botão **Salvar Apontamento** fixo na parte inferior da tela

:::tip
O QR Code funciona em qualquer rede — Wi-Fi da fábrica ou dados móveis do celular. O link aponta para `api.carlosfaustino.com.br`.
:::

---

## OP Pausada

Quando uma OP está com status **Pausada**, o botão **Apontar** fica desabilitado e um aviso laranja é exibido na tela. Para retomar os apontamentos, solicite ao PCP que retome a OP no módulo de **Produção**.
