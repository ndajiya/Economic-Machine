import { log } from '../logging/logarea.js'

export default () => {
  let numberOfRounds = 3;
  log(`numberOfRounds = ${numberOfRounds}`);

  let agents = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ];

  for(let i = 1; i <= numberOfRounds; i++) {
    log(`round = ${i}`);
    agents.forEach((agent) => {
      log(`agent.id = ${agent.id}`);
      log('perform production');
      log('generate offers');
    });
    log('resolve offer');
  }

}

