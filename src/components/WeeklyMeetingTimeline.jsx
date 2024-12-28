import React, { useState } from 'react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/ui/card";

const WeeklyMeetingTimeline = () => {
  const meetings = [
    { 
      week: '3月第1周', 
      status: true, 
      date: '3/4',
      content: {
        topics: ['社交媒体中隐私数据传播与保护'],
        papers: ['Privacy Data Propagation and Prevervation in Social Media: a Real-world Case Study']
      }
    },
    { 
      week: '3月第2周', 
      status: true, 
      date: '3/11',
      content: {
        topics: ['两个免费的GPU服务器平台', '机器翻译实验','情感分析项目'],
        papers: ['Colab、SageMaker', 'Seq2Seq','Glove词嵌入、双向LSTM']
      }
    },
    { 
      week: '3月第3周', 
      status: true, 
      date: '3/16',
      content: {
        topics: ['BERT'],
        papers: ['BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding']
      }
    },
    { 
      week: '3月第4周', 
      status: true, 
      date: '3/22',
      content: {
        topics: ['词嵌入技术演进'],
        papers: ['one-hot','词袋模型','TF-IDF','Elmo','Bert','GPT']
      }
    },
    { 
      week: '4月第1周', 
      status: true, 
      date: '4/1',
      content: {
        topics: ['网络流量分类'],
        papers: ['基于自适应卷积神经网络的网络流量分类(北邮硕士论文)']
      }
    },
    { 
      week: '4月第2周', 
      status: true, 
      date: '4/8',
      content: {
        topics: ['网络原始流量数据预处理', '工程教育数据库项目(文法学部)'],
        papers: ['DL-IDS: Extracting Features Using CNN-LSTM HybridNetwork for Intrusion Detection System','时间分割、流量分割、生成和标记PKL文件、统一长度和矩阵生成、one-hot编码']
      }
    },
    { 
      week: '4月第3周', 
      status: true, 
      date: '4/14',
      content: {
        topics: ['流量分类框架', '项目'],
        papers: ['https://github.com/lulu-cloud/TrafficClassificationPandemonium']
      }
    },
    { 
      week: '4月第5周', 
      status: true, 
      date: '4/29',
      content: {
        topics: ['未知恶意流量分类方法', '项目+32972A新表'],
        papers: ['基于生成式零样本学习的未知恶意流量分类方法', '零样本学习','生成对抗网络','条件生成对抗网络']
      }
    },
    { 
      week: '5月第2周', 
      status: true, 
      date: '5/13',
      content: {
        topics: ['恶意卫星检测相关', '项目'],
        papers: ['基于深度学习的入侵检测系统', 'A new Intelligent Satellite Deep Learning Network Forensic framework for smart satellite networks','A Deep Learning-Based Smart Framework for Cyber-Physical and Satellite System Security Threats Detection','Deep Learning Based Hybrid Intrusion Detection Systems to Protect Satellite Networks']
      }
    },
    { 
      week: '5月第3周', 
      status: true, 
      date: '5/20',
      content: {
        topics: ['基于深度学习的智能框架用于网络物理和卫星系统安全威胁检测','项目'],
        papers: ['A Deep Learning-Based Smart Framework for Cyber-Physical and Satellite System Security Threats Detection']
      }
    },
    { 
      week: '5月第4周', 
      status: true, 
      date: '5/27',
      content: {
        topics: ['卫星互联网安全风险及应对措施分析'],
        papers: ['卫星互联网安全风险及应对措施分析(天地一体化信息网络)']
      }
    },
    { 
      week: '6月第1周', 
      status: true, 
      date: '6/3',
      content: {
        topics: ['基于深度联邦学习的极端卫星通信威胁检测模型','项目'],
        papers: ['Deep-Federated-Learning-Based Threat Detection Model for Extreme Satellite Communications','DAE','联邦学习+差分隐私','威胁检测模型']
      }
    },
    { 
      week: '6月第2周', 
      status: true, 
      date: '6/11',
      content: {
        topics: ['DSFL: 面向能量感知LEO星座计算的分布式卫星联邦学习'],
        papers: ['DSFL: Decentralized Satellite Federated Learning for Energy-Aware LEO Constellation Computing']
      }
    },
    { 
      week: '6月第3周', 
      status: true, 
      date: '6/17',
      content: {
        topics: ['去中心化联邦学习——调查与展望','云计算与分布式系统作业'],
        papers: ['Decentralized Federated Learning: Fundamentals, State of the Art, Frameworks, Trends, and Challenges']
      }
    },

    { 
      week: '7月第1周', 
      status: true, 
      date: '7/1',
      content: {
        topics: ['将卫星缝合至边缘：普适且高效的低轨卫星联邦学习','项目'],
        papers: ['Stitching Satellites to the Edge: Pervasive and Efficient Federated LEO Satellite Learning']
      }
    },
    { 
      week: '7月第2周', 
      status: true, 
      date: '7/8',
      content: {
        topics: ['基于联邦学习的LEO卫星恶意流量检测'],
        papers: ['流量分类','差分隐私','模型参数交换策略改进','模型参数聚合方式改进','评价指标']
      }
    },
    { 
      week: '7月第3周', 
      status: true, 
      date: '7/15',
      content: {
        topics: ['FedStellar(NEBULA)'],
        papers: ['https://github.com/CyberDataLab/nebula']
      }
    },
    { 
      week: '8月第1周', 
      status: true, 
      date: '8/5',
      content: {
        topics: ['假期情况汇报'],
        papers: ['驾照到手']
      }
    },
    { 
      week: '8月第2周', 
      status: true, 
      date: '8/12',
      content: {
        topics: ['基于联邦学习的LEO卫星恶意流量检测方案改进','收到基金撰写任务'],
        papers: ['模型分发策略','星座内模型交换策略','星座内模型聚合策略']
      }
    },
    { 
      week: '8月第3周', 
      status: true, 
      date: '8/19',
      content: {
        topics: ['基金撰写进度汇报'],
        papers: ['基于联邦学习的LEO卫星恶意流量检测研究']
      }
    },
    { 
      week: '8月第4周', 
      status: true, 
      date: '8/27',
      content: {
        topics: ['基金撰写进度汇报'],
        papers: ['初稿改进']
      }
    },
    { 
      week: '9月第1周', 
      status: true, 
      date: '9/2',
      content: {
        topics: ['基金撰写完成'],
        papers: ['基金撰写汇总并提交']
      }
    },
    { 
      week: '9月第2周', 
      status: true, 
      date: '9/9',
      content: {
        topics: ['基于混合 NOMA-OFDM 的低轨卫星星座与高空平台集成的通信高效联邦学习'],
        papers: ['Communication-Efficient Federated Learning for  LEO Constellations Integrated With HAPs  Using Hybrid NOMA-OFDM']
      }
    },
    { 
      week: '9月第4周', 
      status: true, 
      date: '9/23',
      content: {
        topics: ['卫星联邦学习中的客户端选择'],
        papers: ['Towards Client Select in Satellite Federated Learning']
      }
    },
    { 
      week: '10月第2周', 
      status: true, 
      date: '10/7',
      content: {
        topics: ['FedPSO：利用粒子群优化算法的联邦学习以降低通信成本'],
        papers: ['FedPSO：Federated Learning Using Particle Swarm Optimization to Reduce Communication Costs']
      }
    },
    { 
      week: '10月第3周', 
      status: true, 
      date: '10/14',
      content: {
        topics: ['基于卫星和地面站连接密度的动态聚合联邦学习'],
        papers: ['Federated Learning with Dynamic Aggregation Based on Connection Density at Satellites and Ground Stations']
      }
    },
    { 
      week: '10月第4周', 
      status: true, 
      date: '10/21',
      content: {
        topics: ['卫星联邦学习轨道内分组方案设计'],
        papers: ['物理分组','数据相似度评估','相似性分组','组合与调整']
      }
    },
    { 
      week: '10月第5周', 
      status: true, 
      date: '10/28',
      content: {
        topics: ['分组方案改进'],
        papers: ['参数设置','初始化','分组','动态阈值调整','代表节点选择']
      }
    },
    { 
      week: '11月第2周', 
      status: true, 
      date: '11/11',
      content: {
        topics: ['分组方案完善','准备撰写专利'],
        papers: ['方案展示']
      }
    },
    { 
      week: '11月第3周', 
      status: true, 
      date: '11/18',
      content: {
        topics: ['聚合方案初步想法', '专利撰写完成'],
        papers: ['借鉴双触发聚合方案并完善']
      }
    },
    { 
      week: '11月第4周', 
      status: true, 
      date: '11/25',
      content: {
        topics: ['基于联邦学习的LEO卫星恶意流量检测研究方案整体汇报'],
        papers: ['研究背景和意义','关键问题分析&解决思路','具体方案设计——分组+代表节点轮换+双触发聚合+多因素动态权重计算']
      }
    },
    { 
      week: '12月第1周——1', 
      status: true, 
      date: '12/02',
      content: {
        topics: ['恶意流量检测基础模型设计'],
        papers: ['数据采集层','特征工程层','模型处理层','输出层','可以针对卫星特定攻击场景']
      }
    },
    { 
      week: '12月第1周——2', 
      status: true, 
      date: '12/05',
      content: {
        topics: ['听陈凡同学汇报'],
        papers: ['']
      }
    },
    { 
      week: '12月第2周', 
      status: true, 
      date: '12/09',
      content: {
        topics: ['开题报告初稿展示'],
        papers: ['开题报告初稿']
      }
    },
    { 
      week: '12月第3周', 
      status: true, 
      date: '12/17',
      content: {
        topics: ['答辩完之后和老师汇报开题存在的问题'],
        papers: ['开题报告']
      }
    },
    { 
      week: '12月第4周', 
      status: true, 
      date: '12/23',
      content: {
        topics: ['实验方案的确定'],
        papers: ['STK+NEBULA','satvis+flower']
      }
    },
    { 
      week: '12月第5周', 
      status: true, 
      date: '12/30',
      content: {
        topics: ['和李英超讨论后确定选择satvis+flower方案','学习flower联邦学习框架'],
        papers: ['satvis','flower']
      }
    },
  ];

  // 添加未开会的周次
  const missingWeeks = [
    { week: '4月第4周', status: false, reason: '因有课请假', type: 'personal' },
    { week: '5月第1周', status: false, reason: '五一放假', type: 'holiday' },
    { week: '6月第4周', status: false, reason: '因吹空调感冒请假', type: 'personal' },
    { week: '7月第3-4周', status: false, reason: '放暑假', type: 'holiday' },
    { week: '9月第3周', status: false, reason: '中秋节放假', type: 'holiday' },
    { week: '10月第1周', status: false, reason: '国庆节放假', type: 'holiday' },
    { week: '11月第1周', status: false, reason: '因天气转凉感冒请假', type: 'personal' },
  ];

  // 在组件内添加一个检查月份是否全勤的函数
  const checkFullAttendance = (month, meetings, missingWeeks) => {
    const monthStr = `${month}月`;
    const monthMissing = missingWeeks.filter(m => 
      m.week.startsWith(monthStr) && m.type === 'personal'
    );
    return monthMissing.length === 0;
  };

  // 在会议项中添加展开/收起功能
  const MeetingItem = ({ meeting }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="flex flex-col space-y-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
           onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></div>
            <span className="font-medium">{meeting.week} ({meeting.date})</span>
          </div>
          {meeting.content && (
            <button className="text-sm text-gray-500">
              {isExpanded ? '收起' : '详情'}
            </button>
          )}
        </div>
        {isExpanded && meeting.content && (
          <div className="ml-5 text-sm text-gray-600 space-y-1">
            <div className="flex gap-1">
              <span className="font-medium">主题:</span>
              <span>{meeting.content.topics.join('、')}</span>
            </div>
            <div className="flex gap-1">
              <span className="font-medium">论文:</span>
              <div className="flex flex-col">
                {meeting.content.papers.map((paper, i) => (
                  <span key={i} className="text-blue-600">{paper}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // 添加统计函数
  const getStatistics = (meetings, missingWeeks) => {
    return {
      totalMeetings: meetings.length,
      totalAbsence: missingWeeks.filter(m => m.type === 'personal').length,
      totalHolidays: missingWeeks.filter(m => m.type === 'holiday').length,
      monthsWithFullAttendance: Array(10).fill(0)
        .map((_, i) => i + 3)
        .filter(month => {
          const monthStr = `${month}月`;
          const monthMissing = missingWeeks.filter(m => 
            m.week.startsWith(monthStr) && m.type === 'personal'
          );
          return monthMissing.length === 0;
        }).length
    };
  };

  // 添加研究主题演进分析函数
  const getResearchProgress = (meetings) => {
    const phases = [
      {
        phase: "探索阶段",
        period: "3月-4月",
        topics: [
          "社交媒体数据隐私",
          "BERT与词嵌入技术",
          "网络流量分类"
        ],
        description: "探索不同研究方向，接触各类前沿技术"
      },
      {
        phase: "方向确定",
        period: "5月-6月",
        topics: [
          "卫星网络安全",
          "入侵检测系统",
          "联邦学习"
        ],
        description: "确定研究方向为卫星网络安全，开始深入学习相关技术"
      },
      {
        phase: "技术深化",
        period: "7月-9月",
        topics: [
          "联邦学习在卫星网络中的应用",
          "基金申请",
          "分布式学习框架"
        ],
        description: "深入研究联邦学习技术，开始进行方案设计"
      },
      {
        phase: "方案完善",
        period: "10月-12月",
        topics: [
          "分组方案设计",
          "聚合策略优化",
          "实验方案确定"
        ],
        description: "完善技术方案，准备开题，确定具体实验计划"
      }
    ];
    
    return phases;
  };

  // 在 return 语句之前获取统计数据
  const stats = getStatistics(meetings, missingWeeks);

  return (
    <div className="w-full max-w-4xl mx-4 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">李宇博2024年终总结</h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded"></div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>2023年组会年终统计</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{stats.totalMeetings}</div>
              <div className="text-sm text-gray-600">总组会次数</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">{stats.monthsWithFullAttendance}</div>
              <div className="text-sm text-gray-600">全勤月份数</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-red-600">{stats.totalAbsence}</div>
              <div className="text-sm text-gray-600">请假次数</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-gray-600">{stats.totalHolidays}</div>
              <div className="text-sm text-gray-600">因法定节假日未开组会次数</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2023年组会开展情况</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array(10).fill(0).map((_, monthIndex) => {
              const month = monthIndex + 3;
              const monthStr = `${month}月`;
              const monthMeetings = meetings.filter(m => m.week.startsWith(monthStr));
              const monthMissing = missingWeeks.filter(m => m.week.startsWith(monthStr));
              const isFullAttendance = checkFullAttendance(month, meetings, missingWeeks);
              
              return (
                <div key={month} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold">{monthStr}</h3>
                    {isFullAttendance && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        全勤
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {monthMeetings.map((meeting, idx) => (
                      <MeetingItem key={idx} meeting={meeting} />
                    ))}
                    {monthMissing.map((missing, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-2">
                        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                          missing.type === 'holiday' ? 'bg-gray-400' : 'bg-red-500'
                        }`}></div>
                        <span>{missing.week}</span>
                        <span className="text-gray-500">- {missing.reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>研究方向演进</CardTitle>
          <CardDescription>从探索到聚焦的研究历程</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {getResearchProgress(meetings).map((phase, index) => (
              <div key={index} className="relative pl-8 pb-6">
                {/* 时间线 */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-blue-500 bg-white"></div>
                </div>
                {/* 内容 */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-600">{phase.phase}</h3>
                  <p className="text-sm text-gray-500 mb-2">{phase.period}</p>
                  <div className="space-y-2">
                    <p className="text-gray-700">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((topic, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2023年度总结语</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            2023年是研究方向逐渐明确的一年，从最初的探索到最终确定研究方向，
            经历了理论学习、方案设计和开题准备等重要阶段。在导师和同学们的帮助下，
            顺利完成了开题答辩，为接下来的研究工作打下了坚实基础。
            正如张老师所说"本来学习就是一个探索的过程"，这一年的经历让我深刻体会到了这句话的含义。
            从最初的迷茫到逐渐找到方向，每一次组会、每一次讨论都是探索的重要一步，
            而这个探索的过程本身就是成长和进步的见证。
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2025年展望</CardTitle>
          <CardDescription>新的一年，新的期待</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "实验进展",
                items: ["完成实验设计与实施", "实验达到预期效果"],
                icon: "🧪"
              },
              {
                title: "论文写作",
                items: ["发表小论文", "完成毕业论文初稿"],
                icon: "📝"
              },
              {
                title: "职业规划",
                items: ["秋招找到满意的工作"],
                icon: "💼"
              },
              {
                title: "生活关系",
                items: [
                  "家庭和睦幸福",
                  "师生关系融洽",
                  "同学友谊长存"
                ],
                icon: "❤️"
              },
              {
                title: "研究目标",
                items: [
                  "完善分组和聚合方案",
                  "提出创新的解决方案",
                  "实现方案的工程落地"
                ],
                icon: "🎯"
              }
            ].map((goal, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{goal.icon}</span>
                  <h3 className="text-lg font-semibold text-blue-700">{goal.title}</h3>
                </div>
                <ul className="space-y-2">
                  {goal.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyMeetingTimeline;