'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChromaGrid from '../../components/ChromaGrid';

export default function ApplicationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const applications = [
    {
      id: 1,
      title: 'Inventory Management',
      subtitle: 'Smart Inventory Control',
      description: 'Automated tracking and management of inventory levels with real-time updates and predictive analytics.',
      image: '/assets/applications/inventory_management.png',
      category: 'Management',
      detailedContent: {
        overview: 'The integration of RFID, RTLS, and IoT provides a comprehensive solution for real-time inventory management by combining automated identification, precise geospatial tracking, and continuous condition monitoring. RFID enables non-line-of-sight asset tracking, while RTLS localizes assets using wireless signals (e.g., UWB, BLE). IoT sensors enhance these systems by capturing real-time environmental data (e.g., temperature, humidity) for condition-aware tracking and predictive alerts.',
        technologies: [
          {
            title: 'RFID',
            description: 'Provides automatic identification with unique EPCs (Electronic Product Codes) for non-line-of-sight asset tracking.'
          },
          {
            title: 'RTLS',
            description: 'Leverages time-of-flight (ToF), RSSI (Received Signal Strength Indicator), and triangulation techniques for asset localization.'
          },
          {
            title: 'IoT Sensors',
            description: 'Capture multi-dimensional data (temperature, vibration, moisture) to ensure optimal handling conditions and generate alerts for deviations.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Identification & Localization',
            subtitle: 'RFID & RTLS',
            description: 'RFID provides automatic identification with unique EPCs (Electronic Product Codes). RTLS systems leverage time-of-flight (ToF), RSSI (Received Signal Strength Indicator), and triangulation techniques for asset localization.',
            metrics: [
              { label: 'Inventory accuracy improvement', value: '95-98%' },
              { label: 'Reduction in asset search time', value: 'up to 90%' }
            ]
          },
          {
            title: 'Real-Time Condition Monitoring',
            subtitle: 'IoT Sensors',
            description: 'IoT sensors capture multi-dimensional data (temperature, vibration, moisture) to ensure optimal handling conditions, generating alerts for deviations.',
            metrics: [
              { label: 'Reduction in product spoilage', value: '15-25%' },
              { label: 'Improvement in handling compliance', value: '95-98%' }
            ]
          },
          {
            title: 'Unified Data Stream & Analytics',
            subtitle: 'Integrated Platform',
            description: 'Centralized data platforms ingest RFID reads, RTLS location events, and IoT sensor data, enabling advanced analytics (e.g., predictive maintenance, route optimization, and demand forecasting).',
            metrics: [
              { label: 'Improvement in decision-making speed', value: '20-30%' },
              { label: 'Reduction in lead time variability', value: '10-20%' }
            ]
          },
          {
            title: 'Predictive & Prescriptive Intelligence',
            subtitle: 'Machine Learning',
            description: 'Machine learning models trained on historical RFID and IoT data provide predictive insights (e.g., when an asset will require maintenance) and prescriptive actions (e.g., optimal replenishment schedules).',
            metrics: [
              { label: 'Reduction in stockouts', value: '20-30%' },
              { label: 'Improvement in demand forecasting', value: '15-25%' }
            ]
          }
        ],
        industryUseCases: [
          {
            title: 'Manufacturing',
            description: 'Real-time tracking of raw materials, components, and finished goods across production lines and warehouses. IoT sensors monitor equipment and environmental conditions to ensure optimal manufacturing processes.',
            metrics: [
              'Inventory accuracy improvement: 95-98%',
              'Reduction in material handling errors: up to 80%',
              'Decrease in production downtime: 20-30%',
              'Increase in production efficiency: 10-20%',
              'Reduction in material waste: 15-25%'
            ]
          },
          {
            title: 'Automotive',
            description: 'Tracking of parts across the supply chain and assembly lines using RFID and RTLS, while IoT sensors monitor environmental factors affecting part quality.',
            metrics: [
              'Supply chain visibility improvement: 30-35%',
              'Reduction in production delays: 15-20%',
              'Increase in JIT (Just-In-Time) efficiency: 20-25%',
              'Reduction in rework due to incorrect parts: 20-30%'
            ]
          },
          {
            title: 'Healthcare',
            description: 'RFID tracks medical equipment and supplies, RTLS monitors staff and patient movement, and IoT sensors ensure proper storage conditions for temperature-sensitive products like vaccines.',
            metrics: [
              'Inventory accuracy improvement: 95-98%',
              'Reduction in expired or wasted inventory: 20-30%',
              'Decrease in time spent locating critical assets: up to 90%',
              'Increase in patient safety compliance: 15-20%'
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Material Flow',
      subtitle: 'Optimized Supply Chain',
      description: 'End-to-end material tracking from supplier to production with intelligent routing and bottleneck detection.',
      image: '/assets/applications/material_flow.png',
      category: 'Operations',
      detailedContent: {
        overview: 'The integration of RFID (Radio-Frequency Identification), RTLS (Real-Time Location Systems), and IoT (Internet of Things) are critical to the future of material flow across industries by enabling automated, real-time tracking, condition-aware handling, and predictive decision-making. With end-to-end visibility, process automation, and advanced analytics, businesses can achieve significant improvements in inventory accuracy, operational efficiency, and regulatory compliance.',
        technologies: [
          {
            title: 'RFID',
            description: 'Enables non-line-of-sight identification and tracking of materials across supply chains. Facilitates real-time inventory updates at critical touchpoints (e.g., loading docks, warehouses, production lines).'
          },
          {
            title: 'RTLS',
            description: 'Uses wireless communication technologies (UWB, BLE, Wi-Fi) for real-time spatial tracking of assets and materials in defined environments. Provides precise location data for dynamic material flow management.'
          },
          {
            title: 'IoT Sensors',
            description: 'Monitor real-time environmental conditions (e.g., temperature, humidity, vibration) critical for sensitive materials during storage and transport. Provide predictive maintenance alerts for handling equipment.'
          }
        ],
        capabilities: [
          {
            title: 'RFID Technology',
            subtitle: 'Material Identification',
            description: 'Enables non-line-of-sight identification and tracking of materials across supply chains. Facilitates real-time inventory updates at critical touchpoints (e.g., loading docks, warehouses, production lines). Reduces manual scanning and human errors.',
            metrics: [
              { label: 'Inventory accuracy improvement', value: 'up to 98%' }
            ]
          },
          {
            title: 'RTLS Technology',
            subtitle: 'Spatial Tracking',
            description: 'Uses wireless communication technologies (UWB, BLE, Wi-Fi) for real-time spatial tracking of assets and materials in defined environments. Provides precise location data for dynamic material flow management and automated routing in warehouses and production floors.',
            metrics: [
              { label: 'Reduction in material handling time', value: '20-30%' }
            ]
          },
          {
            title: 'IoT Sensors',
            subtitle: 'Condition Monitoring',
            description: 'Monitor real-time environmental conditions (e.g., temperature, humidity, vibration) critical for sensitive materials during storage and transport. Provide predictive maintenance alerts for handling equipment (e.g., conveyors, forklifts) to prevent bottlenecks.',
            metrics: [
              { label: 'Reduction in material waste', value: '15-30%' }
            ]
          },
          {
            title: 'Unified Analytics Platform',
            subtitle: 'Data Integration',
            description: 'Consolidates data from RFID, RTLS, and IoT devices for centralized monitoring, reporting, and predictive analytics. Supports machine learning models for demand forecasting, route optimization, and anomaly detection in material flow.',
            metrics: [
              { label: 'Reduction in lead time variability', value: '10-20%' }
            ]
          }
        ],
        keyPoints: [
          {
            title: 'End-to-End Supply Chain Visibility',
            description: 'Real-time data from RFID and RTLS systems, augmented by IoT sensors, provides continuous visibility of material flow across production, storage, and distribution stages.',
            metric: 'Supply chain visibility improvement by 25-35%.'
          },
          {
            title: 'Process Automation and Error Reduction',
            description: 'Automation of material identification, tracking, and handling reduces dependency on manual processes, improving accuracy and throughput.',
            metric: 'Reduction in manual errors by up to 80%.'
          },
          {
            title: 'Predictive Maintenance and Downtime Reduction',
            description: 'IoT-enabled monitoring of material handling equipment helps predict failures and schedule proactive maintenance, minimizing disruptions.',
            metric: 'Reduction in unplanned downtime by 20-30%.'
          },
          {
            title: 'Compliance and Traceability',
            description: 'RFID and IoT-driven systems ensure traceability of high-value or regulated materials, crucial for industries such as aerospace, healthcare, and pharmaceuticals.',
            metric: 'Traceability accuracy improvement up to 98%.'
          },
          {
            title: 'Inventory Optimization',
            description: 'Real-time tracking and predictive analytics help optimize inventory levels, reduce excess stock, and ensure timely replenishment.',
            metric: 'Reduction in inventory holding costs by 10-20%.'
          },
          {
            title: 'Sustainability',
            description: 'Improved material flow management reduces waste and energy consumption, contributing to sustainability goals.',
            metric: 'Reduction in material waste and energy consumption by 15-30%.'
          }
        ],
        industryUseCases: [
          {
            title: 'Automotive',
            description: 'Tracking of parts across the supply chain and assembly lines using RFID and RTLS, while IoT sensors monitor environmental factors affecting part quality.',
            metrics: [
              'Supply chain visibility improvement: 30-35%',
              'Reduction in production delays: 15-20%',
              'Increase in JIT (Just-In-Time) efficiency: 20-25%',
              'Reduction in rework due to incorrect parts: 20-30%'
            ]
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Personnel Flow',
      subtitle: 'Workforce Optimization',
      description: 'Real-time personnel tracking and workflow optimization for improved productivity and safety.',
      image: '/assets/applications/personnel_flow.png',
      category: 'Human Resources',
      detailedContent: {
        overview: 'RFID provides unique identification of personnel via tags or badges, while RTLS offers continuous location tracking using wireless technologies such as UWB, BLE, or Wi-Fi. IoT devices enhance these systems by capturing environmental data (e.g., temperature, air quality) and personnel-specific metrics (e.g., heart rate, proximity to hazards), enabling dynamic decision-making for workforce management.',
        technologies: [
          {
            title: 'RFID',
            description: 'Facilitates automated access control to restricted areas by identifying personnel via RFID-enabled badges. Tracks personnel movement within facilities to improve workflow visibility.'
          },
          {
            title: 'RTLS',
            description: 'Provides real-time positioning of personnel using UWB, BLE, or Wi-Fi signals, enabling dynamic tracking of workforce distribution across large sites (e.g., factories, hospitals, construction sites).'
          },
          {
            title: 'IoT Sensors',
            description: 'IoT-enabled wearables monitor personnel health metrics (e.g., heart rate, temperature) and environmental conditions (e.g., gas leaks, air quality) to ensure safety in hazardous environments.'
          }
        ],
        capabilities: [
          {
            title: 'RFID for Identification and Access Control',
            subtitle: 'RFID Technology',
            description: 'Facilitates automated access control to restricted areas by identifying personnel via RFID-enabled badges. Tracks personnel movement within facilities to improve workflow visibility.',
            metrics: [
              { label: 'Reduction in unauthorized access incidents', value: '20-30%' }
            ]
          },
          {
            title: 'RTLS for Real-Time Location and Flow Optimization',
            subtitle: 'RTLS Technology',
            description: 'Provides real-time positioning of personnel using UWB, BLE, or Wi-Fi signals, enabling dynamic tracking of workforce distribution across large sites (e.g., factories, hospitals, construction sites). Enhances flow efficiency by identifying bottlenecks and optimizing workforce allocation.',
            metrics: [
              { label: 'Improvement in workflow efficiency', value: '15-25%' }
            ]
          },
          {
            title: 'IoT Sensors for Environmental and Health Monitoring',
            subtitle: 'IoT Technology',
            description: 'IoT-enabled wearables monitor personnel health metrics (e.g., heart rate, temperature) and environmental conditions (e.g., gas leaks, air quality) to ensure safety in hazardous environments. Provides real-time alerts for potential safety risks, enabling proactive interventions.',
            metrics: [
              { label: 'Reduction in safety incidents', value: '25-40%' }
            ]
          },
          {
            title: 'Unified Platform for Data Integration and Analytics',
            subtitle: 'Integrated Platform',
            description: 'Aggregates data from RFID, RTLS, and IoT devices into a centralized platform for real-time monitoring, reporting, and predictive analysis. Enables machine learning models for anomaly detection, risk assessment, and predictive workforce planning.',
            metrics: [
              { label: 'Reduction in response time to incidents', value: '30-50%' }
            ]
          }
        ],
        keyPoints: [
          {
            title: 'Workforce Safety and Compliance',
            description: 'RFID and RTLS ensure real-time visibility of personnel in high-risk zones, while IoT sensors monitor environmental hazards, ensuring compliance with safety regulations.',
            metric: 'Reduction in non-compliance penalties by 20-30%.'
          },
          {
            title: 'Access Control and Security',
            description: 'RFID badges and RTLS-based geofencing enable automated access control, ensuring only authorized personnel enter restricted areas.',
            metric: 'Improvement in access control accuracy by 95-98%.'
          },
          {
            title: 'Workflow and Productivity Optimization',
            description: 'RTLS data enables dynamic allocation of personnel based on real-time workload, minimizing idle time and optimizing task execution.',
            metric: 'Increase in workforce productivity by 15-20%.'
          },
          {
            title: 'Incident Response and Emergency Management',
            description: 'IoT sensors and RTLS provide critical data during emergencies, such as personnel locations and environmental conditions, enabling faster and more effective responses.',
            metric: 'Reduction in evacuation time during emergencies by 30-50%.'
          },
          {
            title: 'Health Monitoring and Proactive Risk Mitigation',
            description: 'Wearable IoT devices track vital signs of personnel in real time, providing early warnings for health issues or fatigue, especially in physically demanding industries.',
            metric: 'Reduction in health-related incidents by 20-30%.'
          }
        ],
        industryUseCases: [
          {
            title: 'Manufacturing',
            description: 'Real-time tracking of workforce across production lines to optimize task allocation and ensure safety in hazardous zones.',
            metric: 'Increase in workflow efficiency by 15-25%.'
          },
          {
            title: 'Construction',
            description: 'RTLS tracks personnel on large construction sites to improve safety compliance and prevent unauthorized access to dangerous areas. IoT sensors monitor environmental conditions such as dust and gas levels.',
            metric: 'Reduction in safety incidents by 30-40%.'
          },
          {
            title: 'Healthcare',
            description: 'RFID-enabled badges track healthcare personnel to ensure availability in critical zones (e.g., operating rooms), while IoT devices monitor patient and staff health metrics.',
            metric: 'Reduction in response time to critical events by 30-50%.'
          },
          {
            title: 'Logistics & Warehousing',
            description: 'RTLS tracks workforce movement in warehouses to optimize picking and packing tasks, while IoT-enabled wearables monitor worker health during physically demanding operations.',
            metric: 'Increase in workforce productivity by 15-20%.'
          },
          {
            title: 'Energy & Utilities',
            description: 'RFID and RTLS track personnel at remote sites (e.g., oil rigs, power plants) to ensure safety in hazardous environments. IoT sensors monitor for gas leaks and other environmental hazards.',
            metric: 'Reduction in evacuation time during emergencies by 30-50%.'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Operational Efficiency',
      subtitle: 'Performance Analytics',
      description: 'Comprehensive analytics platform for monitoring and improving operational efficiency across all processes.',
      image: '/assets/applications/operational_efficiency.png',
      category: 'Analytics',
      detailedContent: {
        overview: 'The combination of RFID, RTLS, and IoT technologies deliver measurable improvements across key operational metrics, including inventory accuracy up to 98%, reduction in downtime by 20-30%, process cycle time reduction of 20-30%, supply chain visibility improvement by 25-35%, labor cost savings of 20-30%, and safety incident reduction by 20-30%. By adopting a unified platform to manage RFID, RTLS, and IoT data, businesses can further enhance decision-making, reduce costs, and improve responsiveness, providing a significant competitive advantage in an increasingly data-driven operational landscape.',
        technologies: [
          {
            title: 'RFID',
            description: 'Automated identification and tracking of assets and inventory with non-line-of-sight capabilities.'
          },
          {
            title: 'RTLS',
            description: 'Real-time location tracking of assets and personnel for workflow optimization and safety monitoring.'
          },
          {
            title: 'IoT Sensors',
            description: 'Condition monitoring and environmental sensing for predictive maintenance and quality control.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Asset and Inventory Tracking',
            subtitle: 'RFID, RTLS, IoT',
            description: 'RFID enables automatic, non-line-of-sight identification of assets and inventory, reducing manual scanning and human errors. RTLS provides precise real-time location data of assets and personnel, ensuring timely availability of critical resources. IoT sensors monitor asset conditions (temperature, vibration, pressure) to ensure quality and trigger alerts for anomalies.',
            metrics: [
              { label: 'Inventory accuracy improvement', value: '95-98%' },
              { label: 'Reduction in asset search time', value: 'up to 90%' },
              { label: 'Decrease in manual handling errors', value: '70-80%' }
            ]
          },
          {
            title: 'Process Automation and Workflow Optimization',
            subtitle: 'RFID, RTLS, IoT',
            description: 'RFID tags enable automated check-ins and check-outs of goods at key process points (e.g., warehouses, production lines). RTLS automates workflow monitoring by tracking real-time movement of materials and personnel. IoT-enabled devices trigger automated actions (e.g., replenishment, maintenance requests) based on real-time conditions.',
            metrics: [
              { label: 'Reduction in process cycle time', value: '20-30%' },
              { label: 'Increase in operational throughput', value: '15-25%' },
              { label: 'Reduction in labor costs', value: '20-30%' }
            ]
          },
          {
            title: 'Predictive Maintenance and Downtime Reduction',
            subtitle: 'IoT Sensors, RTLS',
            description: 'IoT sensors continuously monitor equipment health and environmental conditions, enabling predictive maintenance based on usage patterns and real-time data. RTLS tracks equipment utilization, ensuring optimal scheduling of preventive maintenance.',
            metrics: [
              { label: 'Reduction in unplanned downtime', value: '20-30%' },
              { label: 'Increase in equipment lifespan', value: '10-15%' },
              { label: 'Maintenance cost savings', value: '15-20%' }
            ]
          },
          {
            title: 'Supply Chain Visibility and Optimization',
            subtitle: 'RFID, RTLS, IoT',
            description: 'RFID and RTLS provide end-to-end visibility across the supply chain, while IoT sensors ensure condition monitoring during transport and storage. Real-time data from a unified platform enables dynamic rerouting, better inventory planning, and demand forecasting.',
            metrics: [
              { label: 'Improvement in supply chain visibility', value: '25-35%' },
              { label: 'Reduction in lead time variability', value: '10-20%' },
              { label: 'Improvement in on-time delivery', value: '15-20%' }
            ]
          },
          {
            title: 'Workforce Management and Safety',
            subtitle: 'RTLS, RFID, IoT',
            description: 'RTLS tracks workforce movements in real-time, optimizing task allocation and ensuring adherence to safety protocols. RFID badges and IoT-enabled wearables enhance access control and monitor worker conditions (e.g., heart rate, exposure to hazardous environments).',
            metrics: [
              { label: 'Reduction in safety incidents', value: '20-30%' },
              { label: 'Improvement in workforce productivity', value: '15-20%' },
              { label: 'Reduction in task completion time', value: '20-30%' }
            ]
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Real Time Asset Tracking',
      subtitle: 'Live Asset Monitoring',
      description: 'Real-time tracking of valuable assets with geofencing, alerts, and comprehensive reporting.',
      image: '/assets/applications/real_time_asset_tracking.png',
      category: 'Asset Management',
      detailedContent: {
        overview: 'RFID, RTLS, and IoT technologies are transforming the future of asset tracking and material flow by delivering automated, real-time insights, end-to-end visibility, and predictive intelligence across industries such as warehouse management, supply chain logistics, and grocery retail. These technologies enable businesses to optimize asset utilization, reduce operational costs, and enhance decision-making through real-time visibility and process automation. With measurable success across industries—including 95-98% inventory accuracy, up to 99% order accuracy, 20-30% reduction in downtime, 30-35% improvement in supply chain visibility, and up to 90% reduction in asset search time—companies adopting these solutions see significant improvements in operational efficiency, compliance, and cost savings.',
        technologies: [
          {
            title: 'RFID',
            description: 'Non-line-of-sight asset identification and automated inventory management with high accuracy.'
          },
          {
            title: 'RTLS',
            description: 'Real-time spatial tracking using UWB and BLE technologies for precise asset localization.'
          },
          {
            title: 'IoT Sensors',
            description: 'Environmental monitoring and condition sensing for predictive maintenance and quality control.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Identification and Inventory Management',
            subtitle: 'RFID',
            description: 'RFID technology enables non-line-of-sight asset identification, drastically reducing manual effort and error rates in asset tracking.',
            metrics: [
              { label: 'Inventory accuracy improvement', value: '95-98%' },
              { label: 'Reduction in manual handling errors', value: 'up to 80%' },
              { label: 'Decrease in asset search time', value: 'up to 90%' }
            ]
          },
          {
            title: 'Precise Localization and Workflow Automation',
            subtitle: 'RTLS',
            description: 'RTLS systems, using wireless technologies such as UWB (Ultra-Wideband) and BLE (Bluetooth Low Energy), provide real-time spatial tracking of assets and personnel within facilities. This allows for workflow optimization, faster asset retrieval, and JIT (Just-In-Time) operations.',
            metrics: [
              { label: 'Reduction in asset retrieval time', value: 'up to 85%' },
              { label: 'Improvement in asset utilization', value: '10-20%' },
              { label: 'Increase in operational efficiency', value: '15-25%' }
            ]
          },
          {
            title: 'Condition Monitoring and Predictive Maintenance',
            subtitle: 'IoT',
            description: 'IoT sensors attached to high-value or sensitive assets monitor environmental factors such as temperature, humidity, and vibration, ensuring proper handling and storage. Integrated machine learning models predict potential failures, enabling proactive maintenance.',
            metrics: [
              { label: 'Reduction in unplanned downtime', value: '20-30%' },
              { label: 'Increase in asset lifespan', value: '10-15%' },
              { label: 'Maintenance cost reduction', value: '15-20%' }
            ]
          },
          {
            title: 'Unified Platform for Data Integration and Analytics',
            subtitle: 'Integrated Platform',
            description: 'By consolidating data from RFID, RTLS, and IoT systems on a single platform, businesses can leverage advanced analytics and real-time dashboards for anomaly detection, predictive insights, and better decision-making. This integration supports regulatory compliance, performance optimization, and cost reduction.',
            metrics: [
              { label: 'Reduction in compliance-related incidents', value: '20-30%' },
              { label: 'Improvement in decision-making speed', value: '20-30%' },
              { label: 'Reduction in asset loss/theft', value: '20-30%' }
            ]
          }
        ],
        caseStudies: [
          {
            title: 'Improving Equipment Utilization in Healthcare',
            challenge: 'A large hospital faced frequent delays in locating critical medical equipment such as infusion pumps and portable monitors, resulting in extended patient wait times and underutilization of assets.',
            solution: 'The hospital implemented an RTLS solution combined with RFID-tagged medical equipment. IoT sensors were deployed to monitor the condition of temperature-sensitive devices.',
            results: [
              'Asset search time reduced by 85%, enabling faster response times during emergencies.',
              'Asset utilization increased by 20%, reducing the need for additional purchases.',
              'Inventory accuracy improved to 98%, and annual replacement costs decreased by 25%.'
            ]
          },
          {
            title: 'Enhancing Production Efficiency in Automotive Manufacturing',
            challenge: 'An automotive manufacturer struggled with misplaced tools and parts on the assembly line, causing frequent production delays and increasing downtime.',
            solution: 'RFID tags were attached to all tools and critical components, while RTLS was implemented to provide precise location data. IoT sensors monitored equipment performance.',
            results: [
              'Reduction in production downtime by 30% due to predictive maintenance.',
              'Improvement in process efficiency by 25%, with faster tool and part retrieval.',
              'Tool loss reduced by 90%, saving significant costs on replacements.'
            ]
          },
          {
            title: 'Optimizing Cold Chain Logistics in Pharmaceuticals',
            challenge: 'A pharmaceutical company faced significant losses due to temperature-sensitive products being exposed to improper storage and transport conditions.',
            solution: 'RFID tags were attached to pharmaceutical shipments, and IoT-enabled temperature sensors were placed in transport containers. RTLS was implemented in distribution centers.',
            results: [
              'Reduction in product spoilage by 30%, leading to significant cost savings.',
              'Regulatory compliance improved by 20%, reducing fines and penalties.',
              'On-time delivery rate improved by 15%, enhancing customer satisfaction.'
            ]
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Armory',
      subtitle: 'Security Asset Management',
      description: 'Specialized tracking and management system for security equipment, weapons, and tactical gear.',
      image: '/assets/applications/armory.png',
      category: 'Security',
      detailedContent: {
        overview: 'The combined use of RFID, RTLS, GPS, 5G, and IoT sensors, managed on a unified platform, provides a robust framework for real-time tracking, condition monitoring, and operational readiness of armory, weapons, personnel, and kits. With measurable success, including up to 98% inventory accuracy, 30-40% reduction in weapon failure incidents, and 50-70% faster audit processes, these technologies significantly enhance security, accountability, and mission readiness.',
        technologies: [
          {
            title: 'RFID',
            description: 'Automated identification and inventory tracking of weapons, kits, and personnel in controlled environments.'
          },
          {
            title: 'RTLS',
            description: 'Real-time indoor positioning of personnel and assets within armories and operational bases.'
          },
          {
            title: 'GPS',
            description: 'Outdoor tracking of weapons and kits during transport or field operations.'
          },
          {
            title: '5G',
            description: 'High-speed, low-latency connectivity for real-time data transmission across dispersed units.'
          },
          {
            title: 'IoT Sensors',
            description: 'Condition monitoring of weapons and kits (e.g., temperature, humidity, shock) to ensure operational readiness.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Armory and Weapon Inventory Management',
            subtitle: 'RFID, RTLS',
            description: 'RFID tags attached to weapons, ammunition, and kits enable automated check-in/check-out processes. RTLS systems provide real-time tracking of high-value assets within armories, ensuring accountability.',
            metrics: [
              { label: 'Inventory accuracy improvement', value: 'up to 98%' },
              { label: 'Reduction in manual logging errors', value: '70-80%' },
              { label: 'Time savings in inventory audits', value: '50-70%' }
            ]
          },
          {
            title: 'Personnel and Kit Tracking',
            subtitle: 'RTLS, GPS, RFID',
            description: 'RTLS tracks personnel and kits within operational bases, while GPS provides real-time location data in the field. RFID tags on personnel and kits ensure rapid identification and assignment during missions.',
            metrics: [
              { label: 'Reduction in kit misplacement incidents', value: '30-40%' },
              { label: 'Improvement in personnel readiness', value: '20-30%' },
              { label: 'Faster mission deployment time', value: '20-25%' }
            ]
          },
          {
            title: 'Weapon Transport and Field Tracking',
            subtitle: 'GPS, 5G, IoT Sensors',
            description: 'GPS enables real-time tracking of weapons and kits during transport to ensure secure delivery. IoT sensors monitor environmental conditions (e.g., temperature, shock) to ensure weapon integrity during transit. 5G connectivity ensures instant data transmission for situational awareness.',
            metrics: [
              { label: 'Improvement in transport security', value: '25-35%' },
              { label: 'Reduction in transit losses', value: '20-30%' },
              { label: 'Increase in response time to anomalies', value: '20-25%' }
            ]
          },
          {
            title: 'Condition Monitoring and Predictive Maintenance',
            subtitle: 'IoT Sensors, Analytics',
            description: 'IoT sensors attached to weapons and kits monitor critical parameters such as humidity, shock, and usage frequency. Predictive analytics provide insights on maintenance schedules, ensuring operational readiness.',
            metrics: [
              { label: 'Reduction in weapon failure incidents', value: '30-40%' },
              { label: 'Increase in asset lifespan', value: '10-20%' },
              { label: 'Reduction in maintenance costs', value: '15-25%' }
            ]
          },
          {
            title: 'High-Speed Data Transmission and Situational Awareness',
            subtitle: '5G, Unified Platform',
            description: '5G connectivity ensures low-latency communication between field units and command centers. A unified platform aggregates data from RFID, RTLS, GPS, and IoT sensors, providing a centralized view of armory, personnel, and asset status.',
            metrics: [
              { label: 'Reduction in communication delays', value: 'up to 50%' },
              { label: 'Improvement in situational awareness', value: '30-40%' },
              { label: 'Faster decision-making time', value: '20-30%' }
            ]
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Security & Loss Prevention',
      subtitle: 'Comprehensive Security',
      description: 'Advanced security monitoring and loss prevention with real-time alerts and incident response.',
      image: '/assets/applications/security_and_loss_prevention.png',
      category: 'Security',
      detailedContent: {
        overview: 'RFID, RTLS, and IoT technologies are transforming security and loss prevention by providing real-time insights, automated control, and predictive intelligence. Across industries, these solutions deliver measurable improvements, including 20-30% reduction in theft and shrinkage, up to 90% improvement in asset recovery, 30% reduction in unauthorized access incidents, and 25-30% reduction in product spoilage.',
        technologies: [
          {
            title: 'RFID',
            description: 'Provides non-line-of-sight, real-time identification of assets and personnel for automated security and access control.'
          },
          {
            title: 'RTLS',
            description: 'Enables real-time location tracking using UWB, BLE, and Wi-Fi technologies for geofencing and asset protection.'
          },
          {
            title: 'IoT Sensors',
            description: 'Monitor environmental conditions and trigger predictive alerts for security threats and unauthorized access.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Asset Identification',
            subtitle: 'RFID',
            description: 'RFID provides non-line-of-sight, real-time identification of assets and personnel, ensuring faster and more accurate tracking across facilities. RFID tags, both passive and active, can be used for diverse asset categories, including high-value equipment, tools, and products.',
            metrics: [
              { label: 'Inventory accuracy improvement', value: '95-98%' },
              { label: 'Reduction in manual tracking errors', value: 'up to 80%' },
              { label: 'Reduction in asset search time', value: 'up to 90%' }
            ]
          },
          {
            title: 'Precise Geolocation and Geofencing',
            subtitle: 'RTLS',
            description: 'RTLS systems provide real-time location tracking using technologies such as UWB (Ultra-Wideband), BLE (Bluetooth Low Energy), and Wi-Fi. RTLS enables geofencing—virtual perimeters for high-security zones—triggering alerts when tagged assets leave designated areas.',
            metrics: [
              { label: 'Reduction in asset retrieval time', value: 'up to 85%' },
              { label: 'Reduction in unauthorized asset movement incidents', value: '25-35%' },
              { label: 'Improvement in asset recovery rate', value: 'up to 90%' }
            ]
          },
          {
            title: 'Condition Monitoring and Predictive Alerts',
            subtitle: 'IoT Sensors',
            description: 'IoT sensors continuously monitor environmental conditions such as temperature, humidity, and vibration, ensuring the integrity of sensitive goods (e.g., pharmaceuticals, perishables, and high-value electronics). Predictive alerts are triggered when conditions deviate from acceptable thresholds, preventing damage and spoilage.',
            metrics: [
              { label: 'Reduction in product spoilage', value: '25-30%' },
              { label: 'Reduction in damage-related losses', value: '20-30%' },
              { label: 'Compliance improvement with handling protocols', value: 'up to 98%' }
            ]
          },
          {
            title: 'Automated Access Control and Workforce Safety',
            subtitle: 'Integrated Security',
            description: 'RFID-enabled badges provide automated access control, restricting unauthorized entry to sensitive areas. RTLS tracks personnel movement in hazardous environments, while IoT-enabled wearables monitor worker health and trigger alerts in case of unsafe conditions.',
            metrics: [
              { label: 'Reduction in unauthorized access incidents', value: '20-30%' },
              { label: 'Improvement in workforce safety compliance', value: '15-20%' },
              { label: 'Reduction in safety incidents', value: '10-25%' }
            ]
          }
        ],
        caseStudies: [
          {
            title: 'Preventing Theft in a Retail Chain',
            challenge: 'A large retail chain faced high inventory shrinkage due to theft and unauthorized product movement. Manual security measures were ineffective in tracking small, high-value items across multiple locations.',
            solution: 'The retailer implemented RFID tags on all products and installed RTLS systems in warehouses and retail stores. IoT sensors monitored store entrances and high-risk zones, providing real-time alerts for unauthorized movements.',
            results: [
              'Inventory shrinkage reduced by 25%, saving millions annually.',
              'Asset recovery rate improved by 85% due to real-time tracking.',
              'Unauthorized movement incidents decreased by 30%, enhancing store security.'
            ]
          },
          {
            title: 'Access Control and Safety in an Oil & Gas Facility',
            challenge: 'A major oil and gas company needed to improve access control to hazardous areas and ensure compliance with safety regulations. Unauthorized entry posed significant risks to both personnel and operations.',
            solution: 'The company deployed RFID-enabled badges for automated access control and RTLS to track personnel movement within the facility. IoT wearables monitored worker health and environmental exposure.',
            results: [
              'Unauthorized access incidents reduced by 30%, improving site security.',
              'Safety incident rate reduced by 20%, enhancing worker protection.',
              'Compliance with safety protocols improved by 98%, reducing regulatory penalties.'
            ]
          },
          {
            title: 'Cold Chain Security for a Pharmaceutical Company',
            challenge: 'A pharmaceutical company faced frequent product losses due to improper handling and temperature excursions during transport, leading to regulatory issues and customer dissatisfaction.',
            solution: 'RFID tags were attached to pharmaceutical shipments, and IoT-enabled temperature and tamper sensors were installed in transport containers. RTLS provided real-time location tracking, and alerts were triggered for any deviations in temperature or unauthorized container openings.',
            results: [
              'Reduction in product spoilage by 30%, leading to significant cost savings.',
              'On-time delivery accuracy improved to 99%, enhancing customer trust.',
              'Regulatory compliance improved by 20%, reducing fines and recalls.'
            ]
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Preventative Maintenance',
      subtitle: 'Predictive Maintenance',
      description: 'IoT-driven maintenance scheduling and predictive analytics to prevent equipment failures.',
      image: '/assets/applications/preventative_maintenance.png',
      category: 'Maintenance',
      detailedContent: {
        overview: 'RFID allows precise identification and history tracking of assets, while RTLS ensures real-time localization of equipment for efficient task execution. IoT sensors provide real-time data on critical asset parameters (e.g., vibration, temperature, and energy consumption), enabling predictive alerts that allow organizations to transition from reactive to proactive maintenance.',
        technologies: [
          {
            title: 'RFID',
            description: 'Provides automated asset identification and maintenance history tracking for predictive maintenance planning.'
          },
          {
            title: 'RTLS',
            description: 'Enables real-time location tracking of mobile equipment and assets for efficient maintenance scheduling.'
          },
          {
            title: 'IoT Sensors',
            description: 'Monitor critical asset parameters in real-time for predictive maintenance and condition-based alerts.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Asset Identification and Maintenance Records',
            subtitle: 'RFID',
            description: 'RFID tags attached to assets store unique identifiers and maintenance history, enabling automated updates of maintenance logs. Maintenance personnel can quickly scan RFID tags to access maintenance schedules, history, and upcoming tasks.',
            metrics: [
              { label: 'Reduction in manual maintenance logging errors', value: 'up to 80%' },
              { label: 'Improvement in asset tracking accuracy', value: '95-98%' },
              { label: 'Increase in maintenance compliance', value: '10-20%' }
            ]
          },
          {
            title: 'Real-Time Location of Critical Equipment',
            subtitle: 'RTLS',
            description: 'RTLS systems enable the precise tracking of mobile equipment, ensuring timely maintenance by identifying the exact location of assets across large facilities. Geofencing with RTLS helps enforce maintenance zones, ensuring critical machinery is serviced only in designated areas.',
            metrics: [
              { label: 'Reduction in equipment search time', value: 'up to 90%' },
              { label: 'Improvement in maintenance efficiency', value: '15-25%' },
              { label: 'Reduction in missed maintenance tasks', value: '20-30%' }
            ]
          },
          {
            title: 'Condition Monitoring and Predictive Maintenance',
            subtitle: 'IoT Sensors',
            description: 'IoT sensors continuously monitor key parameters such as vibration, temperature, pressure, and energy consumption, identifying early warning signs of potential failures. Predictive analytics, powered by machine learning models, provide insights into when an asset is likely to fail, allowing proactive maintenance.',
            metrics: [
              { label: 'Reduction in unplanned downtime', value: '20-40%' },
              { label: 'Increase in asset lifespan', value: '10-15%' },
              { label: 'Reduction in maintenance costs', value: '15-25%' }
            ]
          },
          {
            title: 'Unified Maintenance Platform and Predictive Insights',
            subtitle: 'Integrated Platform',
            description: 'Data from RFID, RTLS, and IoT systems is consolidated on a unified platform, providing a single source of truth for maintenance planning and execution. Advanced analytics generate predictive insights, enabling better resource allocation, maintenance scheduling, and cost control.',
            metrics: [
              { label: 'Reduction in reactive maintenance', value: '30-40%' },
              { label: 'Improvement in maintenance planning efficiency', value: '25-35%' },
              { label: 'Reduction in operational risks', value: '20-30%' }
            ]
          }
        ],
        caseStudies: [
          {
            title: 'Predictive Maintenance in Manufacturing',
            challenge: 'A large automotive parts manufacturer faced frequent unplanned downtime due to equipment failures, resulting in delayed production and high repair costs.',
            solution: 'IoT sensors were installed on critical machinery to monitor temperature and vibration, while RFID tags were attached to all equipment for tracking maintenance history.',
            results: [
              'Reduction in unplanned downtime by 35%, improving overall production efficiency.',
              'Maintenance costs reduced by 20% through proactive servicing.',
              'Increase in equipment lifespan by 15%, lowering capital expenditure on new machinery.'
            ]
          },
          {
            title: 'Condition-Based Monitoring in Energy & Utilities',
            challenge: 'A utility company managing a large network of transformers and substations struggled with sudden equipment failures and long downtimes during repairs.',
            solution: 'IoT sensors were deployed to monitor critical parameters such as load, temperature, and oil pressure in real-time. RTLS was used to track mobile maintenance units.',
            results: [
              'Reduction in reactive maintenance tasks by 40%, improving service reliability.',
              'Reduction in maintenance response time by 25%, minimizing downtime during critical failures.',
              'Improvement in regulatory compliance by 20%, reducing the risk of fines.'
            ]
          },
          {
            title: 'Real-Time Equipment Monitoring in Healthcare',
            challenge: 'A hospital faced frequent failures of critical medical equipment, such as MRI machines and ventilators, due to inadequate maintenance scheduling.',
            solution: 'RFID tags were attached to all medical equipment to automate maintenance history tracking, and IoT sensors were installed to monitor equipment usage and performance.',
            results: [
              'Unplanned equipment downtime reduced by 30%, enhancing patient care.',
              'Maintenance compliance improved by 25%, ensuring timely servicing of all critical assets.',
              'Repair costs reduced by 20%, resulting in significant cost savings.'
            ]
          }
        ]
      }
    },
    {
      id: 9,
      title: 'Compliance',
      subtitle: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting for industry-specific regulations and standards.',
      image: '/assets/applications/compilance.png',
      category: 'Compliance',
      detailedContent: {
        overview: 'RFID technology significantly enhances regulatory and operational compliance across industries by ensuring real-time tracking, automated documentation, and accurate asset identification. By providing end-to-end visibility and traceability, RFID enables organizations to meet stringent industry regulations, improve audit readiness, and reduce manual errors in compliance reporting.',
        technologies: [
          {
            title: 'RFID',
            description: 'Provides automated asset identification and tracking for compliance monitoring and audit trails.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Compliance Monitoring',
            subtitle: 'RFID Technology',
            description: 'RFID enables real-time tracking and automated documentation of assets, ensuring compliance with industry regulations and standards.',
            metrics: [
              { label: 'Compliance accuracy improvement', value: '95-98%' },
              { label: 'Reduction in manual errors', value: '70-80%' },
              { label: 'Improvement in audit readiness', value: '40%' }
            ]
          }
        ],
        industryUseCases: [
          {
            title: 'Healthcare',
            description: 'RFID ensures compliance with sterilization protocols and patient safety regulations by tracking medical equipment and surgical tools.',
            result: '20-30% reduction in compliance-related errors and improved patient safety.'
          },
          {
            title: 'Pharmaceuticals',
            description: 'RFID enables traceability of drugs through the supply chain, ensuring compliance with anti-counterfeiting regulations and proper handling of temperature-sensitive products.',
            result: 'Up to 98% traceability accuracy and 30% reduction in product spoilage.'
          },
          {
            title: 'Aerospace',
            description: 'RFID tracks high-value components and maintenance activities to meet stringent safety and regulatory standards.',
            result: '40% improvement in audit readiness and 25% reduction in inspection time.'
          },
          {
            title: 'Energy & Utilities',
            description: 'RFID automates inspection logs and tracks critical tools and equipment, ensuring compliance with safety protocols in hazardous environments.',
            result: '20-30% reduction in safety incidents and 15-20% improvement in compliance adherence.'
          }
        ]
      }
    },
    {
      id: 10,
      title: 'Linen Management',
      subtitle: 'Hospitality Solutions',
      description: 'Specialized tracking system for hospitality industry linen and textile management.',
      image: '/assets/applications/linen_management.png',
      category: 'Hospitality',
      detailedContent: {
        overview: 'RFID technology is transforming linen management across industries such as healthcare, hospitality, and laundry services by automating tracking, improving inventory accuracy, and enhancing operational efficiency. RFID-enabled linen management systems use embedded tags in fabrics to provide real-time visibility of linen usage, reduce losses, and streamline inventory control.',
        technologies: [
          {
            title: 'RFID',
            description: 'Embedded tags in fabrics provide automated tracking and identification throughout the laundering and distribution process.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Linen Tracking',
            subtitle: 'RFID Technology',
            description: 'RFID tags embedded in linens automate tracking through laundering and distribution processes, ensuring precise usage monitoring and minimizing losses.',
            metrics: [
              { label: 'Inventory accuracy improvement', value: '95-98%' },
              { label: 'Reduction in manual counting', value: '80-90%' },
              { label: 'Improvement in traceability', value: '98-99%' }
            ]
          }
        ],
        industryUseCases: [
          {
            title: 'Healthcare',
            challenge: 'Hospitals face high linen losses due to theft, misplacement, and frequent laundering cycles, resulting in significant operational costs.',
            solution: 'RFID tags embedded in sheets, gowns, and towels automate tracking through laundering and distribution processes, ensuring precise usage monitoring and minimizing losses.',
            results: [
              'Reduction in linen loss by 25%',
              'Labor cost savings of 30% through automated inventory tracking',
              'Improved availability of critical linens by 20%'
            ]
          },
          {
            title: 'Hospitality',
            challenge: 'Hotels experience frequent linen losses due to high turnover of guests and outsourced laundry services. Manual tracking is labor-intensive and error-prone.',
            solution: 'RFID-enabled linens allow hotels to monitor inventory levels in real-time and ensure timely replenishment from laundry service providers.',
            results: [
              '30% reduction in linen losses',
              '25% improvement in processing efficiency',
              'Better guest satisfaction due to timely availability of clean linens'
            ]
          },
          {
            title: 'Industrial Laundry Services',
            challenge: 'Large-scale laundry operations handling high volumes of linen face challenges in sorting, counting, and tracking inventory across multiple clients.',
            solution: 'RFID systems automate sorting and counting, enabling real-time tracking of client-owned linens and ensuring correct returns.',
            results: [
              '50% reduction in processing time',
              'Up to 98% inventory accuracy',
              'Improved client satisfaction and retention'
            ]
          }
        ]
      }
    },
    {
      id: 11,
      title: 'Tire Tracking',
      subtitle: 'Fleet Management',
      description: 'Comprehensive tire tracking and management system for fleet operations and maintenance.',
      image: '/assets/applications/tire_tracking.png',
      category: 'Fleet Management',
      detailedContent: {
        overview: 'The combined use of RFID, RTLS, GPS, 5G, and IoT sensors, managed on a unified platform, provides a robust framework for real-time tracking, condition monitoring, and operational readiness of armory, weapons, personnel, and kits. With measurable success, including up to 98% inventory accuracy, 30-40% reduction in weapon failure incidents, and 50-70% faster audit processes, these technologies significantly enhance security, accountability, and mission readiness.',
        technologies: [
          {
            title: 'RFID',
            description: 'Automated identification and inventory tracking of weapons, kits, and personnel in controlled environments.'
          },
          {
            title: 'RTLS',
            description: 'Real-time indoor positioning of personnel and assets within armories and operational bases.'
          },
          {
            title: 'GPS',
            description: 'Outdoor tracking of weapons and kits during transport or field operations.'
          },
          {
            title: '5G',
            description: 'High-speed, low-latency connectivity for real-time data transmission across dispersed units.'
          },
          {
            title: 'IoT Sensors',
            description: 'Condition monitoring of weapons and kits (e.g., temperature, humidity, shock) to ensure operational readiness.'
          }
        ],
        capabilities: [
          {
            title: 'Automated Armory and Weapon Inventory Management',
            subtitle: 'RFID, RTLS',
            description: 'RFID tags attached to weapons, ammunition, and kits enable automated check-in/check-out processes. RTLS systems provide real-time tracking of high-value assets within armories, ensuring accountability.',
            metrics: [
              { label: 'Inventory accuracy improvement', value: 'up to 98%' },
              { label: 'Reduction in manual logging errors', value: '70-80%' },
              { label: 'Time savings in inventory audits', value: '50-70%' }
            ]
          },
          {
            title: 'Personnel and Kit Tracking',
            subtitle: 'RTLS, GPS, RFID',
            description: 'RTLS tracks personnel and kits within operational bases, while GPS provides real-time location data in the field. RFID tags on personnel and kits ensure rapid identification and assignment during missions.',
            metrics: [
              { label: 'Reduction in kit misplacement incidents', value: '30-40%' },
              { label: 'Improvement in personnel readiness', value: '20-30%' },
              { label: 'Faster mission deployment time', value: '20-25%' }
            ]
          },
          {
            title: 'Weapon Transport and Field Tracking',
            subtitle: 'GPS, 5G, IoT Sensors',
            description: 'GPS enables real-time tracking of weapons and kits during transport to ensure secure delivery. IoT sensors monitor environmental conditions (e.g., temperature, shock) to ensure weapon integrity during transit. 5G connectivity ensures instant data transmission for situational awareness.',
            metrics: [
              { label: 'Improvement in transport security', value: '25-35%' },
              { label: 'Reduction in transit losses', value: '20-30%' },
              { label: 'Increase in response time to anomalies', value: '20-25%' }
            ]
          },
          {
            title: 'Condition Monitoring and Predictive Maintenance',
            subtitle: 'IoT Sensors, Analytics',
            description: 'IoT sensors attached to weapons and kits monitor critical parameters such as humidity, shock, and usage frequency. Predictive analytics provide insights on maintenance schedules, ensuring operational readiness.',
            metrics: [
              { label: 'Reduction in weapon failure incidents', value: '30-40%' },
              { label: 'Increase in asset lifespan', value: '10-20%' },
              { label: 'Reduction in maintenance costs', value: '15-25%' }
            ]
          },
          {
            title: 'High-Speed Data Transmission and Situational Awareness',
            subtitle: '5G, Unified Platform',
            description: '5G connectivity ensures low-latency communication between field units and command centers. A unified platform aggregates data from RFID, RTLS, GPS, and IoT sensors, providing a centralized view of armory, personnel, and asset status.',
            metrics: [
              { label: 'Reduction in communication delays', value: 'up to 50%' },
              { label: 'Improvement in situational awareness', value: '30-40%' },
              { label: 'Faster decision-making time', value: '20-30%' }
            ]
          }
        ]
      }
    }
  ];

  return (
    <div className="applications-page">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="applications-hero-section">
        <div className="applications-hero-background" style={{ backgroundImage: 'url(/assets/application.png)' }}>
          <div className="applications-hero-overlay"></div>
        </div>
        <div className="applications-hero-content">
          <div className="breadcrumb">
            <span className="breadcrumb-text">Home &gt; Applications</span>
          </div>
          <h1 className="applications-hero-title">
            Applications
          </h1>
        </div>
      </section>



      {/* Applications Grid Section */}
      <section ref={gridRef} className="applications-grid-section">
        <div className="applications-grid-container">
          <ChromaGrid 
            items={applications} 
            onCardClick={(item) => {
              setSelectedApplication(item);
              setIsModalOpen(true);
            }}
          />
        </div>
      </section>

      {/* Application Detail Modal */}
      {isModalOpen && selectedApplication && (
        <div className="application-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="application-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="modal-header">
              <div className="modal-header-content">
                <div className="modal-title-section">
                  <h2 className="modal-title">{selectedApplication.title}</h2>
                  <p className="modal-subtitle">{selectedApplication.subtitle}</p>
                </div>
                <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="modal-content">
              {selectedApplication.detailedContent ? (
                <>
                  {/* Overview */}
                  <div className="content-section">
                    <h3 className="section-title">Overview</h3>
                    <p className="overview-text">{selectedApplication.detailedContent.overview}</p>
                  </div>

                  {/* Technologies */}
                  <div className="content-section">
                    <h3 className="section-title">Key Technologies</h3>
                    <div className="technologies-grid">
                      {selectedApplication.detailedContent.technologies.map((tech: any, index: number) => (
                        <div key={index} className="tech-card">
                          <h4 className="tech-title">{tech.title}</h4>
                          <p className="tech-description">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="content-section">
                    <h3 className="section-title">Key Capabilities</h3>
                    <div className="capabilities-grid">
                      {selectedApplication.detailedContent.capabilities.map((capability: any, index: number) => (
                        <div key={index} className="capability-card">
                          <div className="capability-header">
                            <h4 className="capability-title">{capability.title}</h4>
                            <span className="capability-subtitle">{capability.subtitle}</span>
                          </div>
                          <p className="capability-description">{capability.description}</p>
                          {capability.metrics && (
                            <div className="capability-metrics">
                              {capability.metrics.map((metric: any, mIndex: number) => (
                                <div key={mIndex} className="metric">
                                  <span className="metric-label">{metric.label}:</span>
                                  <span className="metric-value">{metric.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Studies */}
                  {selectedApplication.detailedContent.caseStudies && (
                    <div className="content-section">
                      <h3 className="section-title">Case Studies</h3>
                      <div className="case-studies-grid">
                        {selectedApplication.detailedContent.caseStudies.map((caseStudy: any, index: number) => (
                          <div key={index} className="case-study-card">
                            <h4 className="case-study-title">{caseStudy.title}</h4>
                            <div className="case-study-content">
                              <div className="case-study-section">
                                <h5 className="case-study-subtitle">Challenge</h5>
                                <p className="case-study-text">{caseStudy.challenge}</p>
                              </div>
                              <div className="case-study-section">
                                <h5 className="case-study-subtitle">Solution</h5>
                                <p className="case-study-text">{caseStudy.solution}</p>
                              </div>
                              <div className="case-study-section">
                                <h5 className="case-study-subtitle">Results</h5>
                                <ul className="case-study-results">
                                  {caseStudy.results.map((result: string, rIndex: number) => (
                                    <li key={rIndex} className="case-study-result">{result}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Points */}
                  {selectedApplication.detailedContent.keyPoints && (
                    <div className="content-section">
                      <h3 className="section-title">Key Points</h3>
                      <div className="key-points-grid">
                        {selectedApplication.detailedContent.keyPoints.map((point: any, index: number) => (
                          <div key={index} className="key-point-card">
                            <h4 className="key-point-title">{point.title}</h4>
                            <p className="key-point-description">{point.description}</p>
                            <div className="key-point-metric">{point.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Industry Use Cases */}
                  {selectedApplication.detailedContent.industryUseCases && (
                    <div className="content-section">
                      <h3 className="section-title">Industry Use Cases</h3>
                      <div className="industry-use-cases-grid">
                        {selectedApplication.detailedContent.industryUseCases.map((useCase: any, index: number) => (
                          <div key={index} className="industry-use-case-card">
                            <h4 className="industry-use-case-title">{useCase.title}</h4>
                            <p className="industry-use-case-description">{useCase.description}</p>
                            {useCase.metrics && (
                              <div className="industry-use-case-metrics">
                                {useCase.metrics.map((metric: string, mIndex: number) => (
                                  <div key={mIndex} className="industry-use-case-metric">{metric}</div>
                                ))}
                              </div>
                            )}
                            {useCase.result && (
                              <div className="industry-use-case-result">{useCase.result}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="content-section">
                  <h3 className="section-title">Overview</h3>
                  <p className="overview-text">{selectedApplication.description}</p>
                  <p className="coming-soon">Detailed content coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
