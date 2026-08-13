const Device_0 = require('./Device_0');
const Device_1 = require('./Device_1');
const POU_1 = require('./POU_1');

POU_1.inVar = Device_0.ModuleBus.M0.I0
POU_1.outVar = Device_0.ModuleBus.M1.O0
POU_1.outVarUser2 = Device_0.ModuleBus.M1.O0
POU_1.outVarUser2Device1 = Device_1.ModuleBus.M1.O0
POU_1.inVarUser1 = Device_0.ModuleBus.M0.I1

