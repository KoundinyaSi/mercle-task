import engagementData from "./engagementData.json";

function engagementMessageOverTimeChartOptions(messageCountList, channels) {
  const groupByChannel = messageCountList.reduce((group, message) => {
    const { channelId } = message;
    group[channelId] = group[channelId] ?? [];
    group[channelId].push(message);
    return group;
  }, {});

  let desiredChannels = [];

  Object.keys(groupByChannel).map((key) => {
    if (Object.values(groupByChannel[key]).length > 1) {
      desiredChannels = [...desiredChannels, groupByChannel[key]];
    }
  });
  console.log(desiredChannels);

  let desiredSeries = [];
  desiredSeries = [
    ...desiredChannels[0].map((e) => {
      return [Date.parse(e.timeBucket), Number(e.count)];
    }),
  ];

  console.log(desiredSeries);

  let timeSeries = [];

  timeSeries.push(
    desiredSeries.map((element) => {
      return element[0];
    })
  );

  console.log(timeSeries[0]);
  //  messageCountList[0].forEach((e) => {
  // console.log(desiredSeries);
  //  })
  console.log(desiredSeries);

  let desiredoptions = {
    type: "line",
    title: {
      text: "Count of Messages vs Date",
    },
    xAxis: {
      type: "datetime",
      min: Math.min(...timeSeries[0]),
      max: Math.max(...timeSeries[0]),
      labels: {
        format: "{value:%e %b}",
      },
      title: {
        text: "Date",
      },
    },
    yAxis: {
      type: "number",
      title: {
        text: "Number of Messages",
      },
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "General",
        type: "spline",
        data: desiredSeries,
        tooltip: {
          headerFormat: "<b>{series.name}</b><br />",
          pointFormat: "{point.y} messages on {point.x:%e %b}",
        },
        pointStart: 1,
      },
    ],
  };

  console.log(desiredoptions["series"][0].data);

  // console.log(desiredChannels);
  return desiredoptions;
}

export default engagementMessageOverTimeChartOptions;
