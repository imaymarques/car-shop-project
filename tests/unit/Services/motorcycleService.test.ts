import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { motorcycleMock, responseMock,
  motorcyclesMockList } from '../../integration/motorcycleMock';
import MotorcycleService from '../../../src/Services/motorcycleService';

describe('Testa a camada service na rota motorcycles', function () {
  afterEach(sinon.restore);
  it('Verifica se é possível cadastrar uma nova moto na rota motorcycles', async function () {
    sinon.stub(Model, 'create').resolves(responseMock);

    const service = new MotorcycleService();
    const input = await service.create(motorcycleMock);

    expect(input).to.be.deep.equal(responseMock);
  });
  it('Verifica se retorna todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(motorcyclesMockList);
    const service = new MotorcycleService();
    const response = await service.findAll();
    expect(response).to.be.deep.equal(motorcyclesMockList);
  });
  it('Verifica se retorna uma moto pelo id', async function () {
    sinon.stub(Model, 'findOne').resolves(responseMock);
    const service = new MotorcycleService();
    const response = await service.findById('63ece7e1caa1c5f8574769c4');
    expect(response).to.be.deep.equal(responseMock);
  });
  it('Verifica se ao colocar id errado retorna o erro', async function () {
    sinon.stub(Model, 'findOne').resolves(null);
    const service = new MotorcycleService();
    try {
      await service.findById('fdjhfj');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Motorcycle not found');
    }
  });
});