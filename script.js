const tools = [
  {
    name: 'ChatGPT',
    cat: 'IA',
    icon: '🤖',
    desc: 'Assistente de IA para ideias, textos, estudos, código e tarefas.',
    rating: 4.9,
    url: 'https://chatgpt.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: 'DESTAQUE',
    freeTrial: true,
    featured: true,
    tags: ['ia', 'chatbot', 'texto', 'código', 'produtividade']
  },
  {
    name: 'Claude',
    cat: 'IA',
    icon: '🧠',
    desc: 'IA para análise, escrita, raciocínio e criação de conteúdo.',
    rating: 4.8,
    url: 'https://claude.ai/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: 'DESTAQUE',
    freeTrial: true,
    featured: true,
    tags: ['ia', 'chatbot', 'escrita', 'análise']
  },
  {
    name: 'Perplexity',
    cat: 'IA',
    icon: '🔎',
    desc: 'Pesquisa com IA para encontrar respostas e explorar assuntos.',
    rating: 4.8,
    url: 'https://www.perplexity.ai/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: 'POPULAR',
    freeTrial: true,
    featured: true,
    tags: ['ia', 'pesquisa', 'busca', 'informação']
  },
  {
    name: 'Gemini',
    cat: 'IA',
    icon: '✨',
    desc: 'Assistente de IA para pesquisa, ideias e produtividade.',
    rating: 4.7,
    url: 'https://gemini.google.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: '',
    freeTrial: true,
    featured: true,
    tags: ['ia', 'google', 'pesquisa', 'produtividade']
  },
  {
    name: 'Notion',
    cat: 'Produtividade',
    icon: '◼️',
    desc: 'Organize projetos, documentos, tarefas e conhecimento.',
    rating: 4.8,
    url: 'https://www.notion.so/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: 'POPULAR',
    freeTrial: true,
    featured: true,
    tags: ['produtividade', 'organização', 'notas', 'projetos']
  },
  {
    name: 'ClickUp',
    cat: 'Produtividade',
    icon: '✅',
    desc: 'Gestão de tarefas, equipes e projetos em um só lugar.',
    rating: 4.6,
    url: 'https://clickup.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: '',
    freeTrial: true,
    featured: false,
    tags: ['produtividade', 'tarefas', 'projetos', 'equipe']
  },
  {
    name: 'Canva',
    cat: 'Design',
    icon: '🎨',
    desc: 'Crie posts, apresentações, vídeos, logos e artes.',
    rating: 4.8,
    url: 'https://www.canva.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: 'POPULAR',
    freeTrial: true,
    featured: true,
    tags: ['design', 'imagem', 'vídeo', 'social media']
  },
  {
    name: 'CapCut',
    cat: 'Design',
    icon: '✂️',
    desc: 'Editor de vídeos para Reels, Shorts e conteúdo rápido.',
    rating: 4.6,
    url: 'https://www.capcut.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: '',
    freeTrial: true,
    featured: false,
    tags: ['design', 'vídeo', 'reels', 'shorts']
  },
  {
    name: 'HubSpot',
    cat: 'Negócios',
    icon: '🟠',
    desc: 'Ferramentas para marketing, vendas, CRM e relacionamento.',
    rating: 4.6,
    url: 'https://www.hubspot.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: '',
    freeTrial: true,
    featured: false,
    tags: ['negócios', 'crm', 'marketing', 'vendas']
  },
  {
    name: 'NordVPN',
    cat: 'Segurança',
    icon: '🛡️',
    desc: 'Privacidade e segurança para sua navegação.',
    rating: 4.7,
    url: 'https://nordvpn.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: 'OFERTA',
    freeTrial: false,
    featured: true,
    tags: ['segurança', 'vpn', 'privacidade']
  },
  {
    name: 'Jasper',
    cat: 'IA',
    icon: '🪄',
    desc: 'Criação de conteúdo com inteligência artificial.',
    rating: 4.7,
    url: 'https://www.jasper.ai/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: '',
    freeTrial: true,
    featured: false,
    tags: ['ia', 'conteúdo', 'marketing', 'escrita']
  },
  {
    name: 'Grammarly',
    cat: 'Produtividade',
    icon: '✍️',
    desc: 'Ajuda a revisar textos e escrever com mais clareza.',
    rating: 4.6,
    url: 'https://www.grammarly.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: '',
    freeTrial: true,
    featured: false,
    tags: ['produtividade', 'escrita', 'gramática', 'texto']
  },
  {
    name: 'Adobe Express',
    cat: 'Design',
    icon: '🖌️',
    desc: 'Criação rápida de peças, vídeos e conteúdo visual.',
    rating: 4.6,
    url: 'https://www.adobe.com/express/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: '',
    freeTrial: true,
    featured: false,
    tags: ['design', 'adobe', 'imagem', 'vídeo']
  },
  {
    name: 'Zapier',
    cat: 'Negócios',
    icon: '⚡',
    desc: 'Automatize tarefas conectando aplicativos e serviços.',
    rating: 4.7,
    url: 'https://zapier.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: 'POPULAR',
    freeTrial: true,
    featured: true,
    tags: ['negócios', 'automação', 'produtividade', 'integração']
  },
  {
    name: 'Bitwarden',
    cat: 'Segurança',
    icon: '🔐',
    desc: 'Gerenciador de senhas para proteger suas contas.',
    rating: 4.7,
    url: 'https://bitwarden.com/',
    affiliateUrl: '',
    isAffiliate: false,
    badge: '',
    freeTrial: true,
    featured: false,
    tags: ['segurança', 'senhas', 'privacidade']
  }
];

let filter = 'Todos';
let favs = JSON.parse(localStorage.getItem('fusaFavs') || '[]');

const grid = document.querySelector('#grid');
const search = document.querySelector('#search');
const sort = document.querySelector('#sort');

function getToolUrl(tool) {
  return tool.isAffiliate && tool.affiliateUrl
    ? tool.affiliateUrl
    : tool.url;
}

function render() {
  const q = search.value.trim().toLowerCase();

  let list = tools.filter(tool => {
    const categoryMatch =
      filter === 'Todos' || tool.cat === filter;

    const searchText = [
      tool.name,
      tool.cat,
      tool.desc,
      ...(tool.tags || [])
    ].join(' ').toLowerCase();

    return categoryMatch && searchText.includes(q);
  });

  if (sort.value === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort.value === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  if (sort.value === 'featured') {
    list.sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      return b.rating - a.rating;
    });
  }

  grid.innerHTML = list.map(tool => {
    const saved = favs.includes(tool.name);
    const badge = tool.badge
      ? `<span class="tool-badge">${tool.badge}</span>`
      : '';

    const trial = tool.freeTrial
      ? `<span class="trial-badge">TESTE GRÁTIS</span>`
      : '';

    return `
      <article class="tool">
        ${badge}
        <button
          class="fav ${saved ? 'saved' : ''}"
          data-f="${tool.name}"
          aria-label="${saved ? 'Remover' : 'Adicionar'} ${tool.name} aos favoritos"
        >
          ${saved ? '★' : '☆'}
        </button>

        <div class="icon">${tool.icon}</div>

        <h3>${tool.name}</h3>

        <span class="tag">${tool.cat}</span>

        <p>${tool.desc}</p>

        <div class="rating">
          ★ ${tool.rating.toFixed(1)} • recomendado
        </div>

        <div class="tool-meta">
          ${trial}
          ${tool.isAffiliate ? '<span>🔗 Oferta</span>' : ''}
        </div>

        <button class="know" data-tool="${tool.name}">
          Conhecer ↗
        </button>
      </article>
    `;
  }).join('');

  document.querySelectorAll('[data-f]').forEach(button => {
    button.onclick = () => fav(button.dataset.f);
  });

  document.querySelectorAll('[data-tool]').forEach(button => {
    button.onclick = () => openTool(button.dataset.tool);
  });

  document.querySelector('#empty').style.display =
    list.length ? 'none' : 'block';
}

function fav(name) {
  favs = favs.includes(name)
    ? favs.filter(item => item !== name)
    : [...favs, name];

  localStorage.setItem('fusaFavs', JSON.stringify(favs));

  document.querySelector('#fav i').textContent = favs.length;

  render();

  toast(
    favs.includes(name)
      ? `${name} foi salvo nos favoritos.`
      : `${name} saiu dos favoritos.`
  );
}

function openTool(name) {
  const tool = tools.find(item => item.name === name);

  if (!tool) return;

  const destination = getToolUrl(tool);

  const affiliateNote = tool.isAffiliate
    ? `<p class="small-note">
        Este link pode gerar uma comissão para o projeto,
        sem custo adicional para você.
      </p>`
    : '';

  const trialText = tool.freeTrial
    ? '<p>🟢 <strong>Possui opção de teste ou plano gratuito.</strong></p>'
    : '';

  document.querySelector('#modalContent').innerHTML = `
    <div class="modal-meta">
      ${tool.cat} • ★ ${tool.rating.toFixed(1)}
    </div>

    <h2>${tool.icon} ${tool.name}</h2>

    <p>${tool.desc}</p>

    ${trialText}

    ${affiliateNote}

    <a
      class="btn"
      href="${destination}"
      target="_blank"
      rel="noopener noreferrer sponsored"
    >
      Abrir ferramenta ↗
    </a>

    <button
      class="btn secondary"
      id="copyToolLink"
      type="button"
    >
      Copiar link
    </button>
  `;

  document.querySelector('#copyToolLink').onclick = () => {
    copyLink(destination);
  };

  document.querySelector('#modal').classList.add('open');
  document.querySelector('#modal').setAttribute('aria-hidden', 'false');
}

function copyLink(url) {
  if (!navigator.clipboard) {
    toast(url);
    return;
  }

  navigator.clipboard
    .writeText(url)
    .then(() => toast('Link copiado!'))
    .catch(() => toast('Não foi possível copiar o link.'));
}

function closeModal() {
  document.querySelector('#modal').classList.remove('open');
  document.querySelector('#modal').setAttribute('aria-hidden', 'true');
}

function toast(message) {
  const element = document.querySelector('#toast');

  element.textContent = message;
  element.classList.add('show');

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    element.classList.remove('show');
  }, 2800);
}

document.querySelectorAll('.cats button').forEach(button => {
  button.onclick = () => {
    document
      .querySelectorAll('.cats button')
      .forEach(item => item.classList.remove('active'));

    button.classList.add('active');

    filter = button.dataset.cat;

    document
      .querySelector('#ferramentas')
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    render();
  };
});

search.oninput = render;
sort.onchange = render;

document.querySelector('#fav').onclick = () => {
  toast(
    favs.length
      ? `Você tem ${favs.length} favorito(s) salvo(s) neste aparelho.`
      : 'Você ainda não tem favoritos.'
  );
};

document.querySelector('#form').onsubmit = event => {
  event.preventDefault();

  toast(
    'Cadastro recebido! O envio real de e-mails será conectado na próxima etapa.'
  );

  event.target.reset();
};

document.querySelector('#menu').onclick = () => {
  document.querySelector('#links').classList.toggle('open');
};

document.querySelectorAll('#links a').forEach(link => {
  link.onclick = () => {
    document.querySelector('#links').classList.remove('open');
  };
});

document.querySelector('#modalClose').onclick = closeModal;

document.querySelector('#modal').onclick = event => {
  if (event.target.id === 'modal') {
    closeModal();
  }
};

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - innerHeight;

  document.querySelector('#progress').style.width =
    height ? `${scrollY / height * 100}%` : '0%';

  document.querySelector('#top').style.display =
    scrollY > 450 ? 'block' : 'none';
});

document.querySelector('#top').onclick = () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll('.reveal')
  .forEach(element => observer.observe(element));

document.querySelector('#fav i').textContent = favs.length;

render();
