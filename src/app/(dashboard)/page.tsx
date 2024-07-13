import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ProgressBar,
} from "react-bootstrap";
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import UserChart from "@/components/Page/Dashboard/UserChart";
import IncomeChart from "@/components/Page/Dashboard/IncomeChart";
import ConversionChart from "@/components/Page/Dashboard/ConversionChart";
import SessionChart from "@/components/Page/Dashboard/SessionChart";
import TrafficChart from "@/components/Page/Dashboard/TrafficChart";
import { getDictionary } from "@/locales/dictionary";
import { categorySales, totalSales } from "../../constants/data";
import { StackedChart } from "@/components/Page/Dashboard/StackedChart";
import PieChart from "@/components/Page/Dashboard/PieChart";

export default async function Page() {
  const dict = await getDictionary();

  const tpSalesCard = () => {
    return (
      <div className="row">
        {totalSales.map((data) => (
          <div className="col-sm-6 col-lg-3">
            <Card
              bg={data.deviation > 0 ? "success" : "primary"}
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
              <div className="mt-3 mx-3" style={{ height: "70px" }}>
                <UserChart salesData={data.salesData} />
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  };

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
            style={{ "--bs-card-cap-bg": "#3b5998" } as React.CSSProperties}
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
            style={{ "--bs-card-cap-bg": "#00aced" } as React.CSSProperties}
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
            style={{ "--bs-card-cap-bg": "#4875b4" } as React.CSSProperties}
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

      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader>Sales by category</CardHeader>
            <CardBody>
              <br />
              <div className="table-responsive">
                <table className="table border mb-0">
                  <thead className="fw-semibold">
                    <tr className="align-middle table-light dark:table-dark">
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Percentage sales</th>
                      <th>Total amount</th>
                    </tr>
                  </thead>
                  <tbody>
										{categorySales.map(itemData => <tr className="align-middle" style={{padding: '5px'}}>
											<td>{itemData?.name}</td>
											<td>{itemData?.qty}</td>
											<td>{itemData?.percentage}</td>
											<td>{itemData?.totalSales}</td>
										</tr>)}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
