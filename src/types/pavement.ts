export type Acceleration = {
  ts: string;
  ax: number;
  ay: number;
  az: number;
};

export type Pavement = {
  id:                 string;
//   camera_id:          number;
  camera_timestamp:   string;
//   gps_timestamp:      string;
  latitude:           number;
  longitude:          number;
//   speed:              number;
//   accelerations:      Acceleration[];
  image_url:          string;
//   has_tactile_paving: boolean;
};
