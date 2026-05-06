---
id: permissoes
title: Permissões
sidebar_position: 2
---

# Permissões

O sistema de permissões funciona em dois níveis em cascata:

---

## Nível 1 — Permissões por perfil

Define o acesso padrão para todos os usuários de um determinado perfil.

Acesse **Admin → Permissões** para ver e editar a matriz completa. Clique em qualquer célula para alterar o nível de acesso.

---

## Nível 2 — Permissões individuais

Sobrescreve o perfil para um usuário específico. Útil quando um colaborador precisa de acesso a um módulo que seu perfil não tem.

Acesse **Admin → Usuários → [usuário] → Permissões individuais**.

---

## Hierarquia

Quando um usuário tem uma permissão individual configurada, ela prevalece sobre a permissão do perfil. Caso contrário, vale a permissão do perfil.

```
Permissão individual (se existir)
    ↓ senão
Permissão do perfil
```

---

:::tip
Alterações de permissão entram em vigor imediatamente, sem necessidade de o usuário fazer logout.
:::
