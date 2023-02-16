import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { motorcycleMock, responseMock } from '../../integration/motorcycleMock';
import MotorcycleService from '../../../src/Services/motorcycleService';

describe('Testa a camada service na rota motorcycles', function () {
  it('Verifica se é possível cadastrar uma nova moto na rota motorcycles', async function () {
    sinon.stub(Model, 'create').resolves(responseMock);

    const service = new MotorcycleService();
    const input = await service.create(motorcycleMock);

    expect(input).to.be.deep.equal(responseMock);
  });
});