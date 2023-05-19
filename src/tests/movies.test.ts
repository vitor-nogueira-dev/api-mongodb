import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { App } from '../App';
// import { Done } from 'mocha';
import { TMovie } from '../types';
import { Model } from 'mongoose';


const app = new App().app;
chai.use(chaiHttp);
const { expect } = chai;

describe('Movies', () => {
    it('should return a list of movies', async () => {
        sinon.stub(Model, 'find').resolves([
            {
                title: 'Test',
                releaseYear: 2020,
                author: 'Test',
                genre: 'Test',
            },
        ] as TMovie[]);

        const res = await chai
            .request(app)
            .get('/movies');

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.deep.equal([{
            title: 'Test',
            releaseYear: 2020,
            author: 'Test',
            genre: 'Test',
        }])
    });
});

// jest @types/jest @types/sinon @types/chai chai-http @types/chai-http