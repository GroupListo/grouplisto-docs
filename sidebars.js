// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: 'Learn how to get started with GroupListo',
      },
      collapsed: false,
      items: [
        'getting-started/registration',
        'getting-started/login',
        'getting-started/dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Managing Contacts',
      link: {
        type: 'generated-index',
        title: 'Managing Contacts',
        description: 'Learn how to manage your contacts',
      },
      items: [
        'contacts/overview',
        'contacts/add-contact',
        'contacts/import',
        'contacts/categories',
      ],
    },
    {
      type: 'category',
      label: 'Activities',
      link: {
        type: 'generated-index',
        title: 'Activities',
        description: 'Track your outreach and meetings',
      },
      items: [
        'activities/outreach',
        'activities/meetings',
        'activities/planner',
      ],
    },
    {
      type: 'category',
      label: 'Team Management',
      link: {
        type: 'generated-index',
        title: 'Team Management',
        description: 'Manage your team members',
      },
      items: [
        'team/overview',
        'team/manage-team',
      ],
    },
    {
      type: 'category',
      label: 'Billing',
      link: {
        type: 'generated-index',
        title: 'Billing & Subscription',
        description: 'Manage your subscription',
      },
      items: [
        'billing/plans',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      link: {
        type: 'generated-index',
        title: 'Settings',
        description: 'Configure your account',
      },
      items: [
        'settings/profile',
      ],
    },
  ],
};

export default sidebars;
