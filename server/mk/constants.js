module.exports = {
  WIDTH: 70,
  HEIGHT: 70,
  STATE_SIZE: 4900,// 70*70,
  ACTION_SIZE: 9,
  
  DDPG_HP: {
    minBufferSize: 500,
    updateEvery: 100, 
    batchSize: 32,
    EPSILON: 0.2,
    EPSILON_DECAY: 1e-4,
    MIN_EPSILON: 0.05,
  },
};