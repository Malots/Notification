import Notification from "../src/Notification";
import test from "tape";

class Tests extends Notification {
    constructor(valueOne,valueTwo) {
        super(valueOne,valueTwo);
    }
}

const notify = new Tests(10,"value");

test("Deve retornar que não é válido se possuir algum erro", function(t) {
    notify.addError("Erro","Valor");
    t.plan(1);
    t.equal(notify.isValid(),false);
    t.end();
});

test("Deve retornar o valor do erro", function(t) {
    notify.addError("Erro","Valor");
    t.plan(1);
    t.equal(notify.getError("Erro"),"Valor");
    t.end();
});

test("Deve adicionar apenas uma chave igual ao erro", function(t) {
    notify.addError("Erro","Valor um");
    notify.addError("Erro","Valor dois");
    notify.addError("Erro","Valor três");
    t.plan(1);
    t.equal(notify.countErrors(),1);
    t.end();
});

test("Deve retornar chave não encontrada", function(t) {
    notify.addError("Erro","Valor");
    t.plan(1);
    t.equal(notify.getError("Chave"),"Key not found");
    t.end();
});

test("Deve retornar um json com os erros", function(t) {
    notify.addError("Erro","Valor");
    t.plan(1);
    t.isEquivalent(notify.getAllErrors(),{ 0: { error: "Erro", message: "Valor" } });
    t.end();
});