(function(){
  'use strict';
  const d = window.TASCA || {};
  const setText = (id, value) => { const node = document.getElementById(id); if(node) node.textContent = value || '[PREENCHER]'; };
  setText('frase-restaurante', d.frase);
  setText('sobre-texto', d.historia);
  setText('morada', d.morada);
  setText('horario', d.horario);
  setText('email', d.email);
  setText('telefone', d.telefone);
  setText('sociais', d.redes);

  const menu = document.getElementById('pratos-container');
  (d.pratos || []).forEach((p, i) => {
    const card = document.createElement('article'); card.className = 'menu-card';
    const number = document.createElement('span'); number.className = 'menu-number'; number.textContent = `PRATO 0${i+1}`;
    const heading = document.createElement('h3'); heading.textContent = p.nome || '[PRATO]';
    const description = document.createElement('p'); description.textContent = p.descricao || '[DESCRIÇÃO]';
    const price = document.createElement('span'); price.className='menu-price'; price.textContent = p.preco || '[PREÇO]';
    card.append(number, heading, description, price); menu.appendChild(card);
  });
  const team = document.getElementById('equipa-container');
  (d.equipa || []).forEach((p) => {
    const card = document.createElement('div'); card.className='team-card';
    const avatar = document.createElement('span'); avatar.className='team-avatar'; avatar.textContent = '✦'; avatar.setAttribute('aria-hidden','true');
    const text = document.createElement('div'); const name = document.createElement('strong'); name.textContent = p.nome || '[NOME]';
    const role = document.createElement('small'); role.textContent = p.funcao || '[FUNÇÃO]';
    text.append(name,role); card.append(avatar,text); team.appendChild(card);
  });
})();
