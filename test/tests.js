import Notification from '../src/notification';
import test from 'tape';

const notify = new Notification();

test('Deve retornar que não é válido se possuir algum erro',function(t) {
    t.equal(false,notify.isValid());
    t.end();
});
