import { EnterpriseCreateVehicleCustomerFactory } from "./classes/factories/EnterpriseCustomerVehicleFactory";
import { IndividualCreateVehicleCustomerFactory } from "./classes/factories/IndividualCustomerVehicleFactory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const carOne = enterpriseFactory.createVehicle('Fusca', 'João');
const carTwo = individualFactory.createVehicle('Celta', 'Moisés');

carOne.pickUp();
carTwo.pickUp();