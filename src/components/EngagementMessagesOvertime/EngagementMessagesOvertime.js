import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementMessageOverTimeChartOptions from "./engagementHelper.js";
import engagementData from "./engagementData.json";

const EngagementMessagesOverTime = () => {
  const options = engagementMessageOverTimeChartOptions(
      engagementData.messageCountList,
      engagementData.channels
    )
  console.log(options);

 return <HighchartsReact highcharts={Highcharts} options={options} />
 
};

export default EngagementMessagesOverTime;
