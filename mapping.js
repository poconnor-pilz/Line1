const device1 = require('./Device1');
const pou1 = require('./POU_1');


device1.module1.in1 = pou1.var1
pou1.var2 = device1.module2.in2;
pou1.var1 = device1.module2.out;

