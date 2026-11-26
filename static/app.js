(function () {
  'use strict';
  var d = window.TASCA || {};
  function setText(id, value) {
    var node = document.getElementById(id);
    if (node) node.textContent = value || '';
  }
  setText('morada', d.morada);
  setText('horario', d.horario);
  setText('email', d.email);
  setText('telefone', d.telefone);
  setText('sociais', d.redes);

  var team = document.getElementById('equipa-container');
  if (team) {
    (d.equipa || []).forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'benefit';
      var name = document.createElement('h3');
      name.textContent = p.nome || '';
      var role = document.createElement('p');
      role.textContent = p.funcao || '';
      card.append(name, role);
      team.appendChild(card);
    });
  }
})();
