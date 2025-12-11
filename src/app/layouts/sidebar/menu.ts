import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Procurement',
    icon: 'ri-shopping-cart-2-line',
    subItems: [
      {
        id: 11,
        label: 'Supplier Master',
        link: '/procurement/supplier-master',
        parentId: 1
      },
      {
        id: 12,
        label: 'Purchase Entry', // Contains File Upload feature
        link: '/procurement/purchase-entry',
        parentId: 1
      },
      {
        id: 13,
        label: 'Purchase History',
        link: '/procurement/purchase-history',
        parentId: 1
      },
      {
        id: 14,
        label: 'Supplier Payment',
        link: '/procurement/supplier-payment',
        parentId: 1
      }
    ]
  },
  {
    id: 2,
    label: 'Inventory',
    icon: 'ri-archive-line', 
    subItems: [
      {
        id: 21,
        label: 'Item Master', // Create/Edit Products here
        link: '/inventory/item-master',
        parentId: 2
      },
      {
        id: 22,
        label: 'Current Stock View', // Live stock levels
        link: '/inventory/current-stock-view',
        parentId: 2
      },
      {
        id: 23,
        label: 'Stock Register', // In/Out log
        link: '/inventory/stock-register',
        parentId: 2
      }
    ]
  },
  {
    id: 3,
    label: 'Pre-Sales & CRM',
    icon: 'ri-contacts-book-line',
    subItems: [
      {
        id: 31,
        label: 'Customer Master',
        link: '/presales-crm/customer-master',
        parentId: 3
      },
      {
        id: 32,
        label: 'Create Quotation',
        link: '/presales-crm/create-quotation',
        parentId: 3
      },
      {
        id: 33,
        label: 'Quotation List',
        link: '/presales-crm/quotation-list',
        parentId: 3
      }
    ]
  }, {
    id: 4,
    label: 'Sales & Invoicing',
    icon: 'ri-file-paper-2-line',
    subItems: [
      {
        id: 41,
        label: 'New Invoice',
        link: '/sales/invoice/new',
        parentId: 4
      },
      {
        id: 42,
        label: 'Sales Register',
        link: '/sales/history',
        parentId: 4
      },
      {
        id: 43,
        label: 'Sales Returns',
        link: '/sales/returns',
        parentId: 4
      }
    ]
  },
  {
    id: 5,
    label: 'Billing & Collections',
    icon: 'ri-wallet-3-line',
    subItems: [
      {
        id: 51,
        label: 'Generate Bill',
        link: '/billing/generate',
        parentId: 5
      },
      {
        id: 52,
        label: 'Receive Payment',
        link: '/billing/payment/receive',
        parentId: 5
      },
      {
        id: 53,
        label: 'Customer Ledger',
        link: '/billing/ledger',
        parentId: 5
      },
      {
        id: 54,
        label: 'Aging Report',
        link: '/billing/aging-report',
        parentId: 5
      }
    ]
  },
  {
    id: 6,
    label: 'Core Accounting',
    icon: 'ri-book-read-line',
    subItems: [
      {
        id: 61,
        label: 'Ledger Entry',
        link: '/accounting/journal-entry',
        parentId: 6
      },
      {
        id: 62,
        label: 'General Ledger View',
        link: '/accounting/general-ledger',
        parentId: 6
      },
      {
        id: 63,
        label: 'Day Book',
        link: '/accounting/day-book',
        parentId: 6
      }
    ]
  }
]
