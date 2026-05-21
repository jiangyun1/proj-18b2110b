let data1 = [
    {
        icon: 'el-icon-tiredhuiyuanfenxi',
        index: 'customer',
        title: '客户管理'
    },
 
    {
        icon: 'el-icon-tiredzonglandaping',
        index: 'dashboard',
        title: '智慧大屏'
    },
   
    {
        icon: 'el-icon-tiredshuju1',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportManage',
                title: '报表管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'etl',
                title: '智能抽取'
            }
        ]
    },

    {
        icon: 'el-icon-tiredzizhufenxi',
        index: 'financial',
        title: '财务分析',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'achievement',
                title: '经营业绩分析'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'quality',
                title: '资产质量分析'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'cashflow',
                title: '现金流量分析'
            }
        ]
    },

    {
        icon: 'el-icon-tiredyichang',
        index: 'financialFraud',
        title: '财务审核',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'deptFraud',
                title: '机构概览全景图'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'industryFraud',
                title: '财报识假行业全景图'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'categoryFraud',
                title: '财报识假类型全景图'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'questionFraud',
                title: '财报问题企业全景图'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'companyFraud',
                title: '单一企业识假全景图'
            },
            // {
            //     icon: 'el-icon-lx-friend',
            //     index: '',
            //     title: '机器集成学习',
            //     subs: [
            //         {
            //             icon: 'el-icon-lx-friend',
            //             index: 'reportManage',
            //             title: '模型训练'
            //         },
            //         {
            //             sicon: 'el-icon-lx-friend',
            //             index: 'etl',
            //             title: '模型识别'
            //         }
            //     ]
            // },
        ]
    },
    {
        icon: 'el-icon-tiredfengxianyujing',
        index: 'earlyWarning',
        title: '风险预警',
        subs: [
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'oneParamEarlyWarning',
                title: '单变量AI模型预警',
                subs: [
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'financialWarning',
                        title: '财务风险全景图'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'changeIndexWarning',
                        title: '指标异常检测预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'indexWarning',
                        title: '关键指标行业预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'changeWarning',
                        title: '异常波动风险预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtForecast',
                        title: '合理负债规模预测'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'lossWarning',
                        title: '经营亏损风险预警'
                    }
                ]
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'moreParamsEarlyWarning',
                title: '多变量AI模型预警',
                subs: [
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'fundWarning',
                        title: '资金链紧张风险预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'repaymentWarning',
                        title: '偿债能力下降预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'zScoreModel',
                        title: 'Z-score风险预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'fScoreModel',
                        title: 'F分数风险预警'      
                    },
                    // {
                    //     icon: 'el-icon-lx-friend',
                    //     index: 'palipModel',
                    //     title: '黑色倒闭风险预警'
                    // },
                    // {
                    //     icon: 'el-icon-lx-friend',
                    //     index: 'blackModel',
                    //     title: '帕利普分析模型'
                    // },
                    // {
                    //     icon: 'el-icon-lx-friend',
                    //     index: 'sensitiveWarning',
                    //     title: '财务敏感预警'
                    // }
                ]
            }
        ]
    },
    // {
    //     icon: 'el-icon-tiredpincifenxi',
    //     index: '',
    //     title: '税务预警',
    //     subs: [
    //         {
    //             icon: 'el-icon-lx-friend',
    //             index: '',
    //             title: '纳税检测全景图'
    //         },
     
    //     ]
    // }, 
    {
        icon: 'el-icon-tiredpincifenxi',
        index: 'industryAnalysis',
        title: '行业分析',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'industryAppraise',
                title: '行业评估'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'specialAnalysis',
                title: '专项分析',
                subs: [
                    {
                        icon: 'el-icon-s-flag',
                        index: 'comprehensiveAnalysis',
                        title: '综合评估'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'profitability',
                        title: '盈利能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'developmentCapacity',
                        title: '发展能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtRisk',
                        title: '债务风险'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'operatingEfficiency',
                        title: '经营效率'
                    }
                ]
            }
        ]
    }, 
    // {
    //     icon: 'el-icon-tiredyuce',
    //     index: 'ProspectForecast',
    //     title: '前景预测',
    //     subs: [
    //         {
              
    //             index: 'ProfitForecast',
    //             title: '利润前景预测模型'
    //         },
    //         {
        
    //             index: 'assetstructure',
    //             title: '资产结构预测模型'
    //         },
    //         {
    //             index: 'Solvency',
    //             title: '偿债能力预测模型'
    //         },
    //         {
    //             index: 'CashflowForecast',
    //             title: '现金流量预测模型'
    //         },
    //         {
    //             index: 'Capitalchainforecast',
    //             title: '资金链预测与融资模型'
    //         },
    //          {
    //             index: 'Dupontprediction',
    //             title: '绩效综合评价预测模型'
    //         },
    //         {
    //             index: 'EVA',
    //             title: '经济增加值(EVA)模型'
    //         },
    //         {
    //             index: 'Thecost',
    //             title: '成本费用利润率预测模型'
    //         },
    //         {
    //             index: 'Thecost',
    //             title: '营业安全水平模型'
    //         },
    //     ]                    
    // },
    {
        icon: 'el-icon-tiredbaogaoyuan',
        index: 'intelligenceReport',
        title: '智慧报告',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'intelligenceReport',
                title: '智慧报告',

            },
            // {
            //     icon: 'el-icon-lx-friend',
            //     index: 'reportDIY',
            //     title: '自定义报告',
            // }
        ]
    },
    {
        icon: 'el-icon-tiredbaogaoyuan',
        index: 'indexmanagement',
        title: '指标管理',
        subs: [

            {
                icon: 'el-icon-lx-friend',
                index: 'definingindicators',
                title: '定义指标',

            },
            // {
            //     icon: 'el-icon-lx-friend',
            //     index: '',
            //     title: '指标模板',
            // },
            // {
            //     icon: 'el-icon-lx-friend',
            //     index: '',
            //     title: '指标应用',
            // },
            // {
            //     icon: 'el-icon-lx-friend',
            //     index: '',
            //     title: '指标比较',
            // },

        ]
    },
    {
        icon: 'el-icon-tiredshujufenxi',
        index: 'datacenter',
        title: '数据工厂',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportData',
                title: '报表数据'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'industryData',
                title: '行业数据',
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'paramsData',
                title: '参数数据',
            }
        ]
    }, 
    {
        icon: 'el-icon-tiredjiaoyizhongxin',
        index: 'tradingcenter',
        title: '交易中心',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'myaccount',
                title: '我的账户'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'myconcerns',
                title: '我的关注',
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'ordermanagement',
                title: '订单管理',
            },
                {
                    icon: 'el-icon-lx-friend',
                    index: 'invoiceapplication',
                    title: '发票管理',
                },
               
            
        ]
    },
    {
        icon: 'el-icon-tiredxitongshezhi1',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'menuManager',
                title: '菜单管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'resourceManager',
                title: '权限管理'
            }
        ]
    }
]
let data2 = [
    {
        icon: 'el-icon-s-order',
        index: 'customer',
        title: '客户管理'
    },
    {
        icon: 'el-icon-user-solid',
        index: 'dashboard',
        title: '智慧大屏'
    },
   
    {
        icon: 'el-icon-s-claim',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportManage',
                title: '报表管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'etl',
                title: '智能抽取'
            }
        ]
    },
    {
        icon: 'el-icon-s-data',
        index: 'financialFraud',
        title: '财务审核',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'deptFraud',
                title: '机构概览全景图'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'industryFraud',
                title: '财报识假行业全景图'
            },
            {
                index: 'categoryFraud',
                title: '财报识假类型全景图'
            },
            {
                index: 'questionFraud',
                title: '财报问题企业全景图'
            },
            {
                index: 'companyFraud',
                title: '单一企业识假全景图'
            }
        ]
    },
    
    {
        icon: 'el-icon-s-flag',
        index: 'industryAnalysis',
        title: '行业分析',
        subs: [
            {
                icon: 'el-icon-s-flag',
                index: 'industryAppraise',
                title: '行业评估'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'specialAnalysis',
                title: '专项分析',
                subs: [
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'comprehensiveAnalysis',
                        title: '综合评估'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'profitability',
                        title: '盈利能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'developmentCapacity',
                        title: '发展能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtRisk',
                        title: '债务风险'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'operatingEfficiency',
                        title: '经营效率'
                    }
                ]
            }
        ]
    },{
        icon: 'el-icon-s-tools',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            }
        ]
    }
]
let data3 = [
    {
        icon: 'el-icon-s-order',
        index: 'customer',
        title: '客户管理'
    },
    // {
    //     icon: 'el-icon-user-solid',
    //     index: 'dashboard',
    //     title: '智慧大屏'
    // },
   
    {
        icon: 'el-icon-s-claim',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportManage',
                title: '报表管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'etl',
                title: '智能抽取'
            }
        ]
    },

   
    {
        icon: 'el-icon-s-release',
        index: 'earlyWarning',
        title: '风险预警',
        subs: [
            // {
            //     icon: 'el-icon-lx-friend',
            //     index: 'oneParamEarlyWarning',
            //     title: '单变量预警模型',
            //     subs: [
            //         {
            //             icon: 'el-icon-lx-friend',
            //             index: 'financialWarning',
            //             title: '财务风险全景图'
            //         },
            //         {
            //             icon: 'el-icon-lx-friend',
            //             index: 'changeIndexWarning',
            //             title: '指标异常检测预警'
            //         },
            //         {
            //             icon: 'el-icon-lx-friend',
            //             index: 'indexWarning',
            //             title: '关键指标行业预警'
            //         },
            //         {
            //             icon: 'el-icon-lx-friend',
            //             index: 'changeWarning',
            //             title: '异常波动风险预警'
            //         },
            //         {
            //             icon: 'el-icon-lx-friend',
            //             index: 'debtForecast',
            //             title: '合理负债规模预测'
            //         },
            //         {
            //             icon: 'el-icon-lx-friend',
            //             index: 'lossWarning',
            //             title: '经营亏损风险预警'
            //         }
            //     ]
            // },
            {
                icon: 'el-icon-lx-friend',
                index: 'moreParamsEarlyWarning',
                title: '多变量预警模型',
                subs: [
                    // {
                    //     icon: 'el-icon-lx-friend',
                    //     index: 'fundWarning',
                    //     title: '客户资金链紧张风险预警'
                    // },
                    // {
                    //     icon: 'el-icon-lx-friend',
                    //     index: 'repaymentWarning',
                    //     title: '客户偿债能力下降预警'
                    // },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'zScoreModel',
                        title: '阿特曼Z-score分析模型'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'fScoreModel',
                        title: 'F分数模型分析'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'palipModel',
                        title: '帕利普分析模型'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'blackModel',
                        title: '黑色倒闭'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'sensitiveWarning',
                        title: '财务敏感预警'
                    }
                ]
            }
        ]
    },
    {
        icon: 'el-icon-s-flag',
        index: 'industryAnalysis',
        title: '行业分析',
        subs: [
            {
                icon: 'el-icon-s-flag',
                index: 'industryAppraise',
                title: '行业评估'
            },
     
        ]
    },
     {
        icon: 'el-icon-s-tools',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            }
        ]
    }
]
let data4 = [
    {
        icon: 'el-icon-s-order',
        index: 'customer',
        title: '客户管理'
    },
    {
        icon: 'el-icon-user-solid',
        index: 'dashboard',
        title: '智慧大屏'
    },

    {
        icon: 'el-icon-s-claim',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportManage',
                title: '报表管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'etl',
                title: '智能抽取'
            }
        ]
    },

    {
        icon: 'el-icon-s-marketing',
        index: 'financial',
        title: '财务分析',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'achievement',
                title: '经营业绩分析'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'quality',
                title: '资产质量分析'
            },
            {
                index: 'cashflow',
                title: '现金流量分析'
            }
        ]
    },

    
    {
        icon: 'el-icon-s-flag',
        index: 'industryAnalysis',
        title: '行业分析',
        subs: [
            {
                icon: 'el-icon-s-flag',
                index: 'industryAppraise',
                title: '行业评估'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'specialAnalysis',
                title: '专项分析',
                subs: [
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'comprehensiveAnalysis',
                        title: '综合评估'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'profitability',
                        title: '盈利能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'developmentCapacity',
                        title: '发展能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtRisk',
                        title: '债务风险'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'operatingEfficiency',
                        title: '经营效率'
                    }
                ]
            }
        ]
    }, {
        icon: 'el-icon-s-tools',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            }
        ]
    }
]
let data5 = [
    {
        icon: 'el-icon-tiredhuiyuanfenxi',
        index: 'customer',
        title: '客户管理'
    },
    {
        icon: 'el-icon-tiredzonglandaping',
        index: 'dashboard',
        title: '智慧大屏'
    },
   
    {
        icon: 'el-icon-tiredshuju1',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'reportManage',
                title: '报表管理'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'etl',
                title: '智能抽取'
            }
        ]
    },

    {
        icon: 'el-icon-tiredzizhufenxi',
        index: 'financial',
        title: '财务分析',
        subs: [
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'achievement',
                title: '经营业绩分析'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'quality',
                title: '资产质量分析'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'cashflow',
                title: '现金流量分析'
            }
        ]
    },

    {
        icon: 'el-icon-tiredyichang',
        index: 'financialFraud',
        title: '财务审核',
        subs: [
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'deptFraud',
                title: '机构概览全景图'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'industryFraud',
                title: '财报识假行业全景图'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'categoryFraud',
                title: '财报识假类型全景图'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'questionFraud',
                title: '财报问题企业全景图'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'companyFraud',
                title: '单一企业识假全景图'
            }
        ]
    },
    {
        icon: 'el-icon-tiredfengxianyujing',
        index: 'earlyWarning',
        title: '风险预警',
        subs: [
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'oneParamEarlyWarning',
                title: '单变量AI模型预警',
                subs: [
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'financialWarning',
                        title: '财务风险全景图'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'changeIndexWarning',
                        title: '指标异常检测预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'indexWarning',
                        title: '关键指标行业预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'changeWarning',
                        title: '异常波动风险预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtForecast',
                        title: '合理负债规模预测'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'lossWarning',
                        title: '经营亏损风险预警'
                    }
                ]
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'moreParamsEarlyWarning',
                title: '多变量AI模型预警',
                subs: [
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'fundWarning',
                        title: '资金链紧张风险预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'repaymentWarning',
                        title: '偿债能力下降预警'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'zScoreModel',
                        title: '阿特曼Z-score分析'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'fScoreModel',
                        title: 'F分数模型分析'
                    },
                    // {
                    //     icon: 'el-icon-lx-friend',
                    //     index: 'palipModel',
                    //     title: '帕利普分析模型'
                    // },
                    // {
                    //     icon: 'el-icon-lx-friend',
                    //     index: 'blackModel',
                    //     title: '黑色倒闭'
                    // },
                    // {
                    //     icon: 'el-icon-lx-friend',
                    //     index: 'sensitiveWarning',
                    //     title: '财务敏感预警'
                    // }
                ]
            }
        ]
    },
    {
        icon: 'el-icon-tiredpincifenxi',
        index: 'industryAnalysis',
        title: '行业分析',
        subs: [
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'industryAppraise',
                title: '行业评估'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'specialAnalysis',
                title: '专项分析',
                subs: [
                    {
                        icon: 'el-icon-s-flag',
                        index: 'comprehensiveAnalysis',
                        title: '综合评估'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'profitability',
                        title: '盈利能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'developmentCapacity',
                        title: '发展能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtRisk',
                        title: '债务风险'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'operatingEfficiency',
                        title: '经营效率'
                    }
                ]
            }
        ]
    }, 
    // {
    //     icon: 'el-icon-tiredyuce',
    //     index: '',
    //     title: '前景预测',
    //     subs: [
    //         {
    //             icon: 'el-icon-lx-friend',
    //             index: '',
    //             title: '利润预测模型'
    //         },
    //         {
    //             icon: 'el-icon-lx-friend',
    //             index: 'industryFraud',
    //             title: '资产结构预测'
    //         },
    //         {
    //             index: 'categoryFraud',
    //             title: '偿债能力预测'
    //         },
    //         {
    //             index: 'questionFraud1',
    //             title: '杜邦预测模型'
    //         },
    //         {
    //             index: 'companyFraud',
    //             title: 'EVA预测模型'
    //         },
    //          {
    //             index: 'questionFraud',
    //             title: '资金链与融资预测模型'
    //         },
    //     ]                    
    // },
    {
        icon: 'el-icon-tiredbaogaoyuan',
        index: 'intelligenceReport',
        title: '智慧报告',
        subs: [
            // {
            //     icon: 'el-icon-lx-friend',
            //     index: 'intelligenceReportUp',
            //     title: '智慧报告上级',

            // },
            {
                icon: 'el-icon-lx-friend',
                index: 'intelligenceReport',
                title: '智慧报告',

            },
            {
                icon: 'el-icon-lx-friend',
                index: 'reportDIY',
                title: '自定义报告',
            }
        ]
    },
    {
        icon: 'el-icon-tiredshujufenxi',
        index: 'datacenter',
        title: '数据中心',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportData',
                title: '报表数据'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'industryData',
                title: '行业数据',
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'paramsData',
                title: '参数数据',
            }
        ]
    }, {
        icon: 'el-icon-tiredxitongshezhi1',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            }
        ]
    }
]
let data6 = [
    {
        icon: 'el-icon-tiredhuiyuanfenxi',
        index: 'customer',
        title: '客户管理'
    },

    {
        icon: 'el-icon-tiredshuju1',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportManage',
                title: '报表管理'
            },
        ]
    },

   
    {
        icon: 'el-icon-tiredpincifenxi',
        index: 'industryAnalysis',
        title: '行业分析',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'industryAppraise',
                title: '行业评估'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'specialAnalysis',
                title: '专项分析',
                subs: [
                    {
                        icon: 'el-icon-s-flag',
                        index: 'comprehensiveAnalysis',
                        title: '综合评估'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'profitability',
                        title: '盈利能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'developmentCapacity',
                        title: '发展能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtRisk',
                        title: '债务风险'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'operatingEfficiency',
                        title: '经营效率'
                    }
                ]
            }
        ]
    }, 
    {
        icon: 'el-icon-tiredbaogaoyuan',
        index: 'intelligenceReport',
        title: '智慧报告',
        subs: [
            // {
            //     icon: 'el-icon-lx-friend',
            //     index: 'intelligenceReportUp',
            //     title: '智慧报告上级',

            // },
            {
                icon: 'el-icon-lx-friend',
                index: 'intelligenceReport',
                title: '智慧报告',

            },
            {
                icon: 'el-icon-lx-friend',
                index: 'reportDIY',
                title: '自定义报告',
            }
        ]
    },
   
    {
        icon: 'el-icon-tiredxitongshezhi1',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            }
        ]
    }
]
let data7 = [
    {
        icon: 'el-icon-tiredhuiyuanfenxi',
        index: 'customer',
        title: '客户管理'
    },

    {
        icon: 'el-icon-tiredshuju1',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportManage',
                title: '报表管理'
            },
        ]
    },

   
    {
        icon: 'el-icon-tiredpincifenxi',
        index: 'industryAnalysis',
        title: '行业分析',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'industryAppraise',
                title: '行业评估'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'specialAnalysis',
                title: '专项分析',
                subs: [
                    {
                        icon: 'el-icon-s-flag',
                        index: 'comprehensiveAnalysis',
                        title: '综合评估'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'profitability',
                        title: '盈利能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'developmentCapacity',
                        title: '发展能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtRisk',
                        title: '债务风险'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'operatingEfficiency',
                        title: '经营效率'
                    }
                ]
            }
        ]
    }, 

    {
        icon: 'el-icon-tiredshujufenxi',
        index: 'datacenter',
        title: '数据工厂',
        subs: [
         
            {
                icon: 'el-icon-lx-friend',
                index: 'industryData',
                title: '行业数据',
            },
       
        ]
    },
   
    {
        icon: 'el-icon-tiredxitongshezhi1',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            }
        ]
    }
]
let data8 = [
    {
        icon: 'el-icon-tiredhuiyuanfenxi',
        index: 'customer',
        title: '客户管理'
    },

    {
        icon: 'el-icon-tiredshuju1',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportManage',
                title: '报表管理'
            },
        ]
    },

   
    {
        icon: 'el-icon-tiredjiaoyizhongxin',
        index: 'tradingcenter',
        title: '精准营销',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'myaccount',
                title: '我的账户'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'myconcerns',
                title: '我的关注',
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'ordermanagement',
                title: '订单管理',
            },
                {
                    icon: 'el-icon-lx-friend',
                    index: 'invoiceapplication',
                    title: '发票管理',
                },
               
            
        ]
    },
    {
        icon: 'el-icon-tiredshujufenxi',
        index: 'datacenter',
        title: '数据工厂',
        subs: [
         
            {
                icon: 'el-icon-lx-friend',
                index: 'industryData',
                title: '行业数据',
            },
       
        ]
    },
   
    {
        icon: 'el-icon-tiredxitongshezhi1',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            }
        ]
    }
]
let data9 = [
    {
        icon: 'el-icon-tiredhuiyuanfenxi',
        index: 'customer',
        title: '客户管理'
    },

    {
        icon: 'el-icon-tiredshuju1',
        index: 'reportdata',
        title: '智能报表',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'reportManage',
                title: '报表管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'etl',
                title: '智能抽取'
            }
        ]
    },

   
    {
        icon: 'el-icon-tiredpincifenxi',
        index: 'industryAnalysis',
        title: '行业分析',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'industryAppraise',
                title: '行业评估'
            },
            {
                icon: 'el-icon-tirederjicaidan',
                index: 'specialAnalysis',
                title: '专项分析',
                subs: [
                    {
                        icon: 'el-icon-s-flag',
                        index: 'comprehensiveAnalysis',
                        title: '综合评估'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'profitability',
                        title: '盈利能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'developmentCapacity',
                        title: '发展能力'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'debtRisk',
                        title: '债务风险'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: 'operatingEfficiency',
                        title: '经营效率'
                    }
                ]
            }
        ]
    }, 
    {
        icon: 'el-icon-tiredshujufenxi',
        index: 'datacenter',
        title: '数据工厂',
        subs: [
         
            {
                icon: 'el-icon-lx-friend',
                index: 'industryData',
                title: '行业数据',
            },
       
        ]
    },
   
    {
        icon: 'el-icon-tiredxitongshezhi1',
        index: 'system',
        title: '系统设置',
        subs: [
            {
                icon: 'el-icon-lx-friend',
                index: 'userManager',
                title: '用户管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'deptManager',
                title: '机构管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'roleManager',
                title: '角色管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'menuManager',
                title: '菜单管理'
            },
            {
                icon: 'el-icon-lx-friend',
                index: 'resourceManager',
                title: '权限管理'
            }
        ]
    }
]
export {
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
}