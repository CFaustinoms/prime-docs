---
id: checklist
title: Checklist de Peças
sidebar_position: 8
---

# Checklist de Peças

O módulo de **Checklist** é usado pelo líder de fábrica para cadastrar e conferir as peças de cada OP antes da expedição.

![Tela de Checklist de Peças](/img/checklist.png)

---

## Como acessar o checklist de uma OP

1. Digite o **número da OP** no campo de busca e clique em **Buscar OP**
2. O sistema exibe o cabeçalho com Obra/Cliente, Ambiente, Marceneiro, Acabamento Interno, Acabamento Externo e Data de Início de Montagem
3. Preencha ou edite as peças na tabela abaixo

---

## Cadastro de peças

Cada linha da tabela representa uma peça e possui os campos:

| Campo | Descrição |
|---|---|
| **Item** | Número sequencial |
| **QTD** | Quantidade de peças |
| **Descrição da Peça** | Nome ou identificação da peça |
| **Dimensões (LxAxP)** | Medidas em milímetros |
| **Grupo** | Grupo de embalagem ao qual a peça pertence |
| **Montagem** | Checkbox de conferência na etapa de montagem |
| **Lustração** | Checkbox de conferência na etapa de lustração |
| **Expedição** | Checkbox de conferência na expedição |

Use **+ Adicionar Linha** ou **+ Linha** para incluir novas peças. Clique no **×** à direita para remover uma linha.

Após editar, clique em **Atualizar Checklist** para salvar as alterações.

---

## Grupos de embalagem

Peças podem ser agrupadas por ambiente ou critério livre. Cada grupo recebe uma cor e **gera uma etiqueta de volume na expedição**.

- Clique em **+ Criar Grupo** para adicionar um novo grupo
- Atribua o grupo desejado a cada peça pelo seletor na coluna **Grupo**
- Peças sem grupo ficam como **— Individual —** e geram volume próprio na expedição

:::tip
Agrupar corretamente as peças facilita a conferência na obra e garante que os volumes saiam etiquetados por ambiente.
:::

---

## Ficha impressa (FM-CKL-01)

Clique em **Imprimir Ficha** para gerar o documento **FM-CKL-01 — Checklist de Peças** em PDF.

![Ficha impressa FM-CKL-01](/img/checklist-ficha.png)

A ficha contém:
- Cabeçalho com Obra, Nº Pedido, Ambiente, Marceneiro, Acabamentos e Data de Início de Montagem
- Relação de peças com Item, QTD, Descrição e Dimensões
- Colunas **Montagem / Lustração / Expedição** com checkboxes SIM/NÃO para preenchimento físico
- Espaço para assinaturas de Montagem, Lustração e Expedição
- Rodapé com dados da empresa e código do documento

A ficha deve ser preenchida com letra legível e entregue ao PCP após conferência.

---

## Entrega parcial

Quando apenas parte das peças de uma OP é expedida, o sistema detecta automaticamente a divergência entre o checklist cadastrado e os volumes entregues — e exibe o badge **ENTREGA PARCIAL** em laranja na tela de Produção.

---

## Remover checklist

O botão **Remover** (em vermelho) exclui o checklist completo da OP. Use com cautela — a ação remove todas as peças e grupos cadastrados.
