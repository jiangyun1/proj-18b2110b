let chartData1={
    columns: ['type',  'value'],
    rows: [
      { type: '盈利能力', value: 1.09 }
    ]
}
let chartData2={
    columns: ['type',  'value'],
    rows: [
      { type: '发展能力', value:0.83 }
    ]
}
let chartData3={
  columns: ['type',  'value'],
  rows: [
    { type: '盈利能力', value: 9.45 }
  ]
}
let chartData4={
  columns: ['type',  'value'],
  rows: [
    { type: '盈利能力', value: 0.31 }
  ]
}
let chartData5={
  columns: ['type',  'value'],
  rows: [
    { type: '盈利能力', value: 21.75 }
  ]
}
let chartData6={
  columns: ['type',  'value'],
  rows: [
    { type: '盈利能力', value: 1.77}
  ]
}
let chartData7={
  columns: ['type',  'value'],
  rows: [
    { type: '盈利能力', value: 102.79 }
  ]
}
let chartData8={
  columns: ["日期", "上年同期","本期"],
  rows: [{
          "日期": "1月",
          "上年同期": "78",
          "本期":"61",
      },
      {
          "日期": "2月",
          "上年同期": "73",
          "本期":"47",
      },
      {
          "日期": "3月",
          "上年同期": "7.83",
          "本期":"10",
      },
      {
        "日期": "4月",
        "上年同期": "73",
        "本期":"47",
    },
    {
      "日期": "5月",
      "上年同期": "71",
      "本期":"61",
  },
  {
    "日期": "6月",
    "上年同期": "83",
    "本期":"47",
},
{
  "日期": "7月",
  "上年同期": "23",
  "本期":"47",
},
{
  "日期": "8月",
  "上年同期": "34",
  "本期":"37",
},
{
  "日期": "9月",
  "上年同期": "43",
  "本期":"34",
},
{
  "日期": "10月",
  "上年同期": "53",
  "本期":"67",
},
{
  "日期": "11月",
  "上年同期": "63",
  "本期":"63",
},
{
  "日期": "12月",
  "上年同期": "53",
  "本期":"23",
},

  ]
}
let tableData=[{
  "no": "净资产收益率（%）",
  "field1": "13.40",
  "field2": "10.50",
  "field3": "6.90",
  "field4": "4.00",
  "field5": "-5.60",
  "field6": "1.09",
  "field7": "较差",
  "field8": "2",
 
},
{
  "no": "总资产报酬率（%）",
  "field1": "8.60",
  "field2": "7.20",
  "field3": "4.30",
  "field4": "3.00",
  "field5": "-4.80",
  "field6": "0.31",
  "field7": "较差",
  "field8": "2",
},
{
  "no": "销售（营业）利润率（%）",
  "field1": "18.40",
  "field2": "12.60",
  "field3": "5.40",
  "field4": "-0.40",
  "field5": "-8.00",
  "field6": "21.75",
  "field7": "优秀",
  "field8": "10",
},
{
  "no": "盈余现金保障倍数（倍）",
  "field1": "11.70",
  "field2": "6.20",
  "field3": "1.70",
  "field4": "1.60",
  "field5": "-3.10",
  "field6": "0.83",
  "field7": "较差",
  "field8": "2",
},
{
  "no": "成本费用利润率（%）",
  "field1": "13.30",
  "field2": "10.30",
  "field3": "6.80",
  "field4": "2.60",
  "field5": "-3.20",
  "field6": "9.45",
  "field7": "平均",
  "field8": "6",
},
{
  "no": "资本收益率（%）",
  "field1": "14.50",
  "field2": "11.00",
  "field3": "7.00",
  "field4": "2.70",
  "field5": "-1.40",
  "field6": "1.77",
  "field7": "较差",
  "field8": "2",
},
{
  "no": "成本费用占主营业务收入比重（%）",
  "field1": "86.70",
  "field2": "91.10",
  "field3": "94.70",
  "field4": "97.60",
  "field5": "100.60",
  "field6": "102.79",
  "field7": "较差",
  "field8": "0",
},
{
  "no": "盈利能力",
  "field1": "10.00",
  "field2": "7.00",
  "field3": "5.00",
  "field4": "4.00",
  "field5": "2.00",
  "field6": "0.00",
  "field7": "差【E】",
  "field8": "2.80",
},
]
let tableData1=[
  {
    "field11": "区间",
    "field21":"X>Y1(X<Y1)",
    "field22":"X=Y1",
    "field31":"Y2<X<Y1(Y1<X<Y2)",
    "field32":"X=Y2",
    "field41":"Y3<X<Y2(Y2<X<Y3)",
    "field42":"X=Y3",
    "field51":"Y4<X<Y3(Y3<X<Y4)",
    "field52":"X=Y4",
    "field61":"Y5<X<Y4(Y4<X<Y5)",
    "field62":"X=Y5",
    "field63":"X<Y5(X>Y5)",
   
},
]
let tableData2=[{
  "no": "1",
  "field1": "本期",
  "field2": "10",
  "field3": "69",
  "field4": "40",
  "field5": "60",
  "field6": "13",
  "field7": "34",
  "field8": "20",
  "field9": "23",
  "field10": "34",
  "field11": "11",
  "field12": "45",
 
},
{
  "no": "2",
  "field1": "上年同期",
  "field2": "10",
  "field3": "69",
  "field4": "40",
  "field5": "56",
  "field6": "19",
  "field7": "34",
  "field8": "26",
  "field9": "23",
  "field10": "45",
  "field11": "13",
  "field12": "23",
 
},]
export{
    chartData1,
    chartData2,
    chartData3,
    chartData4,
    chartData5,
    chartData6,
    chartData7,
    chartData8,
    tableData,
    tableData1,
    tableData2
}