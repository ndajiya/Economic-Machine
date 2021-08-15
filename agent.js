//Purchase
//Create Bid(agent.id, Commodity, limit)
function createBid(commodity, limit) {
  let buy = trades(commodity, limit);
  return buy
}

let buy = createBid(commodity, limit);
if (buy == success) {offers.pop(commodity); agent.inventory.push(commodity);}

//1 bid-price ← PriceOf (Commodity)
function buyPrice(commodity) {
  let price = agent.cash * agent.goal.need[1];
}

//2 ideal ← Determine-Purchase-Quantity(Commodity)
function idealPurchaseQuantity(commodity) {
 let bestBuy = favorability * cash;
}
 //Weighted Mean
function weightedMean(arrValues, arrWeights) {

  var result = arrValues.map(function (value, i) {

    var weight = arrWeights[i];
    var sum = value * weight;

    return [sum, weight];
  }).reduce(function (p, c) {

    return [p[0] + c[0], p[1] + c[1]];
  }, [0, 0]);

  return result[0] / result[1];
}

weightedMean([251, 360, 210], [0.1, 0.5, 0.7]);
// => 270.8461538461539


/* 
1 mean ← historical mean price of Commodity
2 favorability ← max price - position of mean within observed trading range
3 amount to buy ← favorability * available inventory space
4 return amount to buy
*/

//3 quantity-to-buy ← Min(desired, limit)
function purchaseQuantity(commodity) {
  let purchase = min(ideal, limit);
}

//Sell
//Create Ask(Commodity, limit)
createAsk(agent, commodity, limit);

function createAsk(commodity, limit) {
  let sell = trades(commodity, limit);
  return sell
}

let sell = createAsk(commodity, limit)
if (sell == success) {orders.push(commodity); agent.inventory.pop(commodity);}

//1 bid-price"sellPrice" ← PriceOf (Commodity)
function sellPrice(commodity) {
  let price = agent.cash * agent.goal.need[1];
}

//2 ideal ← Determine-Sale-Quantity(Commodity)
function idealSaleQuantity(commodity) {
 let bestSale = commodity * consumption; //add units in inventory array
}

function mean(offers) {
    let total = 0, i;
    for (i = 0; i < offers.length; i += 1) {
        total += offers[i];
    }
    let mean = total / offers.length;
}

maxPrice - mean = favorability;

/* IMO for favorability */
/* finding minPrice and maxPrice from observed period */
let minPrice = getMinPrice(period1);
let maxPrice = getMaxPrice(period1);
/* NOTE: need to define the period/range and recording the price */

let favorability = 1; /* = 100% */

/* i think we may ignore the if-condition below for 
  (mean > maxPrice) and (mean < minPrice), 
  depending with how to use the favorability.
  just calc it all the same without condition.
*/
if (mean > maxPrice) {
  /* have no idea with this condition yet */
} else if (mean < minPrice) {
  /* have no idea with this condition yet */
} else {
  /*The mean sits between observed trading range %/
  /* find position of mean as percentage of mean in the range */
  let favorability_in_percentage = (mean - minPrice) * 100 / (maxPrice - minPrice);

  /* convert percentage into fraction number for multiplying with number of commodity inventory */
  favorability = favorability_in_percentage/100;
}

/*
1 mean ← historical mean price of Commodity
2 favorability ← position of mean within observed trading range
3 amount to sell ← favorability * excess inventory of Commodity
4 return amount to sell
*/

//3 quantity-to-sell ← Max(ideal, limit)
function saleQuantity(commodity) {
  commodity = max(ideal, limit)
}

//TODO Perform-production for consumption and production
let agent = {
  id: 0,
  role: "Buyer",
  economy: "America",
  marketOpen: false,
  cash: 100,
  currency: "dollar",
  inventory: ['item1','item2','item3'],
  day: 0,
goal: {
  focus: ['deficiency', 'growth'],
  growth: 0,
  transcendance: 0,
  actualization: 0,
  deficiency: 0,
  esteem: 0,
  belonging: 0,
  safety: 0,
  physiology: 0,
  need:     ['physiology', 0.4],
            ['safety', 0.22],
            ['belonging', 0.16],
            ['esteem', 0.12],
            ['actualization', 0.07],
            ['transcendance', 0.03],
},

};

if (agent.goal.transcendance > 100) transcendance = 100; //0.03
if (agent.goal.actualization > 100) actualization = 100; //0.07
if (agent.goal.esteem > 100) esteem = 100; //0.12
if (agent.goal.belonging > 100) belonging = 100; //0.16
if (agent.goal.safety > 100) safety = 100; //0.22
if (agent.goal.physiology > 100) physiology = 100; //0.40

if (agent.goal.actualization <= agent.goal.esteem) { console.log( "focus is " + agent.goal.focus.slice(0, 1));
} else { console.log( "focus is " + agent.goal.focus.slice(1, 2));
} 

if (agent.goal.transcendance + agent.goal.actualization >= 100) { let growth =+ agent.goal.transcendance;
 agent.goal.need = "transcendance";
} else { let growth =- agent.goal.transcendance;
} //purpose

if (agent.goal.actualization + agent.goal.esteem >= 100) { let growth =+ actualization;
 agent.goal.need = "actualization";
} else { let growth =- agent.goal.actualization;
} //purpose

//focus: deficiency: if all yes, then deficiency is fulfilled
if (agent.goal.esteem + agent.goal.belonging >= 100) { let deficiency =- esteem;
} else { let deficiency =+ agent.goal.esteem;
 agent.goal.need = "esteem";
} //purpose

if (agent.goal.belonging + agent.goal.safety >= 100) {let deficiency =- belonging;
} else { let deficiency =+ agent.goal.belonging;
 agent.goal.need = "belonging";
} //belonging

if (agent.goal.safety + agent.goal.physiology >= 100) { let deficiency =- safety;
} else { let deficiency =+ agent.goal.safety;
 agent.goal.need = "safety";
} //relief

if (agent.goal.physiology >= 100) { let deficiency =- physiology;
} else { let deficiency =+ agent.goal.physiology; 
 agent.goal.need = "physiology";
} //relief

let fsm = new instinctualDrive({
    init: 'event',
    transitions: [
      { name: 'thinking',      from: 'action',     to: 'purpose' },
      { name: 'feeling',       from: 'action',     to: 'belonging' },
      { name: 'focusing',      from: 'action',     to: 'goal'  },
      { name: 'resting',       from: 'action',     to: 'relief'    },
      { name: 'Worrying',      from: 'action',     to: 'stress' },
      { name: 'stressing',     from: 'stress',     to: 'willpower' },
      { name: 'wanting',       from: 'belonging',  to: 'willpower' },
      { name: 'willing',       from: 'purpose',    to: 'willpower' },
      { name: 'manifesting',   from: 'goal',       to: 'willpower'  },
      { name: 'imagining',     from: 'relief',     to: 'willpower'    },
      { name: 'doing',         from: 'willpower',  to: 'action' }
    ],
    methods: {
      onThinking:    function() { console.log('I thought')    },
      onFeeling:     function() { console.log('I felt')     },
      onFocusing:    function() { console.log('I focused on') },
      onWorrying:    function() { console.log('I rested')    },
      onStressing:   function() { console.log('I wanted')     },
      onResting:     function() { console.log('I rested')    },
      onWanting:     function() { console.log('I wanted')     },
      onWilling:     function() { console.log('I willed') },
      onManifesting: function() { console.log('I manifested')    },
      onImagining:   function() { console.log('I imagined')     },
      onDoing:       function() { console.log('I did') }
    }
  });

  /* https://github.com/jakesgordon/javascript-state-machine */