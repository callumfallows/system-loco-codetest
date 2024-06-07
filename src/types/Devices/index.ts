export type Model = {
  name: string;
  family: string;
  product: string;
};

export type Devices = {
  id: string;
  name: string | null;
  model: Model;
  lastReportTime: string;
  nextReportTime: string;
};

export type DeviceListResponse = {
  results: Devices[];
};

export type Owner = {
  id: string;
  name: string;
};

export type GlobalLocation = {
  lat: number;
  lon: number;
  cep: number;
};

export type LastKnownLocation = {
  summary: string;
  global: GlobalLocation;
  zones: string[];
};

export type Firmware = {
  current: string;
  pending: string | null;
};

export type StatusIndicators = {
  battery: string;
  moving: boolean;
  gpsFailure: boolean;
  lowSignal: boolean;
  charging: boolean;
  externalPower: boolean;
  flightMode: boolean;
  pendingSettings: boolean;
};

export type Device = {
  id: string;
  name: string;
  labels: string[];
  owner: Owner;
  model: Model;
  lastKnownLocation: LastKnownLocation;
  firmware: Firmware;
  statusIndicators: StatusIndicators;
  lastReportTime: string;
  nextReportTime: string;
};
