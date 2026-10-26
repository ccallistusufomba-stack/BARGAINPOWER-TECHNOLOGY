// KinCony Smart IoT, Relay & MOSFET Controllers Catalog
// Extracted from KinCony Product Selector System (https://mq.kincony.com/qq/product/product-selector)
// Contains complete devices, technical features, and industrial/home applications

import { KinconyItem } from '../types';

export const KINCONY_DATA: KinconyItem[] = [
  {
    "id": "kincony-b16",
    "model": "B16",
    "name": "KinCony B16 - ESP32 Smart Controller",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "16CH DIN RAIL Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (7A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B16.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-b16-16ch-relay.html",
    "price": 112000
  },
  {
    "id": "kincony-kc868-a6v3",
    "model": "KC868-A6v3",
    "name": "KinCony KC868-A6v3 - ESP32 Smart Controller",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "6CH Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 6-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 6-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, RS232, LoRa, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "6 Channels Relay (10A)",
      "digitalInputs": "6 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "RS232",
        "LoRa",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A6v3.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-6-channel-relay-module.html",
    "price": 65000
  },
  {
    "id": "kincony-kc868-a16v3",
    "model": "KC868-A16v3",
    "name": "KinCony KC868-A16v3 - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "16CH MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "16 Channels MOSFET (10A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A16v3.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-16-channel-gpio-module.html",
    "price": 112000
  },
  {
    "id": "kincony-t16m",
    "model": "T16M",
    "name": "KinCony T16M - ESP32 Tiny Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "16CH Tiny MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel MOSFET (4A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "16 Channels MOSFET (4A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/T16M.jpg",
    "productUrl": "https://www.kincony.com/esp32-tiny-smart-controller-t16m-16ch-mosfet.html",
    "price": 112000
  },
  {
    "id": "kincony-f24",
    "model": "F24",
    "name": "KinCony F24 - ESP32-S3 Tuya relay board",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "24CH OMRON Removable Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 24-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 24-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "24 Channels Relay (16A)",
      "digitalInputs": "24 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/F24.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-tuya-relay-board-f24-16a-removable-relay.html",
    "price": 142000
  },
  {
    "id": "kincony-g1",
    "model": "G1",
    "name": "KinCony G1 - ESP32-S3 SIM7600E 4G Module",
    "category": "Gateway & Wireless",
    "cpu": "ESP32-S3",
    "description": "SIM7600 4G Module",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 12-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status"
    ],
    "applications": [
      "Long-Distance Agricultural & Industrial LoRa Wireless Sensor Aggregation",
      "Off-Grid Cellular 4G IoT Telemetry for Remote Solar Sites & Generators",
      "Multi-Split AC & Heat Pump Centralized Infra-Red Automation (Home Assistant)",
      "RS485 Modbus RTU to MQTT/HTTP Bridge with Hardware Galvanic Isolation",
      "Perimeter Security Sensor Mesh & Wireless Gate Interlock"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "12 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/G1.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-sim7600e-4g-module.html",
    "price": 62000
  },
  {
    "id": "kincony-as",
    "model": "AS",
    "name": "KinCony AS - ESP32-S3 voice assistant",
    "category": "Smart Voice & Panel",
    "cpu": "ESP32-S3",
    "description": "Home assistant local voice controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT"
    ],
    "applications": [
      "Offline Privacy-First Local Voice Recognition for Home Assistant Automation",
      "In-Wall Central Touch Screen Console for Room Scene Control",
      "Audible Status Announcement & Lab Emergency Alarm Buzzer Triggering",
      "Hospitality & Conference Room Multi-Device Automation Station"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Bluetooth"
      ],
      "powerSupply": "DC5V",
      "cover": "Plastic shell",
      "dinRail": false,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": true,
      "tuya": false,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/AS.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-voice-assistant.html",
    "price": 54000
  },
  {
    "id": "kincony-f16",
    "model": "F16",
    "name": "KinCony F16 - ESP32-S3 Tuya relay board",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "16CH OMRON Removable Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (16A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/F16.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-tuya-relay-board-16a.html",
    "price": 112000
  },
  {
    "id": "kincony-b16m",
    "model": "B16M",
    "name": "KinCony B16M - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "16CH DIN RAIL MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "16 Channels MOSFET (10A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B16M.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-b16m.html",
    "price": 112000
  },
  {
    "id": "kincony-alr",
    "model": "ALR",
    "name": "KinCony ALR - ESP32 LoRa SX1278 Gateway",
    "category": "Gateway & Wireless",
    "cpu": "ESP32-S3",
    "description": "LoRa gateway",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 1-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 1-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, LoRa, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT"
    ],
    "applications": [
      "Long-Distance Agricultural & Industrial LoRa Wireless Sensor Aggregation",
      "Off-Grid Cellular 4G IoT Telemetry for Remote Solar Sites & Generators",
      "Multi-Split AC & Heat Pump Centralized Infra-Red Automation (Home Assistant)",
      "RS485 Modbus RTU to MQTT/HTTP Bridge with Hardware Galvanic Isolation",
      "Perimeter Security Sensor Mesh & Wireless Gate Interlock"
    ],
    "specs": {
      "digitalOutputs": "1 Channels Relay (10A)",
      "digitalInputs": "1 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "LoRa",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": false,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/ALR.jpg",
    "productUrl": "https://www.kincony.com/esp32-lora-sx1278-gateway.html",
    "price": 62000
  },
  {
    "id": "kincony-ag8",
    "model": "AG8",
    "name": "KinCony AG8 - ESP32-S3 Smart IR Controller",
    "category": "Gateway & Wireless",
    "cpu": "ESP32-S3",
    "description": "8CH wired IR controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, RS232, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)"
    ],
    "applications": [
      "Long-Distance Agricultural & Industrial LoRa Wireless Sensor Aggregation",
      "Off-Grid Cellular 4G IoT Telemetry for Remote Solar Sites & Generators",
      "Multi-Split AC & Heat Pump Centralized Infra-Red Automation (Home Assistant)",
      "RS485 Modbus RTU to MQTT/HTTP Bridge with Hardware Galvanic Isolation",
      "Perimeter Security Sensor Mesh & Wireless Gate Interlock"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "RS232",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/AG8.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-smart-ir-controller.html",
    "price": 78000
  },
  {
    "id": "kincony-s3",
    "model": "S3",
    "name": "KinCony S3 - KinCony ESP32-S3 Core Board",
    "category": "Development Board",
    "cpu": "ESP32-S3",
    "description": "ESP32-S3 development board",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)"
    ],
    "applications": [
      "Custom Embedded Hardware Prototyping & Industrial Automation Design",
      "Raspberry Pi Compute Module Carrier Board for Edge AI & Local Home Assistant",
      "Undergraduate Mechatronics & Electrical Prototype Development",
      "SCADA Industrial Gateway with Dual Ethernet & CAN Bus"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/S3.jpg",
    "productUrl": "https://www.kincony.com/kincony-esp32-s3-core-board.html",
    "price": 54000
  },
  {
    "id": "kincony-a32-pro",
    "model": "A32 Pro",
    "name": "KinCony A32 Pro - 32 channel 4G ESP32 relay board",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "32CH Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 40-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "32 Channels Relay (7A)",
      "digitalInputs": "40 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/A32 Pro.jpg",
    "productUrl": "https://www.kincony.com/4g-esp32-relay-board.html",
    "price": 168000
  },
  {
    "id": "kincony-adr",
    "model": "ADR",
    "name": "KinCony ADR - ESP32 AC dimmer module",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32",
    "description": "AC smart dimmer",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 2-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 1-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "2 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "1 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "AC110-230V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/ADR.jpg",
    "productUrl": "https://www.kincony.com/esp32-ac-dimmer-module.html",
    "price": 89000
  },
  {
    "id": "kincony-m30",
    "model": "M30",
    "name": "KinCony M30 - 30 Channel ESP32 energy monitor board",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32",
    "description": "AC energy meter",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 33-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "33 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": true,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/M30.jpg",
    "productUrl": "https://www.kincony.com/esp32-energy-monitor-board.html",
    "price": 89000
  },
  {
    "id": "kincony-mb",
    "model": "MB",
    "name": "KinCony MB - ESP32 Battery Monitor",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32",
    "description": "DC energy meter",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 16-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "16 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/MB.jpg",
    "productUrl": "https://www.kincony.com/esp32-battery-monitor.html",
    "price": 89000
  },
  {
    "id": "kincony-a24",
    "model": "A24",
    "name": "KinCony A24 - Esp32 K-Type thermocouple 24CH relay module",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "K-Type thermocouple controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 24-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 24-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 7-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "24 Channels Relay (7A)",
      "digitalInputs": "24 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "7 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/A24.jpg",
    "productUrl": "https://www.kincony.com/esp32-k-type-thermocouple-24ch-relay-module.html",
    "price": 142000
  },
  {
    "id": "kincony-m1",
    "model": "M1",
    "name": "KinCony M1 - ESP32 Energy Meter Relay Controller",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32",
    "description": "AC energy meter",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 1-Channel Relay (30A max per channel, COM/NO/NC)",
      "Digital Inputs: 1-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 2-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": "1 Channels Relay (30A)",
      "digitalInputs": "1 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "2 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/M1.jpg",
    "productUrl": "https://www.kincony.com/esp32-energy-meter-relay.html",
    "price": 89000
  },
  {
    "id": "kincony-a8sv2",
    "model": "A8Sv2",
    "name": "KinCony A8Sv2 - 4G ESP32 8CH relay module with manual buttons",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "8CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 2G, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (10A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "2G",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": false,
      "poe": true,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/A8Sv2.jpg",
    "productUrl": "https://www.kincony.com/4g-esp32-8ch-relay-module-with-manual-buttons.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-e16p",
    "model": "KC868-E16P",
    "name": "KinCony KC868-E16P - 16CH ESP32 PoE Ethernet Relay Module",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "16CH POE Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (16A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": false,
      "poe": true,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-E16P.jpg",
    "productUrl": "https://www.kincony.com/16ch-esp32-poe-ethernet-relay-module-kincony-e16p.html",
    "price": 112000
  },
  {
    "id": "kincony-ag-pro",
    "model": "AG Pro",
    "name": "KinCony AG Pro - Wireless ALL IN ONE controller",
    "category": "Gateway & Wireless",
    "cpu": "ESP32",
    "description": "zigbee+IR+RF",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, ZigBee, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Long-Distance Agricultural & Industrial LoRa Wireless Sensor Aggregation",
      "Off-Grid Cellular 4G IoT Telemetry for Remote Solar Sites & Generators",
      "Multi-Split AC & Heat Pump Centralized Infra-Red Automation (Home Assistant)",
      "RS485 Modbus RTU to MQTT/HTTP Bridge with Hardware Galvanic Isolation",
      "Perimeter Security Sensor Mesh & Wireless Gate Interlock"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "ZigBee",
        "Bluetooth"
      ],
      "powerSupply": "DC5V",
      "cover": "Plastic shell",
      "dinRail": false,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/AG Pro.jpg",
    "productUrl": "https://www.kincony.com/tuya-zigbee3-gateway.html",
    "price": 62000
  },
  {
    "id": "kincony-kc868-a32m",
    "model": "KC868-A32M",
    "name": "KinCony KC868-A32M - 32 Channel ESP32 MOSFET Board",
    "category": "MOSFET Controller",
    "cpu": "ESP32",
    "description": "32CH MOSFET Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 32-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 2G, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "32 Channels MOSFET (10A)",
      "digitalInputs": "32 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "2G",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A32M.jpg",
    "productUrl": "https://www.kincony.com/32-channel-esp32-mosfet-board.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-a8m",
    "model": "KC868-A8M",
    "name": "KinCony KC868-A8M - 8 Channel ESP32 CAN Bus Board",
    "category": "MOSFET Controller",
    "cpu": "ESP32",
    "description": "8CH MOSFET Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, CAN, 2G, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "8 Channels MOSFET (10A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "CAN",
        "2G",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": true,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A8M.jpg",
    "productUrl": "https://www.kincony.com/esp32-can-bus-board.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-a16s",
    "model": "KC868-A16S",
    "name": "KinCony KC868-A16S - 16 Channel Relay Board",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "16CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 2G, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Metal shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: DS3231 RTC Timekeeper"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (10A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "2G",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Metal shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": true,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A16S.jpg",
    "productUrl": "https://www.kincony.com/16-channel-esp32-4g-relay-board.html",
    "price": 112000
  },
  {
    "id": "kincony-kc868-aio",
    "model": "KC868-AIO",
    "name": "KinCony KC868-AIO - ESP32 All in One board",
    "category": "MOSFET Controller",
    "cpu": "ESP32",
    "description": "wired ALL IN ONE",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel MOSFET (4A max per channel, COM/NO/NC)",
      "Digital Inputs: 56-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 16-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 16-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Metal shell)",
      "Instrumentation: DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "32 Channels MOSFET (4A)",
      "digitalInputs": "56 Channels Optoisolated",
      "analogOutputs": "16 Channels (0-10V)",
      "analogInputs": "16 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Metal shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": true,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-AIO.jpg",
    "productUrl": "https://www.kincony.com/esp32-all-in-one-board-home-assistant.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-a2",
    "model": "KC868-A2",
    "name": "KinCony KC868-A2 - 2 channel esp32 4G relay board",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "2CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 2-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 2-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, 2G, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "2 Channels Relay (10A)",
      "digitalInputs": "2 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "2G",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A2.jpg",
    "productUrl": "https://www.kincony.com/esp32-4g-relay.html",
    "price": 48000
  },
  {
    "id": "kincony-kc868-a256",
    "model": "KC868-A256",
    "name": "KinCony KC868-A256 - ESP32 Arduino 256 channel IO module",
    "category": "MOSFET Controller",
    "cpu": "ESP32",
    "description": "256CH MOSFET Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 256-Channel MOSFET (4A max per channel, COM/NO/NC)",
      "Digital Inputs: 256-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "256 Channels MOSFET (4A)",
      "digitalInputs": "256 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A256.jpg",
    "productUrl": "https://www.kincony.com/esp32-arduino-256-channel-io-module.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-am",
    "model": "KC868-AM",
    "name": "KinCony KC868-AM - ESP32 IO Expansion Board",
    "category": "MOSFET Controller",
    "cpu": "ESP32",
    "description": "1CH MOSFET Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 1-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 1-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "1 Channels Relay (10A)",
      "digitalInputs": "1 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-AM.jpg",
    "productUrl": "https://www.kincony.com/esp32-io-expansion-board.html",
    "price": 54000
  },
  {
    "id": "kincony-kc868-asr",
    "model": "KC868-ASR",
    "name": "KinCony KC868-ASR - ESP32 SD card sensor RTC record board",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "2CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 2-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 2-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Instrumentation: DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "2 Channels Relay (10A)",
      "digitalInputs": "2 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-ASR.jpg",
    "productUrl": "https://www.kincony.com/esp32-sd-card-sensor-rtc-record-board.html",
    "price": 48000
  },
  {
    "id": "kincony-kc868-a4s",
    "model": "KC868-A4S",
    "name": "KinCony KC868-A4S - 4 channel GSM relay esp32 board",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "4CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 4-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 12-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 16-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, 2G, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Instrumentation: DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "4 Channels Relay (10A)",
      "digitalInputs": "12 Channels Optoisolated",
      "analogOutputs": "16 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "2G",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": true,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A4S.jpg",
    "productUrl": "https://www.kincony.com/4-channel-gsm-relay-esp32-board.html",
    "price": 48000
  },
  {
    "id": "kincony-kc868-ap",
    "model": "KC868-AP",
    "name": "KinCony KC868-AP - ESP32 DC12/24V LED Dimmer",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32",
    "description": "16CH Dimmer Controller with driver",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 2-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 18-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Outputs: 16-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": "2 Channels Relay (10A)",
      "digitalInputs": "18 Channels Optoisolated",
      "analogOutputs": "16 Channels (0-10V)",
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-AP.jpg",
    "productUrl": "https://www.kincony.com/esp32-pwm-dimmer.html",
    "price": 48000
  },
  {
    "id": "kincony-kc868-ak",
    "model": "KC868-AK",
    "name": "KinCony KC868-AK - ESP32 Programmable Keyboard",
    "category": "Development Board",
    "cpu": "ESP32",
    "description": "ESP32 keyboard",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 36-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, RS485, RS232, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Custom Embedded Hardware Prototyping & Industrial Automation Design",
      "Raspberry Pi Compute Module Carrier Board for Edge AI & Local Home Assistant",
      "Undergraduate Mechatronics & Electrical Prototype Development",
      "SCADA Industrial Gateway with Dual Ethernet & CAN Bus"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "36 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "RS485",
        "RS232",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-AK.jpg",
    "productUrl": "https://www.kincony.com/esp32-programmable-keyboard.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-e8t",
    "model": "KC868-E8T",
    "name": "KinCony KC868-E8T - ESP32 Tuya 4G Energy Meter Relay Module",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32",
    "description": "8CH Relay Controller with 4CH energy meter",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 6-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Instrumentation: DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (16A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "6 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": true,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-E8T.jpg",
    "productUrl": "https://www.kincony.com/esp32-tuya-4g-energy-meter-relay-module.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-e16t",
    "model": "KC868-E16T",
    "name": "KinCony KC868-E16T - ESP32 Tuya DIN Rail Relay Module",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "16CH OMRON Removable Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Instrumentation: DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (16A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": true,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-E16T.jpg",
    "productUrl": "https://www.kincony.com/tuya-esp32-din-rail-relay-module.html",
    "price": 112000
  },
  {
    "id": "kincony-kc868-a128",
    "model": "KC868-A128",
    "name": "KinCony KC868-A128 - Arduino ESP32 128 channel GPIO module",
    "category": "MOSFET Controller",
    "cpu": "ESP32",
    "description": "128CH MOSFET Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 128-Channel MOSFET (4A max per channel, COM/NO/NC)",
      "Digital Inputs: 128-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "128 Channels MOSFET (4A)",
      "digitalInputs": "128 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A128.jpg",
    "productUrl": "https://www.kincony.com/arduino-esp32-128-channel-relay-module-kc868-a128.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-ai",
    "model": "KC868-AI",
    "name": "KinCony KC868-AI - ESP32 input module",
    "category": "Smart Controller",
    "cpu": "ESP32",
    "description": "INPUT Module",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 48-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Custom Embedded Hardware Prototyping & Industrial Automation Design",
      "Raspberry Pi Compute Module Carrier Board for Edge AI & Local Home Assistant",
      "Undergraduate Mechatronics & Electrical Prototype Development",
      "SCADA Industrial Gateway with Dual Ethernet & CAN Bus"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "48 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-AI.jpg",
    "productUrl": "https://www.kincony.com/esp32-input-module.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-a8s",
    "model": "KC868-A8S",
    "name": "KinCony KC868-A8S - 8 channel GSM relay esp32 board",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "8CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 2G, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (10A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "2G",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A8S.jpg",
    "productUrl": "https://www.kincony.com/gsm-relay-esp32-board.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-e16s",
    "model": "KC868-E16S",
    "name": "KinCony KC868-E16S - ESP32 DIN Rail Relay Module",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "16CH OMRON Removable Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (16A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-E16S.jpg",
    "productUrl": "https://www.kincony.com/esp32-16-relay-din-rail-relay-module.html",
    "price": 112000
  },
  {
    "id": "kincony-kc868-a64",
    "model": "KC868-A64",
    "name": "KinCony KC868-A64 - Arduino ESP32 64 channel GPIO module",
    "category": "MOSFET Controller",
    "cpu": "ESP32",
    "description": "64CH MOSFET Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 64-Channel MOSFET (4A max per channel, COM/NO/NC)",
      "Digital Inputs: 64-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "64 Channels MOSFET (4A)",
      "digitalInputs": "64 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A64.jpg",
    "productUrl": "https://www.kincony.com/arduino-esp32-64-channel-relay-module-kc868-a64.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-a6",
    "model": "KC868-A6",
    "name": "KinCony KC868-A6 - ESP32 6 channel relay module",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "6CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 6-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 6-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, RS485, LoRa, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "6 Channels Relay (10A)",
      "digitalInputs": "6 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "RS485",
        "LoRa",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A6.jpg",
    "productUrl": "https://www.kincony.com/esp32-6-channel-relay-module-kc868-a6.html",
    "price": 65000
  },
  {
    "id": "kincony-kc868-a32",
    "model": "KC868-A32",
    "name": "KinCony KC868-A32 - Arduino ESP32 32 channel relay module",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "32CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 32-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "32 Channels Relay (10A)",
      "digitalInputs": "32 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A32.jpg",
    "productUrl": "https://www.kincony.com/arduino-esp32-32-channel-relay-module-kc868-a32.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-ag",
    "model": "KC868-AG",
    "name": "KinCony KC868-AG - ESP32 433MHz RF and IR gateway",
    "category": "Gateway & Wireless",
    "cpu": "ESP32",
    "description": "wireless gateway",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT"
    ],
    "applications": [
      "Long-Distance Agricultural & Industrial LoRa Wireless Sensor Aggregation",
      "Off-Grid Cellular 4G IoT Telemetry for Remote Solar Sites & Generators",
      "Multi-Split AC & Heat Pump Centralized Infra-Red Automation (Home Assistant)",
      "RS485 Modbus RTU to MQTT/HTTP Bridge with Hardware Galvanic Isolation",
      "Perimeter Security Sensor Mesh & Wireless Gate Interlock"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Bluetooth"
      ],
      "powerSupply": "DC5V",
      "cover": "Plastic shell",
      "dinRail": false,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-AG.jpg",
    "productUrl": "https://www.kincony.com/esp32-rf-ir-gateway.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-a16",
    "model": "KC868-A16",
    "name": "KinCony KC868-A16 - Arduino ESP32 16 channel GPIO module",
    "category": "MOSFET Controller",
    "cpu": "ESP32",
    "description": "16CH MOSFET Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "16 Channels MOSFET (10A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A16.jpg",
    "productUrl": "https://www.kincony.com/arduino-esp32-16-channel-relay-module-2.html",
    "price": 112000
  },
  {
    "id": "kincony-kc868-a8",
    "model": "KC868-A8",
    "name": "KinCony KC868-A8 - ARDUINO ESP32 8 CHANNEL RELAY MODULE",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "8CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 2-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (10A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "2 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A8.jpg",
    "productUrl": "https://www.kincony.com/arduino-esp32-8-channel-relay-module-kc868-a8.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-a4",
    "model": "KC868-A4",
    "name": "KinCony KC868-A4 - ARDUINO ESP32 4 CHANNEL RELAY MODULE",
    "category": "Relay Controller",
    "cpu": "ESP32",
    "description": "4CH Relay Controller",
    "features": [
      "Processor: ESP32 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 4-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 4-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, RS232, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "4 Channels Relay (10A)",
      "digitalInputs": "4 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "RS232",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A4.jpg",
    "productUrl": "https://www.kincony.com/arduino-esp32-4-channel-relay-module.html",
    "price": 48000
  },
  {
    "id": "kincony-server-mini",
    "model": "Server-mini",
    "name": "KinCony Server-mini - Home automation local server",
    "category": "Relay Controller",
    "cpu": "Raspberry Pi CM4",
    "description": "8CH Relay Server",
    "features": [
      "Processor: Raspberry Pi CM4 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: Ethernet, RS485",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (10A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "Ethernet",
        "RS485"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": true,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/Server-mini.jpg",
    "productUrl": "https://www.kincony.com/raspberry-pi-4-relay-board.html",
    "price": 78000
  },
  {
    "id": "kincony-server-16",
    "model": "Server-16",
    "name": "KinCony Server-16 - Raspberry Pi iot gateway",
    "category": "Relay Controller",
    "cpu": "Raspberry Pi CM4",
    "description": "16CH Relay Server",
    "features": [
      "Processor: Raspberry Pi CM4 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, 4G",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Metal shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (7A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G"
      ],
      "powerSupply": "DC12V",
      "cover": "Metal shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": true,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/Server-16.jpg",
    "productUrl": "https://www.kincony.com/raspberry-pi-iot-gateway.html",
    "price": 112000
  },
  {
    "id": "kincony-kc868-h32b-pro",
    "model": "KC868-H32B Pro",
    "name": "KinCony KC868-H32B Pro - 32 channel relay controller board",
    "category": "Relay Controller",
    "cpu": "ARM",
    "description": "32CH Relay Controller",
    "features": [
      "Processor: ARM Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 6-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Metal shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "32 Channels Relay (7A)",
      "digitalInputs": "6 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "RS232"
      ],
      "powerSupply": "DC12V",
      "cover": "Metal shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-H32B Pro.jpg",
    "productUrl": "https://www.kincony.com/32-channel-relay-controller-board.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-h32bs",
    "model": "KC868-H32BS",
    "name": "KinCony KC868-H32BS - 32 channel mosfet controller board",
    "category": "MOSFET Controller",
    "cpu": "ARM",
    "description": "32CH MOSFET Controller",
    "features": [
      "Processor: ARM Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 38-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Metal shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "32 Channels MOSFET (10A)",
      "digitalInputs": "38 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "RS232"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Metal shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-H32BS.jpg",
    "productUrl": "https://www.kincony.com/32-channel-di-do-ethernet-wifi-mqtt-module-kc868-h32bs.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-d16",
    "model": "KC868-D16",
    "name": "KinCony KC868-D16 - 16 Channel Tuya Dimmer Module",
    "category": "Energy Meter & Dimmer",
    "cpu": "ARM",
    "description": "16CH Dimmer Controller",
    "features": [
      "Processor: ARM Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Outputs: 16-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Metal shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": "16 Channels (0-10V)",
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Metal shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-D16.jpg",
    "productUrl": "https://www.kincony.com/16-channel-tuya-dimmer-module.html",
    "price": 48000
  },
  {
    "id": "kincony-ta",
    "model": "TA",
    "name": "KinCony TA - Tiny Alarm System",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "home security system",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 2-Channel Relay (5A max per channel, COM/NO/NC)",
      "Digital Inputs: 12-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "2 Channels Relay (5A)",
      "digitalInputs": "12 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": true,
      "poe": true,
      "sdCard": false,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/TA.jpeg",
    "productUrl": "https://www.kincony.com/esp32-smart-tiny-alarm-system.html",
    "price": 48000
  },
  {
    "id": "kincony-kc868-a2v3",
    "model": "KC868-A2v3",
    "name": "KinCony KC868-A2v3 - ESP32 Smart Controller",
    "category": "Development Board",
    "cpu": "ESP32-S3",
    "description": "2 Channel relay board",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 2-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 2-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS485, 2G, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Custom Embedded Hardware Prototyping & Industrial Automation Design",
      "Raspberry Pi Compute Module Carrier Board for Edge AI & Local Home Assistant",
      "Undergraduate Mechatronics & Electrical Prototype Development",
      "SCADA Industrial Gateway with Dual Ethernet & CAN Bus"
    ],
    "specs": {
      "digitalOutputs": "2 Channels Relay (10A)",
      "digitalInputs": "2 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "2G",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A2v3.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-2-channel-relay-module.html",
    "price": 48000
  },
  {
    "id": "kincony-f8",
    "model": "F8",
    "name": "KinCony F8 - ESP32-S3 Tuya relay board",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "8CH OMRON Removable Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (16A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/F8.jpg",
    "productUrl": "https://www.kincony.com/esp32s3-tuya-relay-board-8ch-removable-relay.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-a8v3",
    "model": "KC868-A8v3",
    "name": "KinCony KC868-A8v3 - ESP32 Smart Controller",
    "category": "Development Board",
    "cpu": "ESP32-S3",
    "description": "8 Channel relay board",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 2-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Custom Embedded Hardware Prototyping & Industrial Automation Design",
      "Raspberry Pi Compute Module Carrier Board for Edge AI & Local Home Assistant",
      "Undergraduate Mechatronics & Electrical Prototype Development",
      "SCADA Industrial Gateway with Dual Ethernet & CAN Bus"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (10A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "2 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-A8v3.jpeg",
    "productUrl": "https://www.kincony.com/esp32-s3-8-channel-relay-module.html",
    "price": 78000
  },
  {
    "id": "kincony-b8m",
    "model": "B8M",
    "name": "KinCony B8M - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "8CH DIN RAIL MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "8 Channels MOSFET (10A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B8M.jpeg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-b8m-8ch-mosfet.html",
    "price": 78000
  },
  {
    "id": "kincony-t32m",
    "model": "T32M",
    "name": "KinCony T32M - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "32CH Tiny MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel MOSFET (4A max per channel, COM/NO/NC)",
      "Digital Inputs: 32-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "32 Channels MOSFET (4A)",
      "digitalInputs": "32 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/T32M.jpeg",
    "productUrl": "https://www.kincony.com",
    "price": 168000
  },
  {
    "id": "kincony-t64m",
    "model": "T64M",
    "name": "KinCony T64M - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "64CH Tiny MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 64-Channel MOSFET (4A max per channel, COM/NO/NC)",
      "Digital Inputs: 64-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "64 Channels MOSFET (4A)",
      "digitalInputs": "64 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/T64M.jpeg",
    "productUrl": "https://www.kincony.com",
    "price": 168000
  },
  {
    "id": "kincony-t128m",
    "model": "T128M",
    "name": "KinCony T128M - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "128CH Tiny MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 128-Channel MOSFET (4A max per channel, COM/NO/NC)",
      "Digital Inputs: 128-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "128 Channels MOSFET (4A)",
      "digitalInputs": "128 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/T128M.jpeg",
    "productUrl": "https://www.kincony.com",
    "price": 168000
  },
  {
    "id": "kincony-n60",
    "model": "N60",
    "name": "KinCony N60 - AC energy meter",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32-S3",
    "description": "60 Channel ESP32 energy monitor board",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 66-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, LoRa, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "66 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "LoRa",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": false,
      "poe": false,
      "sdCard": true,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/N60.jpeg",
    "productUrl": "https://www.kincony.com",
    "price": 89000
  },
  {
    "id": "kincony-b24m",
    "model": "B24M",
    "name": "KinCony B24M - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "24CH DIN RAIL MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 24-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 24-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "24 Channels MOSFET (10A)",
      "digitalInputs": "24 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B24M.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-24ch-mosfet.html",
    "price": 142000
  },
  {
    "id": "kincony-b24",
    "model": "B24",
    "name": "KinCony B24 - ESP32 Smart Controller",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "24CH DIN RAIL Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 24-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 24-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "24 Channels Relay (7A)",
      "digitalInputs": "24 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B24.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-b24-24ch-relay.html",
    "price": 142000
  },
  {
    "id": "kincony-b8",
    "model": "B8",
    "name": "KinCony B8 - ESP32 Smart Controller",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "8CH DIN RAIL Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (7A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B8.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-8ch-relay.html",
    "price": 78000
  },
  {
    "id": "kincony-dm16",
    "model": "DM16",
    "name": "KinCony DM16 - ESP32 Dimmer Controller",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32-S3",
    "description": "16CH Smart Dimmer Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 16-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": "16 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/DM16.jpg",
    "productUrl": "https://www.kincony.com/esp32s3-dimmer-module-dm16-16ch-dimmer.html",
    "price": 112000
  },
  {
    "id": "kincony-aio-hybrid",
    "model": "AIO-Hybrid",
    "name": "KinCony AIO-Hybrid - ESP32 Smart Controller",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "ESP32S3 All In One Smart Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 5-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 12-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 4-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, ZigBee, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "5 Channels Relay (16A)",
      "digitalInputs": "12 Channels Optoisolated",
      "analogOutputs": "4 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "ZigBee",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/AIO-Hybrid.jpg",
    "productUrl": "https://www.kincony.com/esp32s3-all-in-one-smart-controller-aio-hybrid.html",
    "price": 48000
  },
  {
    "id": "kincony-f32",
    "model": "F32",
    "name": "KinCony F32 - ESP32-S3 Tuya relay board",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "32CH OMRON Removable Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 32-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "32 Channels Relay (16A)",
      "digitalInputs": "32 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/F32.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-tuya-relay-board-f32-16a-removable-relay.html",
    "price": 168000
  },
  {
    "id": "kincony-f4",
    "model": "F4",
    "name": "KinCony F4 - ESP32-S3 Tuya relay board",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "4CH OMRON Removable Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 4-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 4-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "4 Channels Relay (16A)",
      "digitalInputs": "4 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/F4.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-tuya-relay-board-4ch-16a-removable-relay.html",
    "price": 48000
  },
  {
    "id": "kincony-b4m",
    "model": "B4M",
    "name": "KinCony B4M - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "4CH DIN RAIL MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 4-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 4-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "4 Channels MOSFET (10A)",
      "digitalInputs": "4 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B4M.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-b4m-4ch-mosfet.html",
    "price": 48000
  },
  {
    "id": "kincony-b4",
    "model": "B4",
    "name": "KinCony B4 - ESP32 Smart Controller",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "4CH DIN RAIL Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 4-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 4-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "4 Channels Relay (7A)",
      "digitalInputs": "4 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B4.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-b4-4ch-relay.html",
    "price": 48000
  },
  {
    "id": "kincony-b32m",
    "model": "B32M",
    "name": "KinCony B32M - ESP32 Smart Controller",
    "category": "MOSFET Controller",
    "cpu": "ESP32-S3",
    "description": "32CH DIN RAIL MOSFET Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel MOSFET (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 32-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "32 Channels MOSFET (10A)",
      "digitalInputs": "32 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B32M.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-b32m-32ch-mosfet.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-e8v3",
    "model": "KC868-E8v3",
    "name": "KinCony KC868-E8v3 - Extend Relay Module",
    "category": "Relay Controller",
    "cpu": "ARM",
    "description": "RS485 8CH OMRON Modbus Relay Controller",
    "features": [
      "Processor: ARM Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: RS485",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (16A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "RS485"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/E8v3.jpg",
    "productUrl": "https://www.kincony.com/rs485-modbus-din-rail-relay-module-e8v3-16a-removable-relay.html",
    "price": 78000
  },
  {
    "id": "kincony-kc868-e16v3",
    "model": "KC868-E16v3",
    "name": "KinCony KC868-E16v3 - Extend Relay Module",
    "category": "Relay Controller",
    "cpu": "ARM",
    "description": "RS485 16CH OMRON Modbus Relay Controller",
    "features": [
      "Processor: ARM Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: RS485",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (16A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "RS485"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/E16v3.jpg",
    "productUrl": "https://www.kincony.com/rs485-modbus-din-rail-relay-module-e16v3-16a-removable-relay.html",
    "price": 112000
  },
  {
    "id": "kincony-kc868-e24v3",
    "model": "KC868-E24v3",
    "name": "KinCony KC868-E24v3 - Extend Relay Module",
    "category": "Relay Controller",
    "cpu": "ARM",
    "description": "RS485 24CH OMRON Modbus Relay Controller",
    "features": [
      "Processor: ARM Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 24-Channel Relay (16A max per channel, COM/NO/NC)",
      "Digital Inputs: 24-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: RS485",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "24 Channels Relay (16A)",
      "digitalInputs": "24 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "RS485"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/E24v3.jpg",
    "productUrl": "https://www.kincony.com/rs485-modbus-din-rail-relay-module-e24v3-16a-removable-relay.html",
    "price": 142000
  },
  {
    "id": "kincony-dm4",
    "model": "DM4",
    "name": "KinCony DM4 - ESP32 Dimmer Controller",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32-S3",
    "description": "4CH Smart Dimmer Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 4-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 4-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "4 Channels Optoisolated",
      "analogOutputs": "4 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/DM4.jpg",
    "productUrl": "https://www.kincony.com/esp32s3-dimmer-module-dm4-4ch-dimmer.html",
    "price": 48000
  },
  {
    "id": "kincony-dm32",
    "model": "DM32",
    "name": "KinCony DM32 - ESP32 Dimmer Controller",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32-S3",
    "description": "32CH Smart Dimmer Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 32-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 32-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "32 Channels Optoisolated",
      "analogOutputs": "32 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/DM32.jpg",
    "productUrl": "https://www.kincony.com/esp32s3-dimmer-module-dm32-32ch-dimmer.html",
    "price": 168000
  },
  {
    "id": "kincony-dm8",
    "model": "DM8",
    "name": "KinCony DM8 - ESP32 Dimmer Controller",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32-S3",
    "description": "8CH Smart Dimmer Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 8-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, Ethernet, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": "8 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/DM8.jpg",
    "productUrl": "https://www.kincony.com/esp32s3-dimmer-module-dm8-8ch-dimmer.html",
    "price": 78000
  },
  {
    "id": "kincony-pi5r16",
    "model": "Pi5R16",
    "name": "KinCony Pi5R16 - Raspberry Pi5 iot gateway",
    "category": "Relay Controller",
    "cpu": "Raspberry Pi CM5",
    "description": "16CH Relay Server",
    "features": [
      "Processor: Raspberry Pi CM5 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: Ethernet, RS485, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (7A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "Ethernet",
        "RS485",
        "RS232"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/Pi5R16.jpg",
    "productUrl": "https://www.kincony.com/raspberry-pi-cm5-iot-gateway-for-smart-home-industrial-automation-kincony-pi5r16.html",
    "price": 112000
  },
  {
    "id": "kincony-pi5m16",
    "model": "Pi5M16",
    "name": "KinCony Pi5M16 - Raspberry Pi5 iot gateway",
    "category": "MOSFET Controller",
    "cpu": "Raspberry Pi CM5",
    "description": "16CH Mosfet Server",
    "features": [
      "Processor: Raspberry Pi CM5 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel MOSFET (2A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: Ethernet, RS485, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "16 Channels MOSFET (2A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "Ethernet",
        "RS485",
        "RS232"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/Pi5M16.jpg",
    "productUrl": "https://www.kincony.com/raspberry-pi-cm5-iot-gateway-for-smart-home-industrial-automation-kincony-pi5m16.html",
    "price": 112000
  },
  {
    "id": "kincony-pi5r8",
    "model": "Pi5R8",
    "name": "KinCony Pi5R8 - Raspberry Pi5 iot gateway",
    "category": "Relay Controller",
    "cpu": "Raspberry Pi CM5",
    "description": "8CH Relay Server",
    "features": [
      "Processor: Raspberry Pi CM5 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: Ethernet, RS485, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "8 Channels Relay (10A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "Ethernet",
        "RS485",
        "RS232"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/Pi5R8.jpg",
    "productUrl": "https://www.kincony.com/raspberry-pi-cm5-iot-gateway-for-smart-home-industrial-automation-pi5r8.html",
    "price": 78000
  },
  {
    "id": "kincony-pi5m8",
    "model": "Pi5M8",
    "name": "KinCony Pi5M8 - Raspberry Pi5 iot gateway",
    "category": "MOSFET Controller",
    "cpu": "Raspberry Pi CM5",
    "description": "8CH Mosfet Server",
    "features": [
      "Processor: Raspberry Pi CM5 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 8-Channel MOSFET (2A max per channel, COM/NO/NC)",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: Ethernet, RS485, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "8 Channels MOSFET (2A)",
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "Ethernet",
        "RS485",
        "RS232"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/Pi5M8.jpg",
    "productUrl": "https://www.kincony.com/raspberry-pi-cm5-mosfet-controller-for-smart-home-industrial-automation-kincony-pi5m8.html",
    "price": 78000
  },
  {
    "id": "kincony-pi5r32",
    "model": "Pi5R32",
    "name": "KinCony Pi5R32 - Raspberry Pi5 iot gateway",
    "category": "Relay Controller",
    "cpu": "Raspberry Pi CM5",
    "description": "32CH Relay Server",
    "features": [
      "Processor: Raspberry Pi CM5 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 32-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: Ethernet, RS485, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "32 Channels Relay (7A)",
      "digitalInputs": "32 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "Ethernet",
        "RS485",
        "RS232"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/Pi5R32.jpg",
    "productUrl": "https://www.kincony.com/raspberry-pi-cm5-mosfet-controller-for-smart-home-industrial-automation-kincony-pi5r32.html",
    "price": 168000
  },
  {
    "id": "kincony-pi5m32",
    "model": "Pi5M32",
    "name": "KinCony Pi5M32 - Raspberry Pi5 iot gateway",
    "category": "MOSFET Controller",
    "cpu": "Raspberry Pi CM5",
    "description": "32CH Mosfet Server",
    "features": [
      "Processor: Raspberry Pi CM5 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel MOSFET (2A max per channel, COM/NO/NC)",
      "Digital Inputs: 32-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Analog Outputs: 2-Channel 0-10V / PWM DAC control",
      "Connectivity: Ethernet, RS485, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "High-Frequency DC Motor Speed Control & Brushless Actuator Driving",
      "12V/24V Multi-Zone Architectural LED Strip PWM Dimming with Zero Flicker",
      "Solenoid Valve High-Speed Repetitive Pulsing & Hydroponic Dosing",
      "Robotic Kinetic Arms & High-Current DC Solenoid Latching",
      "Vehicle DC Power Auxiliary Distribution & Marine Lighting"
    ],
    "specs": {
      "digitalOutputs": "32 Channels MOSFET (2A)",
      "digitalInputs": "32 Channels Optoisolated",
      "analogOutputs": "2 Channels (0-10V)",
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "Ethernet",
        "RS485",
        "RS232"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/Pi5M32.jpg",
    "productUrl": "https://www.kincony.com/raspberry-pi-cm5-mosfet-controller-for-smart-home-industrial-automation-kincony-pi5m32.html",
    "price": 168000
  },
  {
    "id": "kincony-kc868-agv3",
    "model": "KC868-AGv3",
    "name": "KinCony KC868-AGv3 - ESP32 433MHz RF and IR gateway",
    "category": "Gateway & Wireless",
    "cpu": "ESP32-S3",
    "description": "wireless gateway",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT"
    ],
    "applications": [
      "Long-Distance Agricultural & Industrial LoRa Wireless Sensor Aggregation",
      "Off-Grid Cellular 4G IoT Telemetry for Remote Solar Sites & Generators",
      "Multi-Split AC & Heat Pump Centralized Infra-Red Automation (Home Assistant)",
      "RS485 Modbus RTU to MQTT/HTTP Bridge with Hardware Galvanic Isolation",
      "Perimeter Security Sensor Mesh & Wireless Gate Interlock"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Bluetooth"
      ],
      "powerSupply": "DC5V",
      "cover": "Plastic shell",
      "dinRail": false,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-AG.jpg",
    "productUrl": "https://www.kincony.com/esp32s3-smart-ir-rf-controller.html",
    "price": 78000
  },
  {
    "id": "kincony-n10",
    "model": "N10",
    "name": "KinCony N10 - AC energy meter",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32-S3",
    "description": "10 Channel ESP32 energy monitor board",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 11-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, LoRa, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "11 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "LoRa",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": false,
      "poe": false,
      "sdCard": true,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/N10.jpg",
    "productUrl": "https://www.kincony.com/10-channel-esp32-ac-lora-energy-meter-n10.html",
    "price": 89000
  },
  {
    "id": "kincony-n20",
    "model": "N20",
    "name": "KinCony N20 - AC energy meter",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32-S3",
    "description": "20 Channel ESP32 energy monitor board",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 2-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 22-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, LoRa, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "2 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "22 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "LoRa",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": false,
      "poe": false,
      "sdCard": true,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/N20.jpg",
    "productUrl": "https://www.kincony.com/20-channel-esp32-ac-lora-energy-meter-n20.html",
    "price": 48000
  },
  {
    "id": "kincony-n30",
    "model": "N30",
    "name": "KinCony N30 - AC energy meter",
    "category": "Energy Meter & Dimmer",
    "cpu": "ESP32-S3",
    "description": "30 Channel ESP32 energy monitor board",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 33-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, LoRa, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Instrumentation: OLED/LCD Display Status"
    ],
    "applications": [
      "Sub-Panel Multi-Branch Circuit Current (CT) & kWh Electricity Monitoring",
      "Industrial Factory Three-Phase Phase Load Imbalance Detection",
      "High-Power AC Phase-Cut Dimming for Incandescent, Halogen & Dimmable LED",
      "Solar PV Array Real-Time Power Generation vs Grid Consumption Telemetry",
      "HVAC Heavy Compressor & Borehole Pump Predictive Maintenance"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "33 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "LoRa",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": true,
      "rtc": false,
      "poe": false,
      "sdCard": true,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/N30.jpg",
    "productUrl": "https://www.kincony.com/30-channel-esp32-ac-lora-energy-meter-n30.html",
    "price": 89000
  },
  {
    "id": "kincony-z1",
    "model": "Z1",
    "name": "KinCony Z1 - ESP32 433MHz RF and IR Zigbee gateway",
    "category": "Gateway & Wireless",
    "cpu": "ESP32-S3",
    "description": "wireless zigbee gateway",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 8-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, ZigBee, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT"
    ],
    "applications": [
      "Long-Distance Agricultural & Industrial LoRa Wireless Sensor Aggregation",
      "Off-Grid Cellular 4G IoT Telemetry for Remote Solar Sites & Generators",
      "Multi-Split AC & Heat Pump Centralized Infra-Red Automation (Home Assistant)",
      "RS485 Modbus RTU to MQTT/HTTP Bridge with Hardware Galvanic Isolation",
      "Perimeter Security Sensor Mesh & Wireless Gate Interlock"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "8 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "ZigBee",
        "Bluetooth"
      ],
      "powerSupply": "DC5V",
      "cover": "Plastic shell",
      "dinRail": false,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": false,
      "voiceControl": false
    },
    "image": "https://mq.kincony.com/hifi/simg/KC868-AG.jpg",
    "productUrl": "https://www.kincony.com/smart-ir-rf-zigbee-gateway-kincony-z1.html",
    "price": 62000
  },
  {
    "id": "kincony-mt4",
    "model": "MT4",
    "name": "KinCony MT4 - DC motor driver",
    "category": "Smart Controller",
    "cpu": "ESP32-S3",
    "description": "4 channel DC motor driver",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Inputs: 4-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Outputs: 4-Channel 0-10V / PWM DAC control",
      "Connectivity: WiFi, RS485, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Plastic shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Custom Embedded Hardware Prototyping & Industrial Automation Design",
      "Raspberry Pi Compute Module Carrier Board for Edge AI & Local Home Assistant",
      "Undergraduate Mechatronics & Electrical Prototype Development",
      "SCADA Industrial Gateway with Dual Ethernet & CAN Bus"
    ],
    "specs": {
      "digitalOutputs": null,
      "digitalInputs": "4 Channels Optoisolated",
      "analogOutputs": "4 Channels (0-10V)",
      "analogInputs": null,
      "communication": [
        "WiFi",
        "RS485",
        "Bluetooth"
      ],
      "powerSupply": "DC12V",
      "cover": "Plastic shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/MT4.jpg",
    "productUrl": "https://www.kincony.com/mt4-esp32-s3-4-channel-dc-motor-controller.html",
    "price": 48000
  },
  {
    "id": "kincony-b2",
    "model": "B2",
    "name": "KinCony B2 - ESP32 Smart Controller",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "2CH DIN RAIL Relay Controller",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 2-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 2-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 4-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 4G, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "2 Channels Relay (10A)",
      "digitalInputs": "2 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "4 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/B2.jpg",
    "productUrl": "https://www.kincony.com/esp32-smart-controller-b2-2ch-relay.html",
    "price": 48000
  },
  {
    "id": "kincony-co16",
    "model": "CO16",
    "name": "KinCony CO16 - ESP32 Smart Controller",
    "category": "Relay Controller",
    "cpu": "ESP32-S3",
    "description": "16CH Analog Input Module",
    "features": [
      "Processor: ESP32-S3 Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 16-Channel Relay (7A max per channel, COM/NO/NC)",
      "Digital Inputs: 16-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Analog Inputs: 20-Channel (0-5V / 4-20mA sensor interfaces, CT probes)",
      "Connectivity: WiFi, Ethernet, RS485, 4G, LoRa, Bluetooth",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Aluminium shell)",
      "Manual Override: Physical on-board manual switches for emergency bypass",
      "Instrumentation: OLED/LCD Display Status, DS3231 RTC Timekeeper",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "16 Channels Relay (7A)",
      "digitalInputs": "16 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": "20 Channels (0-5V/4-20mA)",
      "communication": [
        "WiFi",
        "Ethernet",
        "RS485",
        "4G",
        "LoRa",
        "Bluetooth"
      ],
      "powerSupply": "DC12-24V",
      "cover": "Aluminium shell",
      "dinRail": true,
      "manualSwitch": true,
      "lcd": true,
      "rtc": true,
      "poe": false,
      "sdCard": true,
      "tuya": true,
      "voiceControl": true
    },
    "image": "https://mq.kincony.com/hifi/simg/CO16.jpg",
    "productUrl": "https://www.kincony.com/esp32-s3-16-channel-analog-input-smart-controller.html",
    "price": 112000
  },
  {
    "id": "kincony-kc868-h32b",
    "model": "KC868-H32B",
    "name": "KinCony KC868-H32B - 32 channel relay controller board",
    "category": "Relay Controller",
    "cpu": "ARM",
    "description": "32CH Relay Controller",
    "features": [
      "Processor: ARM Dual-Core High-Performance Microcontroller",
      "Digital Outputs: 32-Channel Relay (10A max per channel, COM/NO/NC)",
      "Digital Inputs: 6-Channel Optoisolated Inputs (Dry/Wet Contact Sensing)",
      "Connectivity: WiFi, Ethernet, RS232",
      "Firmware Support: Native Home Assistant, ESPHome, Tasmota, Arduino IDE, MQTT",
      "Form Factor: Standard 35mm DIN Rail Mountable Enclosure (Metal shell)",
      "Cloud Platform: Tuya Smart & KinCony Cloud Multi-App Support"
    ],
    "applications": [
      "Smart Home Central Distribution Board (DB) Automation & Lighting Switching",
      "Industrial Machine Relay Sequencer & Heavy 3-Phase Contactor Coil Triggering",
      "Agricultural Irrigation Solenoids, Snail Farm Mist Cooling & Pump Priming",
      "Commercial Building Facilities Multi-Circuit Power Scheduling",
      "Emergency Remote Disconnect for Lithium Battery Inverters & Solar Combiners"
    ],
    "specs": {
      "digitalOutputs": "32 Channels Relay (10A)",
      "digitalInputs": "6 Channels Optoisolated",
      "analogOutputs": null,
      "analogInputs": null,
      "communication": [
        "WiFi",
        "Ethernet",
        "RS232"
      ],
      "powerSupply": "DC12V",
      "cover": "Metal shell",
      "dinRail": true,
      "manualSwitch": false,
      "lcd": false,
      "rtc": false,
      "poe": false,
      "sdCard": false,
      "tuya": true,
      "voiceControl": false
    },
    "image": "/src/assets/images/relay_16ch_wifi_1790998673524.webp",
    "productUrl": "https://www.kincony.com/32-channel-ethernet-wifi-relay-module-kc868-h32b.html",
    "price": 168000
  }
];
