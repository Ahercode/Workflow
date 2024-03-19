import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {PageLink, PageTitle} from "../../../_metronic/layout/core";
import {Charts} from "../widgets/components/Charts.tsx";
import {Feeds} from "../widgets/components/Feeds.tsx";
import {Lists} from "../widgets/components/Lists.tsx";
import {Mixed} from "../widgets/components/Mixed.tsx";
import {Tables} from "../widgets/components/Tables.tsx";
import {Statistics} from "../widgets/components/Statistics.tsx";
import Requisition from "./requisition/Requisition.tsx";
import {ToolbarWrapper} from "../../../_metronic/layout/components/toolbar";


const widgetsBreadCrumbs: Array<PageLink> = [
    {
        title: 'Purchase Order',
        path: '#',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]
const PurchaseOrderPage = () =>{

    return(
        <Routes>
            <Route
                element={
                <>
                    <ToolbarWrapper />
                    <Outlet />
                </>
            }>
                <Route
                    path='requisition'
                    element={
                        <>
                            <PageTitle breadcrumbs={widgetsBreadCrumbs}>Requisitions</PageTitle>
                            <Requisition />
                        </>
                    }
                />

                <Route index element={<Navigate to='/po' />} />
            </Route>
        </Routes>
    )

}

export default PurchaseOrderPage