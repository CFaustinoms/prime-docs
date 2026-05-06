/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  manualSidebar: [
    {
      type: 'category',
      label: '🚀 Introdução',
      collapsed: false,
      items: [
        'introducao/o-que-e',
        'introducao/acesso-login',
        'introducao/navegacao',
        'introducao/perfis-acesso',
      ],
    },
    {
      type: 'category',
      label: '📋 Operação',
      collapsed: false,
      items: [
        'modulos/pedidos-gerais',
        'modulos/projetos',
        'modulos/producao',
        'modulos/materiais',
      ],
    },
    {
      type: 'category',
      label: '🏭 Fábrica',
      collapsed: false,
      items: [
        'modulos/fabrica-pcp',
        'modulos/apontamento',
        'modulos/falhas',
        'modulos/checklist',
        'modulos/expedicao',
        'modulos/retorno',
      ],
    },
    {
      type: 'category',
      label: '📦 Recursos',
      collapsed: false,
      items: [
        'modulos/almoxarifado',
        'modulos/colaboradores',
        'modulos/diario-equipamentos',
        'modulos/frota',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Administração',
      collapsed: false,
      items: [
        'admin/usuarios',
        'admin/permissoes',
        'admin/auditoria',
        'admin/custo-operacional',
      ],
    },
  ],
}

module.exports = sidebars
