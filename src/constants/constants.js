export const Status = Object.freeze({
  RUNNING: 'RUNNING',
  STOPPED: 'STOPPED',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED'
});

export const ActionConstants = Object.freeze({
  START_UPLOAD: 'START_UPLOAD',
  PAUSE_UPLOAD: 'PAUSE_UPLOAD',
  STOP_UPLOAD: 'STOP_UPLOAD',
  RESET_UPLOAD: 'RESET_UPLOAD',
  UPDATE_PERCENTAGE: 'UPDATE_PERCENTAGE',
  COMPLETE_UPLOAD: 'COMPLETE_UPLOAD'
});