import React from 'react'
import FeaturedInfo from '../../component/featuredinfo/FeaturedInfo'
import Chart from '../../component/chart/Chart'
import WidgetLg from '../../component/widgetLg/WidgetLg';
import WidgetSm from '../../component/widgetSm/WidgetSm';
import "./home.css";
import {userData} from "../../dummyData"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
