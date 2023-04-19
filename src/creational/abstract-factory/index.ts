import { EnterpriseCreateVehicleCustomerFactory } from "./classes/factories/enterprise-customer-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./classes/factories/individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const carOne = enterpriseFactory.createVehicle('Fusca', 'João');
const carTwo = individualFactory.createVehicle('Celta', 'Moisés');

carOne.pickUp();
carTwo.pickUp();