// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-one-expression-per-line */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap'
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import UserChart from '@/components/Page/Dashboard/UserChart'
import { getDictionary } from '@/locales/dictionary'
import {
  bottomSellingItems,
  topSellingItems,
  totalSales,
} from '@/constants/data'
import { StackedChart } from '@/components/Page/Dashboard/StackedChart'
import PieChart from '@/components/Page/Dashboard/PieChart'
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableDataCell,
  CTableRow,
} from '@coreui/react'
import BarChart from '@/components/Page/Dashboard/BarChart'

export default async function Page() {
  const dict = await getDictionary()

  const tpSalesCard = () => (
    <div className="row">
      {totalSales.map((data) => (
        <div className="col-sm-6 col-lg-3" key={Math.random()}>
          <Card
            bg={data.deviation > 0 ? 'success' : 'primary'}
            text="white"
            className="mb-4"
          >
            <CardHeader>{data.name}</CardHeader>
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  {data.totalSales}
                  <span className="fs-6 ms-2 fw-normal">
                    ({data.deviation}%
                    {data.deviation < 0 ? (
                      <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                    ) : (
                      <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                    )}
                    )
                  </span>
                </div>
              </div>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <UserChart salesData={data.salesData} />
            </div>
          </Card>
        </div>
      ))}
    </div>
  )

  return (
    <div>
      {tpSalesCard()}
      <Card className="mb-4">
        <CardBody>
          <h4 className="mb-0">Third party Sales</h4>
          <StackedChart />
        </CardBody>
      </Card>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <Card
            className="mb-4"
            style={{ '--bs-card-cap-bg': '#3b5998' } as React.CSSProperties}
          >
            <CardHeader className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faFacebookF}
                fixedWidth
                size="3x"
                className="my-4 text-white"
              />
            </CardHeader>
            <CardBody>
              <div className="row text-center">
                <div className="col">
                  <div className="fs-5 fw-semibold">89k</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.facebook.label1}
                  </div>
                </div>
                <div className="vr p-0" />
                <div className="col">
                  <div className="fs-5 fw-semibold">459</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.facebook.label2}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-4">
          <Card
            className="mb-4"
            style={{ '--bs-card-cap-bg': '#00aced' } as React.CSSProperties}
          >
            <CardHeader className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faTwitter}
                fixedWidth
                size="3x"
                className="my-4 text-white"
              />
            </CardHeader>
            <CardBody>
              <div className="row text-center">
                <div className="col">
                  <div className="fs-5 fw-semibold">973k</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.twitter.label1}
                  </div>
                </div>
                <div className="vr p-0" />
                <div className="col">
                  <div className="fs-5 fw-semibold">1.792</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.twitter.label2}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-4">
          <Card
            className="mb-4"
            style={{ '--bs-card-cap-bg': '#4875b4' } as React.CSSProperties}
          >
            <CardHeader className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                fixedWidth
                size="3x"
                className="my-4 text-white"
              />
            </CardHeader>
            <CardBody>
              <div className="row text-center">
                <div className="col">
                  <div className="fs-5 fw-semibold">500+</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.instagram.label1}
                  </div>
                </div>
                <div className="vr p-0" />
                <div className="col">
                  <div className="fs-5 fw-semibold">292</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.instagram.label2}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <Card style={{ height: '100%' }}>
        <CardBody>
          <div className="row">
            <div className="col-md-6">
              <PieChart />
            </div>
            <div className="col-md-6">
              <h4>Top selling items</h4>
              <div className="table-responsive">
                <CTable color="success" striped bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Category</CTableHeaderCell>
                      <CTableHeaderCell>Percentage sales</CTableHeaderCell>
                      <CTableHeaderCell>Total amount</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {topSellingItems().map((itemData) => (
                      <CTableRow key={Math.random()}>
                        <CTableDataCell>{itemData?.name}</CTableDataCell>
                        <CTableDataCell>{itemData?.percentage}</CTableDataCell>
                        <CTableDataCell>{itemData?.totalSales}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
              <br />
              <h4>Bottom selling items</h4>
              <div className="table-responsive">
                <CTable color="warning" striped bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Category</CTableHeaderCell>
                      <CTableHeaderCell>Percentage sales</CTableHeaderCell>
                      <CTableHeaderCell>Total amount</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {bottomSellingItems().map((itemData) => (
                      <CTableRow key={Math.random()}>
                        <CTableDataCell>{itemData?.name}</CTableDataCell>
                        <CTableDataCell>{itemData?.percentage}</CTableDataCell>
                        <CTableDataCell>{itemData?.totalSales}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <br />
      <Card>
        <CardBody>
          <h4>Revenue</h4>
          <BarChart />
        </CardBody>
        <CardFooter>
          <h6>Total sales: $951.9</h6>
        </CardFooter>
      </Card>
    </div>
  )
}
