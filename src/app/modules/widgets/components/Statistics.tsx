import {FC} from 'react'
import {
  StatisticsWidget1,
  StatisticsWidget2,
  StatisticsWidget3,
  StatisticsWidget4,
  StatisticsWidget5,
  StatisticsWidget6, TablesWidget9,
} from '../../../../_metronic/partials/widgets'
import { ToolbarWrapper } from '../../../../_metronic/layout/components/toolbar'
import { Content } from '../../../../_metronic/layout/components/content'

const Statistics: FC = () => {
  return (
    <>
      <ToolbarWrapper />
      <Content>
        {/* begin::Row */}
        {/*<div className='row g-5 g-xl-8'>*/}
        {/*  <TablesWidget9 className='mb-5 mb-xl-8' />*/}
        {/*  /!*<div className='col-xl-4'>*!/*/}
        {/*  /!*  <StatisticsWidget1*!/*/}
        {/*  /!*    className='card-xl-stretch mb-xl-8'*!/*/}
        {/*  /!*    image='abstract-4.svg'*!/*/}
        {/*  /!*    title='Meeting Schedule'*!/*/}
        {/*  /!*    time='3:30PM - 4:20PM'*!/*/}
        {/*  /!*    description='Create a headline that is informative<br/>and will capture readers'*!/*/}
        {/*  /!*  />*!/*/}
        {/*  /!*</div>*!/*/}

        {/*  /!*<div className='col-xl-4'>*!/*/}
        {/*  /!*  <StatisticsWidget1*!/*/}
        {/*  /!*    className='card-xl-stretch mb-xl-8'*!/*/}
        {/*  /!*    image='abstract-2.svg'*!/*/}
        {/*  /!*    title='Meeting Schedule'*!/*/}
        {/*  /!*    time='03 May 2020'*!/*/}
        {/*  /!*    description='Great blog posts don’t just happen Even the best bloggers need it'*!/*/}
        {/*  /!*  />*!/*/}
        {/*  /!*</div>*!/*/}

        {/*  /!*<div className='col-xl-4'>*!/*/}
        {/*  /!*  <StatisticsWidget1*!/*/}
        {/*  /!*    className='card-xl-stretch mb-5 mb-xl-8'*!/*/}
        {/*  /!*    image='abstract-1.svg'*!/*/}
        {/*  /!*    title='UI Conference'*!/*/}
        {/*  /!*    time='10AM Jan, 2021'*!/*/}
        {/*  /!*    description='AirWays - A Front-end solution for airlines build with ReactJS'*!/*/}
        {/*  /!*  />*!/*/}
        {/*  /!*</div>*!/*/}
        {/*</div>*/}
        {/* end::Row */}

        {/* begin::Row */}
        <div className='row g-5 g-xl-8'>
          <div className='col-xl-4'>
            <StatisticsWidget5
                className='card-xl-stretch mb-xl-8'
                svgIcon='basket'
                color='danger'
                iconColor='white'
                title='Shopping Cart'
                titleColor='white'
                description='Lands, Houses, Ranchos, Farms'
                descriptionColor='white'
            />
          </div>

          <div className='col-xl-4'>
            <StatisticsWidget5
                className='card-xl-stretch mb-xl-8'
                svgIcon='cheque'
                color='primary'
                iconColor='white'
                title='Appartments'
                titleColor='white'
                description='Flats, Shared Rooms, Duplex'
                descriptionColor='white'
            />
          </div>

          <div className='col-xl-4'>
            <StatisticsWidget5
                className='card-xl-stretch mb-5 mb-xl-8'
                svgIcon='chart-simple-3'
                color='success'
                iconColor='white'
                title='Sales Stats'
                titleColor='white'
                description='50% Increased for FY20'
                descriptionColor='white'
            />
          </div>
        </div>
        {/* end::Row */}
        <div className='row g-5 g-xl-8'>
          <TablesWidget9 className='mb-5 mb-xl-8'/>
        </div>

        {/*/!* begin::Row *!/*/}
        {/*<div className='row g-5 g-xl-8'>*/}
        {/*  <div className='col-xl-3'>*/}
        {/*    <StatisticsWidget5*/}
        {/*      className='card-xl-stretch mb-xl-8'*/}
        {/*      svgIcon='chart-simple'*/}
        {/*      color='white'*/}
        {/*      iconColor='primary'*/}
        {/*      title='500M$'*/}
        {/*      description='SAP UI Progress'*/}
        {/*    />*/}
        {/*  </div>*/}

        {/*  <div className='col-xl-3'>*/}
        {/*    <StatisticsWidget5*/}
        {/*      className='card-xl-stretch mb-xl-8'*/}
        {/*      svgIcon='cheque'*/}
        {/*      color='dark'*/}
        {/*      iconColor='white'*/}
        {/*      title='+3000'*/}
        {/*      titleColor='white'*/}
        {/*      description='New Customers'*/}
        {/*      descriptionColor='white'*/}
        {/*    />*/}
        {/*  </div>*/}

        {/*  <div className='col-xl-3'>*/}
        {/*    <StatisticsWidget5*/}
        {/*      className='card-xl-stretch mb-xl-8'*/}
        {/*      svgIcon='briefcase'*/}
        {/*      color='warning'*/}
        {/*      iconColor='white'*/}
        {/*      title='$50,000'*/}
        {/*      titleColor='white'*/}
        {/*      description='Milestone Reached'*/}
        {/*      descriptionColor='white'*/}
        {/*    />*/}
        {/*  </div>*/}

        {/*  <div className='col-xl-3'>*/}
        {/*    <StatisticsWidget5*/}
        {/*      className='card-xl-stretch mb-5 mb-xl-8'*/}
        {/*      svgIcon='chart-pie-simple'*/}
        {/*      color='info'*/}
        {/*      iconColor='white'*/}
        {/*      title='$50,000'*/}
        {/*      titleColor='white'*/}
        {/*      description='Milestone Reached'*/}
        {/*      descriptionColor='white'*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*/!* end::Row *!/*/}

        {/*/!* begin::Row *!/*/}
        {/*<div className='row g-5 g-xl-8'>*/}
        {/*  <div className='col-xl-4'>*/}
        {/*    <StatisticsWidget6*/}
        {/*      className='card-xl-stretch mb-xl-8'*/}
        {/*      color='success'*/}
        {/*      title='Avarage'*/}
        {/*      description='Project Progress'*/}
        {/*      progress='50%'*/}
        {/*    />*/}
        {/*  </div>*/}

        {/*  <div className='col-xl-4'>*/}
        {/*    <StatisticsWidget6*/}
        {/*      className='card-xl-stretch mb-xl-8'*/}
        {/*      color='warning'*/}
        {/*      title='48k Goal'*/}
        {/*      description='Company Finance'*/}
        {/*      progress='15%'*/}
        {/*    />*/}
        {/*  </div>*/}

        {/*  <div className='col-xl-4'>*/}
        {/*    <StatisticsWidget6*/}
        {/*      className='card-xl-stretch mb-xl-8'*/}
        {/*      color='primary'*/}
        {/*      title='400k Impressions'*/}
        {/*      description='Marketing Analysis'*/}
        {/*      progress='76%'*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*/!* end::Row *!/*/}
      </Content>
    </>
  )
}

export {Statistics}
