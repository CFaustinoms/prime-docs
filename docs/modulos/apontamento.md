---
id: apontamento
title: Apontamento de Processos
sidebar_position: 6
---

# Apontamento de Processos

O módulo de **Apontamento** registra as horas trabalhadas por cada colaborador em cada processo de uma OP.

![Apontamento de Processos](/img/apontamento.png)

---

## Como registrar um apontamento

1. Digite o **número da OP** no campo de busca e clique em **Buscar**
2. O sistema exibe os processos da OP com seus status e progresso
3. Clique em **Apontar** no processo desejado
4. O painel de apontamento abre:

![Painel de apontamento](/img/apontamento-painel.png)

5. Preencha:
   - **Operador** — digite para buscar pelo nome
   - **Ajudantes** — opcional, adicione quantos participaram
   - **Data e hora de início**
   - **Data e hora de fim** — opcional se o processo ainda está em andamento
   - **Máquina utilizada** — opcional
   - **Observação** — opcional
6. Marque **Processo concluído** se o processo foi 100% finalizado
7. Clique em **Salvar Apontamento**

---

## Status dos processos

| Status | Significado |
|---|---|
| ● **Concluído** | Processo finalizado |
| ◑ **Em Andamento** | Apontamento em aberto, sem hora fim |
| ○ **Pendente** | Ainda não iniciado |
| ▲ **Atrasado** | Data prevista já passou |
| ⏸ **Pausado** | OP pausada pelo PCP |
| ⚠ **Retrabalho** | Processo reaberto por falha |

---

## Cálculo automático de horas

O sistema calcula automaticamente:

- **Horas normais** — seg. a qui. até 17h / sex. até 16h
- **+50%** — horas além do expediente em dias úteis e sábados
- **+100%** — horas trabalhadas aos domingos

O intervalo de almoço (11h30–12h30) é descontado automaticamente.

---

## Histórico de apontamentos

O painel exibe o histórico completo de apontamentos anteriores do processo, com operador, data/hora e tempo líquido registrado, incluindo horas extras.

---

## Apontamento via QR Code

Cada OP tem um QR Code na **Ficha de Produção** impressa. Ao escanear com o celular, o sistema abre diretamente a tela de apontamento daquela OP — sem precisar digitar o número.

:::tip
O QR Code funciona em qualquer rede — Wi-Fi da fábrica ou dados móveis do celular.
:::

---

## OP Pausada

Quando uma OP está pausada, o botão **Apontar** fica bloqueado e um aviso laranja é exibido. Solicite ao PCP que retome a OP no módulo de Produção.
