// Pricing catalog & utilities for components and systems in Nigerian Naira (NGN)

const DEFAULT_PRICES: Record<string, number> = {
  // Sensors
  'sensor-mq2': 8500,
  'sensor-dht22': 9500,
  'sensor-pir-hc-sr501': 7500,
  'sensor-rcwl-0516': 12000,
  'sensor-soil-capacitive': 11500,
  'sensor-ds18b20': 14000,
  'sensor-acs712': 16500,
  'sensor-ultrasonic-sr04': 7800,
  'sensor-flame-ir': 9200,

  // Microcontrollers & Control Boards
  'mcu-esp32': 85000,
  'mcu-power-supply-din': 42000,
  'mcu-arduino-uno': 22500,
  'mcu-arduino-nano': 18000,
  'mcu-stm32-bluepill': 26000,
  'mcu-raspberry-pi-pico': 24000,

  // Contactors
  'contactor-3p-40a': 48000,
  'contactor-3p-63a': 72000,
  'contactor-dc-100a': 85000,
  'contactor-2p-25a': 35000,
  'contactor-1p-20a': 28000,

  // Circuit Breakers
  'breaker-smart-wifi-63a': 65000,
  'breaker-3p-mcb-63a': 42000,
  'breaker-4p-mccb-100a': 78000,
  'breaker-2p-rcbo-40a': 38000,
  'breaker-1p-mcb-32a': 14500,

  // Motors & Actuators
  'motor-servo-mg996r': 18500,
  'motor-stepper-nema23': 45000,
  'motor-bldc-outrunner': 68000,
  'motor-esc-120a': 54000,
  'motor-ev-3kw': 185000,

  // Security & Safety
  'sec-fire-ext-ball': 38000,
  'sec-fire-ext-canister': 64000,
  'sec-gas-shutoff-valve': 48000,
  'sec-shunt-trip': 52000,
  'sec-panel-enclosure-ip65': 46000
};

export function getItemPrice(item: { id?: string | number; price?: number; startingPrice?: string; title?: string; name?: string }): number {
  if (typeof item.price === 'number' && item.price > 0) {
    return item.price;
  }
  
  if (item.id && DEFAULT_PRICES[String(item.id)]) {
    return DEFAULT_PRICES[String(item.id)];
  }

  // Parse startingPrice if available (e.g. "From ₦45,000")
  if (item.startingPrice) {
    const digits = item.startingPrice.replace(/[^0-9]/g, '');
    if (digits) {
      const parsed = parseInt(digits, 10);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
  }

  // Fallback estimation based on item name keywords
  const title = (item.title || item.name || '').toLowerCase();
  if (title.includes('esp32') || title.includes('24-channel') || title.includes('16-channel')) return 85000;
  if (title.includes('contactor')) return 48000;
  if (title.includes('breaker')) return 42000;
  if (title.includes('motor') || title.includes('bldc') || title.includes('stepper')) return 45000;
  if (title.includes('extinguisher') || title.includes('fire')) return 64000;
  if (title.includes('arduino')) return 22000;
  if (title.includes('sensor')) return 12500;
  
  return 25000; // General standard component price
}

export function formatNaira(amount: number): string {
  return '₦' + Math.round(amount).toLocaleString('en-NG');
}
