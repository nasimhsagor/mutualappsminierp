import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'ri-dashboard-2-line',
    subItems: [
      {
        id: 3,
        label: 'MENUITEMS.DASHBOARD.LIST.ANALYTICS',
        link: '/analytics',
        parentId: 2
      },
      {
        id: 4,
        label: 'MENUITEMS.DASHBOARD.LIST.CRM',
        link: '/crm',
        parentId: 2
      },
      {
        id: 5,
        label: 'MENUITEMS.DASHBOARD.LIST.ECOMMERCE',
        link: '/',
        parentId: 2
      },
      {
        id: 6,
        label: 'MENUITEMS.DASHBOARD.LIST.CRYPTO',
        link: '/crypto',
        parentId: 2
      },
      {
        id: 7,
        label: 'MENUITEMS.DASHBOARD.LIST.PROJECTS',
        link: '/projects',
        parentId: 2
      },
      {
        id: 7,
        label: 'MENUITEMS.DASHBOARD.LIST.NFT',
        link: '/nft',
        parentId: 2,
      },
      {
        id: 8,
        label: 'MENUITEMS.DASHBOARD.LIST.JOB',
        link: '/job',
        parentId: 2,
      }
    ]
  },
  {
    id: 8,
    label: 'Master-Setup',
    icon: 'ri-apps-2-line',
    subItems: [
      {
        id: 9,
        label: 'Business Create',
        link: '',    
        parentId: 8     
      },
      {
        id: 9,
        label: 'Geo-Hierarchy',
        link: '/geo/layout-setup',    
        parentId: 8     
      },
      {
        id: 10,
        label: 'Item-Dimention',
        link: '/item/dimension-create',
        parentId: 8
      },
      {
        id: 10,
        label: 'Inventory-Dimention',
        link: '/inventory/dimension-create',
        parentId: 8
      },
      {
        id: 10,
        label: 'WH Location',
        link: '/inventory/wh-location',
        parentId: 8
      },
      
      
      
    ]
  },
  {
    id: 10,
    label: 'Customers',
    icon: 'ri-apps-2-line',
    subItems: [
      {
        id: 9,
        label: 'List',
        link: '/g ',    
        parentId: 8     
      },
      {
        id: 9,
        label: 'Add Delivery Point',
        link: '/transport/delivery-point',    
        parentId: 8     
      }, 
      
      
    ]
  },
  
  {
    id: 55,
    label: 'GEO',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'Setup',
        link: '/geo/setup',
        parentId: 8
      },
      {
        id: 56,
        label: 'Transfer',
        link: '/chat',
        parentId: 8
      },
    
    ]
  },
  {
    id: 55,
    label: 'Item',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'Organogram Setup',
        link: '/item/product-organogram',
        parentId: 8
      },
      {
        id: 56,
        label: 'Organogram Report',
        link: '/chat',
        parentId: 8
      },
    
    ]
  },
  {
    id: 55,
    label: 'Inventory',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'FG Entry',
        link: '/inventory/fg-entry',
        parentId: 8
      },
      {
        id: 56,
        label: 'Available Stock',
        link: '/chat',
        parentId: 8
      }, 
      {
        id: 56,
        label: 'Stock Archive',
        link: '/chat',
        parentId: 8
      },      
    
    ]
  },
  {
    id: 55,
    label: 'Forecast',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'Geo Wise Target',
        link: '/sales/geo-wise-target-setup',
        parentId: 8
      },
      {
        id: 56,
        label: 'Available Stock',
        link: '/chat',
        parentId: 8
      },
      {
        id: 56,
        label: 'Lock Stock',
        link: '/chat',
        parentId: 8
      },
      {
        id: 56,
        label: 'Stock Archive',
        link: '/chat',
        parentId: 8
      },
    
    ]
  },
  {
    id: 55,
    label: 'Sales',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'POS',
        link: '/sales/pos',
        parentId: 8
      }, 
    
    ]
  },
   
  {
    id: 100,
    label: 'Qutation',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'Pos To Qutation',
        link: '/sales/pos-to-qutation',
        parentId: 8
      },
      {
        id: 56,
        label: 'Qutation Entry',
        link: '/sales/qutation-entry',
        parentId: 8
      },
      {
        id: 56,
        label: 'Qutation Correction',
        link: '/chat',
        parentId: 8
      },
    
    ]
  },
  {
    id: 100,
    label: 'Transport',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'Vendor Registration',
        link: '/transport/transport-vendor-management',
        parentId: 8
      },
      {
        id: 56,
        label: 'Rent Chart',
        link: '/transport/rent-chart',
        parentId: 8
      },
      {
        id: 56,
        label: 'Vehicle Registration',
        link: '/transport/vehicle-assign',
        parentId: 8
      },
      {
        id: 56,
        label: 'Vehicle Assign',
        link: '/transport/qutation-vehicle-assign',
        parentId: 8
      },
      {
        id: 56,
        label: 'Approval',
        link: '/chat',
        parentId: 8
      },
    
    ]
  },
   
  {
    id: 100,
    label: 'Delivery Order',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'DO Create',
        link: '/chat',
        parentId: 8
      },
      {
        id: 56,
        label: 'Approve',
        link: '/chat',
        parentId: 8
      },
      {
        id: 56,
        label: 'Report',
        link: '/chat',
        parentId: 8
      },
    
    ]
  },  
   
  {
    id: 100,
    label: 'Distribution',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'Auto Challan',
        link: '/distribution/auto-challan',
        parentId: 8
      },
      {
        id: 56,
        label: 'Challan Entry',
        link: '/chat',
        parentId: 8
      },
      {
        id: 56,
        label: 'Delivery Report',
        link: '/chat',
        parentId: 8
      },
    
    ]
  },
   
  {
    id: 1,
    label: 'End',
    isTitle: true
  },
];
