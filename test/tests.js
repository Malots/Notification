import Notification from '../src/notification';
import test from 'tape';

const notify = new Notification();

test('Deve retornar que não é válido se possuir algum erro', function(t) {
    notify.add('Erro','Valor');
    t.equal(notify.isValid(),false);
    t.end();
});

test('Deve retornar o valor do erro', function(t) {
    notify.add('Erro','Valor');
    t.equal(notify.get('Erro'),'Valor');
    t.end();
});

test('Deve adicionar apenas uma chave igual ao erro', function(t) {
    notify.add('Erro','Valor um');
    notify.add('Erro','Valor dois');
    notify.add('Erro','Valor três');
    t.equal(notify.count(),1);
    t.end();
});

test('Deve retornar chave não encontrada', function(t) {
    notify.add('Erro','Valor');
    t.equal(notify.get('Chave'),'Key not found');
    t.end();
});

test('Deve retornar um array com os erros', function(t) {
    notify.add('Erro','Valor');
    t.isEquivalent(notify.getAll(),[['Erro','Valor']]);
    t.end();
});
