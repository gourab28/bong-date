const fastify = require('fastify')({
  logger: false
})
const {
  getDate,
  getDay,
  getWeekDay,
  getMonth,
  getYear,
} = require('bangla-calendar');
const moment = require('moment');

const time = new Date();
const date = getDate(time, { format: 'D MMMM, YYYY' }); 
const today = getWeekDay(time, { format: 'eeee' }); 
const months = getMonth(time, { format: 'MMMM' });
const years = getYear(time, { format: 'YYYY' });

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ today: date ,
               day: today ,
               month: months,
               year: years
  })
})
//console.log(bong)
// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})