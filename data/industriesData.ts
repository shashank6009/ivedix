export interface IndustryData {
  title: string;
  subtitle: string;
  image: any;
  content: {
    overview: string;
    trends: Array<{
      title: string;
      description: string;
      metrics?: Array<{
        label: string;
        value: string;
      }>;
    }>;
    detailedAnalysis: Array<{
      title: string;
      impact: string;
      benefits: string[];
      metrics: Array<{
        label: string;
        value: string;
      }>;
    }>;
  };
}

export const industriesData: Record<string, IndustryData> = {
  manufacturing: {
    title: 'Manufacturing',
    subtitle: 'Industrial & Process',
    image: null, // Will be set in the page
    content: {
      overview: 'RFID technology is set to revolutionize the manufacturing sector by enhancing real-time asset tracking, improving process automation, and enabling smarter decision-making. As manufacturing moves towards greater digitization with Industry 4.0, RFID will become a key enabler of smart factories, offering enhanced visibility, reduced operational costs, and improved product quality.',
      trends: [
        {
          title: 'Real-Time Asset Tracking & Process Optimization',
          description: 'RFID allows real-time tracking of raw materials, components, and finished goods, reducing delays and optimizing production workflows.',
          metrics: [
            { label: 'Production Lead Time', value: '10-30% reduction' },
            { label: 'WIP Tracking Accuracy', value: 'Up to 99%' }
          ]
        },
        {
          title: 'Improved Quality Control',
          description: 'By embedding RFID tags in components, manufacturers can automate quality checks and ensure product traceability throughout the production cycle.',
          metrics: [
            { label: 'Defect Rate Reduction', value: '20-40%' },
            { label: 'Traceability Compliance', value: 'Up to 100%' }
          ]
        },
        {
          title: 'Inventory Management Automation',
          description: 'RFID reduces the need for manual inventory checks, automates replenishment, and minimizes errors, leading to improved operational efficiency.',
          metrics: [
            { label: 'Inventory Accuracy', value: '95-99%' },
            { label: 'Carrying Cost Reduction', value: '10-20%' }
          ]
        },
        {
          title: 'Enhanced Equipment Maintenance',
          description: 'RFID-enabled sensors integrated with IoT systems can monitor equipment health and trigger maintenance alerts before failures occur, minimizing downtime.',
          metrics: [
            { label: 'Unplanned Downtime', value: '20-40% reduction' },
            { label: 'OEE Improvement', value: '5-15%' }
          ]
        },
        {
          title: 'Lean Manufacturing & Cost Reduction',
          description: 'RFID supports lean initiatives by eliminating waste, improving process flow, and reducing excess inventory, leading to significant cost savings.',
          metrics: [
            { label: 'Waste Reduction', value: '15-30%' },
            { label: 'Cycle Efficiency', value: 'Up to 25%' }
          ]
        },
        {
          title: 'Integration with Industry 4.0',
          description: 'RFID will play a critical role in smart factories by enabling seamless integration with IoT, AI, and robotics, creating a more connected and responsive manufacturing environment.',
          metrics: [
            { label: 'Decision Speed', value: 'Up to 50% faster' },
            { label: 'Data Flow Efficiency', value: 'Significantly improved' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Real-Time Asset Tracking & Process Optimization',
          impact: 'RFID tags can be attached to raw materials, components, work-in-progress (WIP), and finished goods, allowing manufacturers to track each item in real-time.',
          benefits: [
            'Reduces production delays by ensuring the right materials are always available',
            'Provides visibility into production bottlenecks',
            'Enables just-in-time manufacturing processes'
          ],
          metrics: [
            { label: 'Production Lead Time', value: '10%–30% typical improvement' },
            { label: 'WIP Inventory Tracking Accuracy', value: 'up to 99%' }
          ]
        },
        {
          title: 'Improved Quality Control',
          impact: 'RFID enables automated data collection at various stages of production, ensuring consistent quality and full product traceability.',
          benefits: [
            'Enhances defect detection by recording key parameters at each production step',
            'Improves compliance with industry regulations by maintaining accurate production records',
            'Enables real-time quality monitoring and alerts'
          ],
          metrics: [
            { label: 'Reduction in Defect Rates', value: '20%–40%' },
            { label: 'Increase in Traceability Compliance', value: 'up to 100%' }
          ]
        },
        {
          title: 'Inventory Management Automation',
          impact: 'RFID automates the tracking of raw materials and finished goods in warehouses, reducing manual errors and improving stock control.',
          benefits: [
            'Lowers carrying costs by maintaining optimal inventory levels',
            'Reduces stockouts and excess inventory',
            'Automates replenishment processes'
          ],
          metrics: [
            { label: 'Inventory Accuracy Improvement', value: '95%–99%' },
            { label: 'Reduction in Inventory Carrying Costs', value: '10%–20%' }
          ]
        },
        {
          title: 'Enhanced Equipment Maintenance (Predictive Maintenance)',
          impact: 'RFID-enabled sensors, integrated with IoT systems, can monitor key equipment parameters (e.g., temperature, vibration) and trigger maintenance alerts before failures occur.',
          benefits: [
            'Reduces unplanned downtime by enabling predictive maintenance',
            'Extends the lifespan of machinery',
            'Optimizes maintenance schedules and resource allocation'
          ],
          metrics: [
            { label: 'Reduction in Unplanned Downtime', value: '20%–40%' },
            { label: 'Increase in Overall Equipment Effectiveness (OEE)', value: '5%–15%' }
          ]
        },
        {
          title: 'Lean Manufacturing & Cost Reduction',
          impact: 'RFID supports lean manufacturing by minimizing waste, automating material flow, and improving inventory accuracy.',
          benefits: [
            'Eliminates excess inventory and overproduction',
            'Improves process flow and reduces waste in production',
            'Enables continuous improvement through data-driven insights'
          ],
          metrics: [
            { label: 'Reduction in Waste', value: '15%–30%' },
            { label: 'Improvement in Production Cycle Efficiency', value: 'up to 25%' }
          ]
        },
        {
          title: 'Integration with Industry 4.0 Technologies',
          impact: 'RFID will play a vital role in the smart factory ecosystem, enabling seamless integration with IoT devices, AI-driven analytics, and robotic systems.',
          benefits: [
            'Facilitates real-time data-driven decision-making',
            'Enhances overall agility and responsiveness of manufacturing operations',
            'Creates a foundation for autonomous manufacturing systems'
          ],
          metrics: [
            { label: 'Improvement in Real-Time Decision-Making Speed', value: 'up to 50%' },
            { label: 'Increase in System Interoperability and Data Flow Efficiency', value: 'Significantly improved' }
          ]
        }
      ]
    }
  },
  supplyChain: {
    title: 'Supply Chain',
    subtitle: 'Logistics & Transport',
    image: null,
    content: {
      overview: 'Radio Frequency Identification (RFID) technology is poised to play a transformative role in the future of supply chain management. With advancements in IoT, data analytics, and real-time tracking capabilities, RFID enables greater transparency, efficiency, and automation. Companies are increasingly adopting RFID to streamline inventory management, enhance security, reduce costs, and improve customer satisfaction.',
      trends: [
        {
          title: 'Real-Time Tracking & Visibility',
          description: 'RFID offers end-to-end visibility across the supply chain, allowing companies to track products in real-time, from manufacturing to the point of sale.',
          metrics: [
            { label: 'End-to-End Visibility', value: 'Real-time tracking' },
            { label: 'Transparency', value: 'Complete supply chain' }
          ]
        },
        {
          title: 'Enhanced Inventory Accuracy & Automation',
          description: 'By reducing manual counting and human errors, RFID improves inventory accuracy, enabling automated stock replenishment and minimizing out-of-stock scenarios.',
          metrics: [
            { label: 'Inventory Accuracy', value: '95-99%' },
            { label: 'Stockout Reduction', value: '20-40%' }
          ]
        },
        {
          title: 'Integration with IoT & Advanced Analytics',
          description: 'Future RFID systems will integrate with IoT devices and AI-driven analytics platforms, providing actionable insights to optimize supply chain operations and predict demand.',
          metrics: [
            { label: 'IoT Integration', value: 'Seamless connectivity' },
            { label: 'Analytics', value: 'AI-driven insights' }
          ]
        },
        {
          title: 'Increased Adoption in Cold Chain & Perishables',
          description: 'RFID technology will play a critical role in temperature-sensitive supply chains, ensuring proper handling of perishable goods like food and pharmaceuticals.',
          metrics: [
            { label: 'Temperature Monitoring', value: 'Real-time alerts' },
            { label: 'Perishable Tracking', value: 'Enhanced safety' }
          ]
        },
        {
          title: 'Sustainability & Circular Supply Chains',
          description: 'RFID facilitates better asset tracking, reverse logistics, and recycling, helping companies implement circular economy models and reduce waste.',
          metrics: [
            { label: 'Waste Reduction', value: '15-30%' },
            { label: 'Circular Economy', value: 'Sustainable models' }
          ]
        },
        {
          title: 'Cost Reduction & Scalability',
          description: 'As RFID technology becomes more affordable, smaller businesses will adopt it, making it a standard practice in global supply chains.',
          metrics: [
            { label: 'Cost Reduction', value: '10-20%' },
            { label: 'Scalability', value: 'Global adoption' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Inventory Accuracy Rate',
          impact: 'The percentage of correct inventory records compared to the actual physical inventory.',
          benefits: [
            'RFID improves real-time visibility and accuracy',
            'Minimizes discrepancies between recorded and actual stock levels',
            'Enables automated inventory management'
          ],
          metrics: [
            { label: 'Target Accuracy', value: '95-99%' },
            { label: 'Real-time Updates', value: 'Continuous monitoring' }
          ]
        },
        {
          title: 'Order Fulfillment Cycle Time',
          impact: 'The time taken to process and deliver an order from receipt to final delivery.',
          benefits: [
            'RFID enables faster and more precise picking, packing, and shipping',
            'Reduces cycle time and improves customer satisfaction',
            'Automates order processing workflows'
          ],
          metrics: [
            { label: 'Cycle Time Reduction', value: '20-40%' },
            { label: 'Customer Satisfaction', value: 'Significantly improved' }
          ]
        },
        {
          title: 'Stockout Rate',
          impact: 'The frequency of stockouts due to inventory mismanagement or delays.',
          benefits: [
            'RFID improves demand forecasting and real-time stock monitoring',
            'Helps reduce stockouts and lost sales opportunities',
            'Enables proactive inventory management'
          ],
          metrics: [
            { label: 'Stockout Reduction', value: '20-40%' },
            { label: 'Lost Sales Prevention', value: 'Proactive management' }
          ]
        },
        {
          title: 'Asset Utilization Rate',
          impact: 'The ratio of assets effectively used compared to total available assets.',
          benefits: [
            'With RFID, companies can better track movable assets',
            'Maximizes utilization and reduces idle time',
            'Improves overall operational efficiency'
          ],
          metrics: [
            { label: 'Asset Utilization', value: '20-30% improvement' },
            { label: 'Idle Time Reduction', value: 'Significant decrease' }
          ]
        },
        {
          title: 'Labor Productivity',
          impact: 'The output produced per unit of labor.',
          benefits: [
            'RFID automates many processes like scanning, sorting, and locating',
            'Leads to improved labor efficiency and productivity',
            'Reduces manual labor requirements'
          ],
          metrics: [
            { label: 'Productivity Increase', value: '20-30%' },
            { label: 'Labor Cost Reduction', value: '10-20%' }
          ]
        },
        {
          title: 'Return on Investment (ROI)',
          impact: 'The financial return generated from RFID implementation compared to the initial investment.',
          benefits: [
            'ROI helps justify the investment in RFID',
            'Compares cost savings, efficiency gains, and increased revenue',
            'Demonstrates long-term value and benefits'
          ],
          metrics: [
            { label: 'ROI Period', value: '12-18 months' },
            { label: 'Cost Justification', value: 'Clear financial benefits' }
          ]
        }
      ]
    }
  },
  warehouse: {
    title: 'Warehouse',
    subtitle: 'Operations & Storage',
    image: null,
    content: {
      overview: 'RFID and RTLS are driving the future of the warehouse and logistics by enabling real-time visibility, automation, and data-driven decision-making. These technologies improve inventory accuracy, accelerate order fulfillment, enhance asset utilization, and streamline receiving, shipping, and reverse logistics processes. With measurable benefits such as a 95%–99% increase in inventory accuracy, 30%–50% faster order fulfillment, and up to 40% reduction in stock discrepancies, RFID and RTLS deliver significant operational efficiency and cost savings.',
      trends: [
        {
          title: 'Real-Time Inventory Tracking and Accuracy',
          description: 'RFID and RTLS provide continuous visibility into inventory levels, locations, and movements, reducing errors and improving stock accuracy.',
          metrics: [
            { label: 'Inventory Accuracy', value: '95%–99%' },
            { label: 'Stock Discrepancies', value: '50%–70% reduction' }
          ]
        },
        {
          title: 'Accelerated Order Fulfillment and Increased Accuracy',
          description: 'By using RFID for automated scanning and RTLS for guiding workers to precise item locations, order picking, packing, and shipping processes are faster and more accurate.',
          metrics: [
            { label: 'Order Fulfillment Time', value: '30%–50% reduction' },
            { label: 'Order Accuracy', value: '95%–99%' }
          ]
        },
        {
          title: 'Improved Asset Utilization and Maintenance',
          description: 'RTLS tracks the real-time location and usage of assets such as forklifts, pallets, and containers, improving their utilization and enabling predictive maintenance.',
          metrics: [
            { label: 'Asset Utilization', value: '20%–30% increase' },
            { label: 'Unplanned Downtime', value: '20%–40% reduction' }
          ]
        },
        {
          title: 'Enhanced Warehouse Space Utilization',
          description: 'RTLS data provides insights into how space is used, helping optimize warehouse layouts, improve routing efficiency, and reduce congestion in high-traffic zones.',
          metrics: [
            { label: 'Space Utilization', value: '10%–20% increase' },
            { label: 'Congestion Delays', value: '20%–40% reduction' }
          ]
        },
        {
          title: 'Automated Replenishment and Stockouts Prevention',
          description: 'With RFID-enabled real-time inventory tracking, automated replenishment can be triggered when stock levels reach critical thresholds.',
          metrics: [
            { label: 'Stockouts', value: '20%–40% reduction' },
            { label: 'Overstocking Costs', value: '15%–25% decrease' }
          ]
        },
        {
          title: 'Improved Reverse Logistics and Returns Processing',
          description: 'RFID speeds up the identification and sorting of returned goods, while RTLS ensures faster processing of return shipments.',
          metrics: [
            { label: 'Return Processing Time', value: '30%–50% reduction' },
            { label: 'Reverse Logistics Efficiency', value: '20%–40% increase' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Real-Time Inventory Tracking and Accuracy',
          impact: 'RFID and RTLS provide continuous visibility into inventory levels, locations, and movements, reducing errors and improving stock accuracy.',
          benefits: [
            'Eliminates the need for manual stock checks',
            'Reduces inventory-related delays',
            'Provides real-time stock level updates'
          ],
          metrics: [
            { label: 'Inventory Accuracy Improvement', value: '95%–99%' },
            { label: 'Reduction in Stock Discrepancies', value: '50%–70%' }
          ]
        },
        {
          title: 'Accelerated Order Fulfillment and Increased Accuracy',
          impact: 'By using RFID for automated scanning and RTLS for guiding workers to precise item locations, order picking, packing, and shipping processes are faster and more accurate.',
          benefits: [
            'Faster order processing and delivery',
            'Fewer errors in picking and packing',
            'Improved customer satisfaction'
          ],
          metrics: [
            { label: 'Order Fulfillment Time Reduction', value: '30%–50%' },
            { label: 'Increase in Order Accuracy', value: '95%–99%' }
          ]
        },
        {
          title: 'Improved Asset Utilization and Maintenance',
          impact: 'RTLS tracks the real-time location and usage of assets such as forklifts, pallets, and containers, improving their utilization and enabling predictive maintenance.',
          benefits: [
            'Better asset tracking and management',
            'Predictive maintenance capabilities',
            'Reduced equipment downtime'
          ],
          metrics: [
            { label: 'Increase in Asset Utilization', value: '20%–30%' },
            { label: 'Reduction in Unplanned Downtime', value: '20%–40%' }
          ]
        },
        {
          title: 'Enhanced Warehouse Space Utilization',
          impact: 'RTLS data provides insights into how space is used, helping optimize warehouse layouts, improve routing efficiency, and reduce congestion.',
          benefits: [
            'Optimized warehouse layouts',
            'Improved routing efficiency',
            'Reduced congestion in high-traffic zones'
          ],
          metrics: [
            { label: 'Increase in Space Utilization', value: '10%–20%' },
            { label: 'Reduction in Congestion-Related Delays', value: '20%–40%' }
          ]
        },
        {
          title: 'Automated Replenishment and Stockouts Prevention',
          impact: 'With RFID-enabled real-time inventory tracking, automated replenishment can be triggered when stock levels reach critical thresholds.',
          benefits: [
            'Prevents stockouts automatically',
            'Reduces overstocking costs',
            'Improves replenishment accuracy'
          ],
          metrics: [
            { label: 'Reduction in Stockouts', value: '20%–40%' },
            { label: 'Decrease in Overstocking Costs', value: '15%–25%' }
          ]
        },
        {
          title: 'Improved Reverse Logistics and Returns Processing',
          impact: 'RFID speeds up the identification and sorting of returned goods, while RTLS ensures faster processing of return shipments.',
          benefits: [
            'Faster return processing',
            'Better reverse logistics management',
            'Reduced handling costs for returns'
          ],
          metrics: [
            { label: 'Return Processing Time Reduction', value: '30%–50%' },
            { label: 'Increase in Reverse Logistics Efficiency', value: '20%–40%' }
          ]
        }
      ]
    }
  },
  retail: {
    title: 'Retail',
    subtitle: 'E-commerce & Stores',
    image: null,
    content: {
      overview: 'RFID (Radio-Frequency Identification) and RTLS (Real-Time Location Systems) are shaping the future of the retail sector by offering enhanced inventory visibility, reducing shrinkage, improving customer experiences, and enabling advanced omnichannel capabilities. With increased competition and rising consumer expectations, retailers are leveraging these technologies to gain operational efficiencies and drive sales growth with more personalized shopping experiences.',
      trends: [
        {
          title: 'Inventory Visibility & Accuracy',
          description: 'Real-time tracking of stock levels across multiple store locations and warehouses.',
          metrics: [
            { label: 'Inventory Accuracy', value: 'Up to 98%' },
            { label: 'Stockout Reduction', value: 'Up to 30%' }
          ]
        },
        {
          title: 'Omnichannel Fulfillment',
          description: 'Accurate inventory tracking to enable services like Buy Online, Pickup In-Store (BOPIS) and Buy Online, Return In-Store (BORIS).',
          metrics: [
            { label: 'Order Fulfillment Speed', value: 'Up to 50% improvement' },
            { label: 'Customer Satisfaction', value: '10-20% increase' }
          ]
        },
        {
          title: 'Loss Prevention & Shrinkage Reduction',
          description: 'Using RFID for automated theft detection, item-level tracking, and ensuring high-value items remain secure.',
          metrics: [
            { label: 'Shrinkage Reduction', value: 'Up to 20%' },
            { label: 'ROI on Loss Prevention', value: '12-18 months' }
          ]
        },
        {
          title: 'Customer Experience & Personalization',
          description: 'Smart fitting rooms using RFID to suggest products, track customer preferences, and enable fast checkout.',
          metrics: [
            { label: 'Conversion Rate', value: 'Up to 15% increase' },
            { label: 'Checkout Time', value: 'Up to 30% reduction' }
          ]
        },
        {
          title: 'Workforce Productivity & Task Automation',
          description: 'Automating inventory counts and restocking tasks using RFID and RTLS to free up employees for customer-facing roles.',
          metrics: [
            { label: 'Manual Labor Hours', value: 'Up to 70% reduction' },
            { label: 'Employee Productivity', value: '10-15% increase' }
          ]
        },
        {
          title: 'In-Store Analytics',
          description: 'Tracking customer movement and dwell times using RTLS to improve store layout and product placement.',
          metrics: [
            { label: 'Store Layout Effectiveness', value: '5-10% improvement' },
            { label: 'Customer Dwell Time', value: '10-15% increase' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Inventory Visibility & Accuracy',
          impact: 'Real-time tracking of stock levels across multiple store locations and warehouses.',
          benefits: [
            'Improved inventory accuracy up to 98%',
            'Reduction in stockouts up to 30%',
            'Increase in sales due to better stock availability (5-15%)'
          ],
          metrics: [
            { label: 'Inventory Accuracy', value: 'Up to 98%' },
            { label: 'Stockout Reduction', value: 'Up to 30%' }
          ]
        },
        {
          title: 'Omnichannel Fulfillment (BOPIS, BORIS, Ship-from-Store)',
          impact: 'Accurate inventory tracking to enable services like Buy Online, Pickup In-Store (BOPIS) and Buy Online, Return In-Store (BORIS).',
          benefits: [
            'Improvement in order fulfillment speed up to 50%',
            'Increase in customer satisfaction (10-20%)',
            'Reduction in order cancellation due to stock discrepancies (20-25%)'
          ],
          metrics: [
            { label: 'Order Fulfillment Speed', value: 'Up to 50% improvement' },
            { label: 'Customer Satisfaction', value: '10-20% increase' }
          ]
        },
        {
          title: 'Loss Prevention & Shrinkage Reduction',
          impact: 'Using RFID for automated theft detection, item-level tracking, and ensuring high-value items remain secure.',
          benefits: [
            'Reduction in shrinkage up to 20%',
            'ROI on RFID-based loss prevention systems (12-18 months)',
            'Decrease in manual audit time (40-50%)'
          ],
          metrics: [
            { label: 'Shrinkage Reduction', value: 'Up to 20%' },
            { label: 'ROI on Loss Prevention', value: '12-18 months' }
          ]
        },
        {
          title: 'Customer Experience & Personalization',
          impact: 'Smart fitting rooms using RFID to suggest products, track customer preferences, and enable fast checkout.',
          benefits: [
            'Increase in conversion rate up to 15%',
            'Improvement in average transaction value (ATV) (5-10%)',
            'Reduction in checkout time up to 30%'
          ],
          metrics: [
            { label: 'Conversion Rate', value: 'Up to 15% increase' },
            { label: 'Checkout Time', value: 'Up to 30% reduction' }
          ]
        },
        {
          title: 'Workforce Productivity & Task Automation',
          impact: 'Automating inventory counts and restocking tasks using RFID and RTLS to free up employees for customer-facing roles.',
          benefits: [
            'Reduction in manual labor hours up to 70%',
            'Reduction in manual labor hours up to 70%',
            'Increase in employee productivity (10-15%)',
            'Reduction in restocking time (30-40%)'
          ],
          metrics: [
            { label: 'Manual Labor Hours', value: 'Up to 70% reduction' },
            { label: 'Employee Productivity', value: '10-15% increase' }
          ]
        },
        {
          title: 'In-Store Analytics',
          impact: 'Tracking customer movement and dwell times using RTLS to improve store layout and product placement.',
          benefits: [
            'Improvement in store layout effectiveness (measured by conversion rate) (5-10%)',
            'Increase in dwell time in key product areas (10-15%)',
            'Reduction in customer wait time up to 25%'
          ],
          metrics: [
            { label: 'Store Layout Effectiveness', value: '5-10% improvement' },
            { label: 'Customer Dwell Time', value: '10-15% increase' }
          ]
        }
      ]
    }
  },
  healthcare: {
    title: 'Healthcare',
    subtitle: 'Health Systems',
    image: null,
    content: {
      overview: 'The future of RFID and RTLS in healthcare is driven by advancements in IoT integration, predictive analytics, and smart hospital initiatives. These technologies are rapidly transforming healthcare by enabling real-time tracking of medical equipment, optimizing staff workflows, improving patient safety, and enhancing operational efficiency. As healthcare facilities grow in scale and complexity, the need for precise asset tracking, real-time data visibility, and patient monitoring has become crucial.',
      trends: [
        {
          title: 'Asset Tracking & Equipment Utilization',
          description: 'Real-time tracking of high-value medical equipment (e.g., infusion pumps, ventilators, portable monitors) ensures availability when needed, reducing search time and improving utilization.',
          metrics: [
            { label: 'Equipment Search Time', value: 'Up to 90% reduction' },
            { label: 'Equipment Utilization Rate', value: '10-20% increase' }
          ]
        },
        {
          title: 'Patient Safety & Monitoring',
          description: 'RTLS-based systems enable real-time patient tracking, ensuring timely care delivery and preventing errors (e.g., wrong-site surgeries, infant mix-ups).',
          metrics: [
            { label: 'Patient Identification Errors', value: 'Up to 50% reduction' },
            { label: 'Patient Response Time', value: '20-30% improvement' }
          ]
        },
        {
          title: 'Workflow Optimization & Staff Efficiency',
          description: 'RFID and RTLS streamline workflows by automating routine tasks (e.g., locating assets, tracking staff movements) and optimizing staff allocation based on real-time data.',
          metrics: [
            { label: 'Non-clinical Task Time', value: 'Up to 40% reduction' },
            { label: 'Staff Productivity', value: '15-20% increase' }
          ]
        },
        {
          title: 'Inventory & Supply Chain Management',
          description: 'RFID enables automated inventory management of medical supplies and pharmaceuticals, ensuring optimal stock levels and reducing waste due to expired items.',
          metrics: [
            { label: 'Inventory Accuracy', value: '25-30% improvement' },
            { label: 'Stockouts', value: '20-25% reduction' }
          ]
        },
        {
          title: 'Environmental Monitoring & Compliance',
          description: 'IoT-enabled RFID sensors monitor environmental conditions (e.g., temperature in storage areas for vaccines or sensitive drugs) to ensure regulatory compliance.',
          metrics: [
            { label: 'Spoilage Reduction', value: 'Up to 30%' },
            { label: 'Regulatory Compliance', value: '10-15% increase' }
          ]
        },
        {
          title: 'Security & Access Control',
          description: 'RFID badges and RTLS systems enhance security by controlling and monitoring access to restricted areas (e.g., operating rooms, pharmaceutical storage).',
          metrics: [
            { label: 'Unauthorized Access', value: '20-25% reduction' },
            { label: 'Audit Trail Accuracy', value: 'Up to 95%' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Asset Tracking & Equipment Utilization',
          impact: 'Real-time tracking of high-value medical equipment ensures availability when needed, reducing search time and improving utilization.',
          benefits: [
            'Reduces equipment search time by up to 90%',
            'Increases equipment utilization rate by 10-20%',
            'Reduces equipment loss or theft by 20-30%'
          ],
          metrics: [
            { label: 'Equipment Search Time', value: 'Up to 90% reduction' },
            { label: 'Equipment Utilization Rate', value: '10-20% increase' }
          ]
        },
        {
          title: 'Patient Safety & Monitoring',
          impact: 'RTLS-based systems enable real-time patient tracking, ensuring timely care delivery and preventing errors.',
          benefits: [
            'Reduces patient identification errors by up to 50%',
            'Improves patient response time by 20-30%',
            'Increases compliance with safety protocols by 15-20%'
          ],
          metrics: [
            { label: 'Patient Identification Errors', value: 'Up to 50% reduction' },
            { label: 'Patient Response Time', value: '20-30% improvement' }
          ]
        },
        {
          title: 'Workflow Optimization & Staff Efficiency',
          impact: 'RFID and RTLS streamline workflows by automating routine tasks and optimizing staff allocation based on real-time data.',
          benefits: [
            'Reduces time spent on non-clinical tasks by up to 40%',
            'Increases staff productivity by 15-20%',
            'Reduces patient wait time by 10-20%'
          ],
          metrics: [
            { label: 'Non-clinical Task Time', value: 'Up to 40% reduction' },
            { label: 'Staff Productivity', value: '15-20% increase' }
          ]
        },
        {
          title: 'Inventory & Supply Chain Management',
          impact: 'RFID enables automated inventory management of medical supplies and pharmaceuticals, ensuring optimal stock levels.',
          benefits: [
            'Improves inventory accuracy by 25-30%',
            'Reduces stockouts by 20-25%',
            'Decreases supply chain costs by 10-15%'
          ],
          metrics: [
            { label: 'Inventory Accuracy', value: '25-30% improvement' },
            { label: 'Stockout Reduction', value: '20-25%' }
          ]
        },
        {
          title: 'Environmental Monitoring & Compliance',
          impact: 'IoT-enabled RFID sensors monitor environmental conditions to ensure regulatory compliance and product integrity.',
          benefits: [
            'Reduces spoilage of sensitive items by up to 30%',
            'Increases regulatory compliance by 10-15%',
            'Achieves ROI from reduced losses in 12-18 months'
          ],
          metrics: [
            { label: 'Spoilage Reduction', value: 'Up to 30%' },
            { label: 'Regulatory Compliance', value: '10-15% increase' }
          ]
        },
        {
          title: 'Security & Access Control',
          impact: 'RFID badges and RTLS systems enhance security by controlling and monitoring access to restricted areas.',
          benefits: [
            'Reduces unauthorized access incidents by 20-25%',
            'Improves audit trail accuracy up to 95%',
            'Reduces security breach incidents by 10-15%'
          ],
          metrics: [
            { label: 'Unauthorized Access', value: '20-25% reduction' },
            { label: 'Audit Trail Accuracy', value: 'Up to 95%' }
          ]
        }
      ]
    }
  },
  energy: {
    title: 'Energy',
    subtitle: 'Power & Utilities',
    image: null,
    content: {
      overview: 'RFID (Radio-Frequency Identification) and RTLS (Real-Time Location Systems) technologies are increasingly transforming the energy and utilities sectors by enabling better asset management, worker safety, operational efficiency, and regulatory compliance. With the growing complexity of operations, particularly in oil & gas, power distribution, and renewable energy, real-time visibility of assets and personnel is becoming critical.',
      trends: [
        {
          title: 'Asset Tracking & Inventory Management',
          description: 'Tracking of high-value equipment (e.g., transformers, turbines, drilling tools) and spare parts in warehouses and remote locations.',
          metrics: [
            { label: 'Asset Search Time', value: 'Up to 90% reduction' },
            { label: 'Inventory Accuracy', value: 'Up to 30% improvement' }
          ]
        },
        {
          title: 'Worker Safety & Compliance',
          description: 'Real-time tracking of personnel in hazardous zones to ensure safety and meet compliance standards.',
          metrics: [
            { label: 'Incident Response Time', value: 'Up to 50% reduction' },
            { label: 'Regulatory Compliance', value: '15-20% increase' }
          ]
        },
        {
          title: 'Predictive Maintenance & Downtime Reduction',
          description: 'Using RFID-enabled sensors and RTLS to monitor the condition of critical equipment and predict failures before they occur.',
          metrics: [
            { label: 'Unplanned Downtime', value: 'Up to 25% reduction' },
            { label: 'Asset Lifespan', value: '10-15% increase' }
          ]
        },
        {
          title: 'Supply Chain & Logistics Optimization',
          description: 'Tracking the movement of critical components (e.g., pipes, cables) across complex supply chains to reduce delays.',
          metrics: [
            { label: 'Material Handling Errors', value: 'Up to 30% reduction' },
            { label: 'On-time Delivery', value: '10-15% improvement' }
          ]
        },
        {
          title: 'Environmental Monitoring & Sustainability',
          description: 'RFID and RTLS-enabled sensors for real-time monitoring of environmental factors (e.g., emissions, leaks) around energy facilities.',
          metrics: [
            { label: 'Environmental Incidents', value: 'Up to 20% reduction' },
            { label: 'Environmental Compliance', value: '10-15% improvement' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Asset Tracking & Inventory Management',
          impact: 'Tracking of high-value equipment and spare parts in warehouses and remote locations.',
          benefits: [
            'Reduces asset search time by up to 90%',
            'Improves inventory accuracy by up to 30%',
            'Achieves ROI realization period of 6-12 months'
          ],
          metrics: [
            { label: 'Asset Search Time', value: 'Up to 90% reduction' },
            { label: 'Inventory Accuracy', value: 'Up to 30% improvement' }
          ]
        },
        {
          title: 'Worker Safety & Compliance',
          impact: 'Real-time tracking of personnel in hazardous zones to ensure safety and meet compliance standards.',
          benefits: [
            'Reduces incident response time by up to 50%',
            'Improves regulatory compliance score by 15-20%',
            'Reduces lost-time injury rate (LTIR) by 10-15%'
          ],
          metrics: [
            { label: 'Incident Response Time', value: 'Up to 50% reduction' },
            { label: 'Regulatory Compliance', value: '15-20% increase' }
          ]
        },
        {
          title: 'Predictive Maintenance & Downtime Reduction',
          impact: 'Using RFID-enabled sensors and RTLS to monitor the condition of critical equipment and predict failures.',
          benefits: [
            'Reduces unplanned downtime by up to 25%',
            'Increases asset lifespan by 10-15%',
            'Achieves maintenance cost savings of 10-20%'
          ],
          metrics: [
            { label: 'Unplanned Downtime', value: 'Up to 25% reduction' },
            { label: 'Asset Lifespan', value: '10-15% increase' }
          ]
        },
        {
          title: 'Supply Chain & Logistics Optimization',
          impact: 'Tracking the movement of critical components across complex supply chains to reduce delays.',
          benefits: [
            'Reduces material handling errors by up to 30%',
            'Improves on-time delivery by 10-15%',
            'Decreases logistics costs by 5-10%'
          ],
          metrics: [
            { label: 'Material Handling Errors', value: 'Up to 30% reduction' },
            { label: 'On-time Delivery', value: '10-15% improvement' }
          ]
        },
        {
          title: 'Environmental Monitoring & Sustainability',
          impact: 'RFID and RTLS-enabled sensors for real-time monitoring of environmental factors around energy facilities.',
          benefits: [
            'Reduces environmental incidents by up to 20%',
            'Improves environmental compliance by 10-15%',
            'Achieves cost savings in regulatory fines of 5-10%'
          ],
          metrics: [
            { label: 'Environmental Incidents', value: 'Up to 20% reduction' },
            { label: 'Environmental Compliance', value: '10-15% improvement' }
          ]
        }
      ]
    }
  },
  facility: {
    title: 'Facilities',
    subtitle: 'Facility Management',
    image: null,
    content: {
      overview: 'RFID (Radio-Frequency Identification) and RTLS (Real-Time Location Systems) are revolutionizing the facilities management sector by enabling real-time tracking of assets, enhancing building security, improving maintenance processes, and optimizing space utilization. With the rise of smart buildings and IoT integration, these technologies are becoming critical for efficient, smart facility operations.',
      trends: [
        {
          title: 'Real-Time Asset Tracking & Utilization',
          description: 'RFID and RTLS enable precise, real-time tracking of high-value assets across large facilities and sites, reducing asset loss and ensuring efficient utilization.',
          metrics: [
            { label: 'Asset Search Time', value: 'Up to 90% reduction' },
            { label: 'Asset Utilization Rate', value: '10-20% increase' }
          ]
        },
        {
          title: 'Workforce Efficiency, Safety and Task Automation',
          description: 'IoT-enabled RTLS systems track personnel in real time, ensuring compliance and safety in hazardous environments while automating routine tasks.',
          metrics: [
            { label: 'Safety Incidents', value: 'Up to 25% reduction' },
            { label: 'Emergency Response Time', value: 'Up to 50% improvement' }
          ]
        },
        {
          title: 'Predictive Maintenance & Downtime Reduction',
          description: 'IoT sensors integrated with RFID and RTLS monitor equipment conditions in real time, enabling predictive and preventive maintenance.',
          metrics: [
            { label: 'Unplanned Downtime', value: '20-30% reduction' },
            { label: 'Equipment Uptime', value: '10-15% increase' }
          ]
        },
        {
          title: 'Smart Building & Site Operations',
          description: 'Integrated systems using RFID, RTLS, and IoT provide real-time data visibility for optimizing site operations and energy management.',
          metrics: [
            { label: 'Space Utilization', value: '15-25% increase' },
            { label: 'Energy Consumption', value: '10-20% reduction' }
          ]
        },
        {
          title: 'Access Control, Occupant Safety & Security',
          description: 'RFID-enabled access control and geofencing enhance site security by restricting unauthorized access and providing detailed audit trails.',
          metrics: [
            { label: 'Unauthorized Access', value: '20-25% reduction' },
            { label: 'Audit Trail Accuracy', value: 'Up to 95%' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Real-Time Asset Tracking & Utilization',
          impact: 'RFID and RTLS enable precise, real-time tracking of high-value assets across large facilities and sites.',
          benefits: [
            'Reduces asset search time by up to 90%',
            'Increases asset utilization rate by 10-20%',
            'Reduces asset loss or theft by 20-30%'
          ],
          metrics: [
            { label: 'Asset Search Time', value: 'Up to 90% reduction' },
            { label: 'Asset Utilization Rate', value: '10-20% increase' }
          ]
        },
        {
          title: 'Workforce Efficiency, Safety and Task Automation',
          impact: 'IoT-enabled RTLS systems track personnel in real time, ensuring compliance and safety while automating routine tasks.',
          benefits: [
            'Reduces safety incidents by up to 25%',
            'Improves emergency response time by up to 50%',
            'Increases safety compliance rate by 15-20%'
          ],
          metrics: [
            { label: 'Safety Incidents', value: 'Up to 25% reduction' },
            { label: 'Emergency Response Time', value: 'Up to 50% improvement' }
          ]
        },
        {
          title: 'Predictive Maintenance & Downtime Reduction',
          impact: 'IoT sensors integrated with RFID and RTLS monitor equipment conditions in real time, enabling predictive maintenance.',
          benefits: [
            'Reduces unplanned downtime by 20-30%',
            'Increases equipment uptime and lifespan by 10-15%',
            'Reduces maintenance costs by 15-20%'
          ],
          metrics: [
            { label: 'Unplanned Downtime', value: '20-30% reduction' },
            { label: 'Equipment Uptime', value: '10-15% increase' }
          ]
        },
        {
          title: 'Smart Building & Site Operations',
          impact: 'Integrated systems using RFID, RTLS, and IoT provide real-time data visibility for optimizing site operations.',
          benefits: [
            'Increases space utilization efficiency by 15-25%',
            'Reduces energy consumption by 10-20%',
            'Achieves ROI from energy savings in 12-18 months'
          ],
          metrics: [
            { label: 'Space Utilization', value: '15-25% increase' },
            { label: 'Energy Consumption', value: '10-20% reduction' }
          ]
        },
        {
          title: 'Access Control, Occupant Safety & Security',
          impact: 'RFID-enabled access control and geofencing enhance site security by restricting unauthorized access.',
          benefits: [
            'Reduces unauthorized access incidents by 20-25%',
            'Improves audit trail accuracy up to 95%',
            'Improves emergency response time by up to 50%'
          ],
          metrics: [
            { label: 'Unauthorized Access', value: '20-25% reduction' },
            { label: 'Audit Trail Accuracy', value: 'Up to 95%' }
          ]
        }
      ]
    }
  },
  government: {
    title: 'Government',
    subtitle: 'Public Sector',
    image: null,
    content: {
      overview: 'RFID (Radio Frequency Identification) and RTLS (Real-Time Location Systems) empower government operations and public safety with real-time tracking, enhanced security, and optimized resource utilization. By integrating these technologies, governments can improve public services, accelerate emergency responses, and enable smarter decision-making, fostering greater efficiency, transparency, and citizen trust.',
      trends: [
        {
          title: 'Enhanced Security and Identification',
          description: 'Prevent fraud and ensure secure identification of citizens and government employees.',
          metrics: [
            { label: 'Fraud Prevention', value: 'Significant improvement' },
            { label: 'Identification Accuracy', value: 'Near 100%' }
          ]
        },
        {
          title: 'Operational Efficiency',
          description: 'Improve the management of public assets, transportation systems, and waste collection services.',
          metrics: [
            { label: 'Asset Management', value: '20-30% improvement' },
            { label: 'Service Delivery', value: '15-25% faster' }
          ]
        },
        {
          title: 'Public Safety and Emergency Response',
          description: 'Enable faster, more coordinated responses to emergencies and improve disaster management.',
          metrics: [
            { label: 'Response Time', value: '30-50% faster' },
            { label: 'Coordination', value: 'Significantly improved' }
          ]
        },
        {
          title: 'Transparency and Accountability',
          description: 'Increase transparency in procurement and asset usage, reducing fraud and losses.',
          metrics: [
            { label: 'Transparency', value: 'Complete visibility' },
            { label: 'Fraud Reduction', value: '20-40% decrease' }
          ]
        },
        {
          title: 'Improved Citizen Services',
          description: 'Enhance the user experience in public spaces through seamless access to government services.',
          metrics: [
            { label: 'Service Access', value: 'Seamless experience' },
            { label: 'Resource Availability', value: 'Real-time updates' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Enhanced Security and Identification',
          impact: 'Prevent fraud and ensure secure identification of citizens and government employees.',
          benefits: [
            'RFID-enabled ID cards, passports, and driver licenses ensure accurate identification',
            'RTLS can be used in sensitive government buildings to track personnel and visitors',
            'Improves overall security and reduces unauthorized access'
          ],
          metrics: [
            { label: 'Identification Accuracy', value: 'Near 100%' },
            { label: 'Security Incidents', value: 'Significant reduction' }
          ]
        },
        {
          title: 'Operational Efficiency',
          impact: 'Improve the management of public assets, transportation systems, and waste collection services.',
          benefits: [
            'RFID and RTLS can be used to track high-value assets to prevent loss',
            'Monitor the condition and maintenance schedules of infrastructure',
            'Optimize resource allocation and service delivery'
          ],
          metrics: [
            { label: 'Asset Management', value: '20-30% improvement' },
            { label: 'Service Delivery', value: '15-25% faster' }
          ]
        },
        {
          title: 'Public Safety and Emergency Response',
          impact: 'Enable faster, more coordinated responses to emergencies and improve disaster management.',
          benefits: [
            'Use RFID for inventory management of emergency supplies and medical kits',
            'Deploy RTLS to track emergency vehicles, personnel, and critical supplies',
            'Improves coordination and response times during crises'
          ],
          metrics: [
            { label: 'Response Time', value: '30-50% faster' },
            { label: 'Coordination', value: 'Significantly improved' }
          ]
        },
        {
          title: 'Transparency and Accountability',
          impact: 'Increase transparency in procurement and asset usage, reducing fraud and losses.',
          benefits: [
            'RFID and RTLS improve transparency by tracking critical goods',
            'Provides complete audit trails for all government operations',
            'Reduces fraud and improves public trust'
          ],
          metrics: [
            { label: 'Transparency', value: 'Complete visibility' },
            { label: 'Fraud Reduction', value: '20-40% decrease' }
          ]
        },
        {
          title: 'Improved Citizen Services',
          impact: 'Enhance the user experience in public spaces through seamless access to government services.',
          benefits: [
            'RFID-enabled smart cards facilitate seamless access to services',
            'RTLS helps monitor and optimize public transportation systems',
            'Improves overall citizen satisfaction and service quality'
          ],
          metrics: [
            { label: 'Service Access', value: 'Seamless experience' },
            { label: 'Resource Availability', value: 'Real-time updates' }
          ]
        }
      ]
    }
  },
  grocery: {
    title: 'Grocery',
    subtitle: 'Retail Grocery',
    image: null,
    content: {
      overview: 'The adoption of RFID (Radio Frequency Identification) and RTLS (Real-Time Location Systems) in grocery retail is poised to accelerate as the industry prioritizes efficiency, sustainability, and enhanced customer experiences. These technologies are revolutionizing supply chains, enabling smart inventory management, and creating frictionless shopping experiences.',
      trends: [
        {
          title: 'Seamless Supply Chain Integration',
          description: 'RFID and RTLS revolutionize supply chains by providing real-time tracking of products from farms and factories to store shelves.',
          metrics: [
            { label: 'Delivery Speed', value: 'Faster deliveries' },
            { label: 'Waste Prevention', value: 'Reduced spoilage' }
          ]
        },
        {
          title: 'Smart Inventory and Waste Reduction',
          description: 'These technologies enable more accurate inventory management, with sensors tracking stock levels, product freshness, and expiration dates.',
          metrics: [
            { label: 'Inventory Accuracy', value: 'Over 95%' },
            { label: 'Food Waste', value: '20-30% reduction' }
          ]
        },
        {
          title: 'Frictionless Shopping Experiences',
          description: 'Future stores will leverage RFID for cashier-less shopping, allowing customers to pick items and leave with automatic scanning.',
          metrics: [
            { label: 'Checkout Time', value: '50-70% reduction' },
            { label: 'Customer Convenience', value: 'Significantly enhanced' }
          ]
        },
        {
          title: 'Omnichannel Fulfillment',
          description: 'As online grocery shopping grows, RFID and RTLS play a critical role in accurate order fulfillment for delivery or curbside pickup.',
          metrics: [
            { label: 'Order Accuracy', value: '98% improvement' },
            { label: 'Customer Trust', value: 'Significantly boosted' }
          ]
        },
        {
          title: 'Advanced Analytics and Personalization',
          description: 'Data collected through RFID and RTLS enables grocers to understand purchasing patterns and optimize product placement.',
          metrics: [
            { label: 'Decision Making', value: 'More strategic' },
            { label: 'Customer Loyalty', value: 'Enhanced' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Seamless Supply Chain Integration',
          impact: 'RFID and RTLS revolutionize supply chains by providing real-time tracking of products from farms and factories to store shelves.',
          benefits: [
            'Ensures faster deliveries with real-time tracking',
            'Reduces waste by preventing spoilage through better monitoring',
            'Enables grocers to meet demand with precision'
          ],
          metrics: [
            { label: 'Delivery Speed', value: 'Faster deliveries' },
            { label: 'Waste Prevention', value: 'Reduced spoilage' }
          ]
        },
        {
          title: 'Smart Inventory and Waste Reduction',
          impact: 'These technologies enable more accurate inventory management, with sensors tracking stock levels, product freshness, and expiration dates.',
          benefits: [
            'Enables more accurate inventory management',
            'Sensors track stock levels, product freshness, and expiration dates',
            'Helps minimize overstocking and spoilage while supporting sustainability goals'
          ],
          metrics: [
            { label: 'Inventory Accuracy', value: 'Over 95%' },
            { label: 'Food Waste', value: '20-30% reduction' }
          ]
        },
        {
          title: 'Frictionless Shopping Experiences',
          impact: 'Future stores will leverage RFID for cashier-less shopping, allowing customers to pick items and leave with automatic scanning.',
          benefits: [
            'RFID-based cashier-less checkouts reduce average checkout times by 50-70%',
            'Enhances customer convenience and satisfaction',
            'Reduces labor costs and improves store efficiency'
          ],
          metrics: [
            { label: 'Checkout Time', value: '50-70% reduction' },
            { label: 'Customer Convenience', value: 'Significantly enhanced' }
          ]
        },
        {
          title: 'Omnichannel Fulfillment',
          impact: 'As online grocery shopping grows, RFID and RTLS play a critical role in accurate order fulfillment for delivery or curbside pickup.',
          benefits: [
            'For online grocery orders, RFID and RTLS can improve accuracy to 98%',
            'Boosts customer trust and retention',
            'Enables seamless omnichannel experiences'
          ],
          metrics: [
            { label: 'Order Accuracy', value: '98% improvement' },
            { label: 'Customer Trust', value: 'Significantly boosted' }
          ]
        },
        {
          title: 'Advanced Analytics and Personalization',
          impact: 'Data collected through RFID and RTLS enables grocers to understand purchasing patterns and optimize product placement.',
          benefits: [
            'Enables grocers to understand purchasing patterns',
            'Optimizes product placement for better sales',
            'Offers personalized promotions and experiences'
          ],
          metrics: [
            { label: 'Decision Making', value: 'More strategic' },
            { label: 'Customer Loyalty', value: 'Enhanced' }
          ]
        }
      ]
    }
  },
  highTech: {
    title: 'High Tech',
    subtitle: 'Technology & Software',
    image: null,
    content: {
      overview: 'The high-tech industry, encompassing electronics, semiconductors, data centers, and advanced manufacturing, thrives on precision, efficiency, and innovation. As factories, data centers, and supply chains evolve towards greater digitization, RFID (Radio Frequency Identification) and RTLS (Real-Time Location Systems) are becoming essential enablers of next-generation manufacturing, logistics, and asset management.',
      trends: [
        {
          title: 'Real-Time Asset Tracking in Smart Factories',
          description: 'RFID and RTLS enable real-time tracking of high-value assets such as tools, raw materials, and work-in-progress (WIP) items.',
          metrics: [
            { label: 'Asset Search Time', value: '50%–75% improvement' },
            { label: 'Asset Utilization', value: '20%–30% increase' }
          ]
        },
        {
          title: 'Enhanced Inventory and Component Traceability',
          description: 'High-tech manufacturing requires strict traceability of components to ensure product quality and regulatory compliance.',
          metrics: [
            { label: 'Inventory Accuracy', value: '95%–99%' },
            { label: 'Traceability Compliance', value: 'Near 100%' }
          ]
        },
        {
          title: 'Automation of Supply Chain Operations',
          description: 'By integrating RFID and RTLS with IoT and ERP systems, high-tech companies can automate key supply chain processes.',
          metrics: [
            { label: 'Receiving Errors', value: '50%–70% reduction' },
            { label: 'Order Processing Time', value: '20%–40% reduction' }
          ]
        },
        {
          title: 'Improved Equipment Utilization and Maintenance',
          description: 'RTLS-enabled tracking of machinery and tools helps manufacturers improve equipment utilization and enables predictive maintenance.',
          metrics: [
            { label: 'Equipment Utilization', value: '10%–20% increase' },
            { label: 'Maintenance Costs', value: '15%–30% reduction' }
          ]
        },
        {
          title: 'Increased Security in Data Centers',
          description: 'Data centers house high-value IT equipment such as servers and storage devices. RFID and RTLS can track these assets in real-time.',
          metrics: [
            { label: 'Equipment Loss/Theft', value: '50%–80% reduction' },
            { label: 'Audit Accuracy', value: 'Near 100%' }
          ]
        }
      ],
      detailedAnalysis: [
        {
          title: 'Real-Time Asset Tracking in Smart Factories',
          impact: 'RFID and RTLS enable real-time tracking of high-value assets such as tools, raw materials, and work-in-progress (WIP) items.',
          benefits: [
            'This visibility reduces asset search time and ensures better utilization of resources',
            'Improves overall operational efficiency',
            'Enables better resource planning and allocation'
          ],
          metrics: [
            { label: 'Asset Search Time Reduction', value: '50%–75% improvement' },
            { label: 'Increase in Asset Utilization', value: '20%–30%' }
          ]
        },
        {
          title: 'Enhanced Inventory and Component Traceability',
          impact: 'High-tech manufacturing requires strict traceability of components to ensure product quality and regulatory compliance.',
          benefits: [
            'RFID-tagged components allow manufacturers to track parts from suppliers to final assembly',
            'Ensures product quality and regulatory compliance',
            'Provides complete audit trails for quality control'
          ],
          metrics: [
            { label: 'Inventory Accuracy Improvement', value: '95%–99%' },
            { label: 'Compliance with Traceability Requirements', value: 'Near 100%' }
          ]
        },
        {
          title: 'Automation of Supply Chain Operations',
          impact: 'By integrating RFID and RTLS with IoT and ERP systems, high-tech companies can automate key supply chain processes.',
          benefits: [
            'Automates receiving, warehousing, and shipping processes',
            'Reduces errors and improves efficiency',
            'Enables seamless integration with existing systems'
          ],
          metrics: [
            { label: 'Reduction in Receiving and Shipping Errors', value: '50%–70%' },
            { label: 'Order Processing Time Reduction', value: '20%–40%' }
          ]
        },
        {
          title: 'Improved Equipment Utilization and Maintenance',
          impact: 'RTLS-enabled tracking of machinery and tools helps manufacturers improve equipment utilization and enables predictive maintenance.',
          benefits: [
            'Improves equipment utilization through better tracking',
            'Enables predictive maintenance by monitoring usage and operating conditions',
            'Reduces downtime and extends equipment lifespan'
          ],
          metrics: [
            { label: 'Increase in Equipment Utilization', value: '10%–20%' },
            { label: 'Reduction in Maintenance Costs', value: '15%–30%' }
          ]
        },
        {
          title: 'Increased Security in Data Centers',
          impact: 'Data centers house high-value IT equipment such as servers and storage devices. RFID and RTLS can track these assets in real-time.',
          benefits: [
            'Ensures equipment is always in the right place',
            'Provides alerts in case of unauthorized movement',
            'Improves overall security and asset protection'
          ],
          metrics: [
            { label: 'Reduction in Equipment Loss/Theft', value: '50%–80%' },
            { label: 'Improvement in Asset Audit Accuracy', value: 'Near 100%' }
          ]
        }
      ]
    }
  }
};
