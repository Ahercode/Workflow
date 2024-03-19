import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      {/*<SidebarMenuItem*/}
      {/*  to='/dashboard'*/}
      {/*  icon='element-11'*/}
      {/*  title={intl.formatMessage({id: 'MENU.DASHBOARD'})}*/}
      {/*  fontIcon='bi-app-indicator'*/}
      {/*/>*/}
    {/*<SidebarMenuItem*/}
    {/*    to='/crafted/pages/profile/overview'*/}
    {/*    title='My Profile'*/}
    {/*    // hasBullet={true}*/}
    {/*    icon='profile-circle'*/}
    {/*/>*/}

      <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Order Entry'
        icon='element-7'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/po/requisition' title='Orders' hasBullet={true}/>
        <SidebarMenuItem to='/po/requisition' title='Credit Debits Notes' hasBullet={true}/>
        <SidebarMenuItem to='/po/requisition' title='Ship Via Codes' hasBullet={true}/>
        <SidebarMenuItem to='/po/requisition' title='Invoices' hasBullet={true}/>
        <SidebarMenuItem to='/po/requisition' title='Miscellaneous Charges' hasBullet={true}/>
        <SidebarMenuItem to='/po/requisition' title='Posting Journals' hasBullet={true}/>
        <SidebarMenuItem to='/po/requisition' title='Sales History' hasBullet={true}/>
        <SidebarMenuItem to='/po/requisition' title='Templates' hasBullet={true}/>
      </SidebarMenuItemWithSub>
        <SidebarMenuItemWithSub
            to='/crafted/widgets'
            title='Purchase Order'
            icon='element-7'
            fontIcon='bi-layers'
        >
            <SidebarMenuItem to='/po/requisition' title='Requisition' hasBullet={true}/>
            <SidebarMenuItem to='/po/requisition' title='Create Batch' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Day End Processing' hasBullet={true}/>
            <SidebarMenuItem to='/po/requisition' title='Invoices' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Receipts' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Credit Debit Notes' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Purchase Orders' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Returns' hasBullet={true} />
        </SidebarMenuItemWithSub>
        <SidebarMenuItemWithSub
            to='/crafted/widgets'
            title='Inventory Control'
            icon='element-7'
            fontIcon='bi-layers'
        >
            <SidebarMenuItem to='/po/requisition' title='Account Sets' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Adjustments' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Bill of Material' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Categories' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Create GL Batch' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Day End Processing' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Internal Usages' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Item Pricing' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Items' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Item Structures' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Locations' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Price List Codes' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Receipts' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Shipments' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Transfers' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Unit Of Measures' hasBullet={true} />
            <SidebarMenuItem to='/po/requisition' title='Weight Unit Of Measures' hasBullet={true} />
        </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}
