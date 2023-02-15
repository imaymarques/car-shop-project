import { expect } from 'chai';
import sinon from 'sinon';
import { afterEach } from 'mocha';
import { Model } from 'mongoose'; 
import CarService from '../../../src/Services/carsService';
import { carsMock, responseMock } from '../../integration/carMock';

describe('Testa a camada Service na rota cars', function () {
  afterEach(sinon.restore);

  it('Verifica se retorna todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(carsMock);
    const carService = new CarService();
    const response = await carService.getAllCars();
    expect(response).to.be.equal(carsMock);
  });
  it('Verifica se retorna um carro pelo seu id', async function () {
    sinon.stub(Model, 'findById').resolves(responseMock);
    const id = '63ecbe47391f8ac20be1f9c4';
    const carService = new CarService();
    const response = await carService.getCarById(id);
    expect(response).to.be.equal(responseMock);
  });
  it('Verifica se retorna um erro digitando um id inválido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    const id = '46dfd';
    const carService = new CarService();
    const response = await carService.getCarById(id);
    expect(response).to.be.equal('Car not found');
  });
});