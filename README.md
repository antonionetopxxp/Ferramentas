# 🇺🇸 Ferramentas USA

Site responsivo para divulgar ferramentas de **IA, tecnologia, produtividade, design, negócios e segurança**.

## Estrutura

- `index.html` — estrutura e conteúdo
- `style.css` — visual, responsividade e animações
- `script.js` — filtros, busca, favoritos, modal e interações

## O que já funciona

- Busca por ferramenta, categoria e descrição
- Filtros por categoria
- Ordenação por recomendação, nome e avaliação
- Favoritos salvos no `localStorage`
- Modal de detalhes
- Botões para abrir as ferramentas
- Menu mobile
- Barra de progresso de leitura
- Botão voltar ao topo
- Animações de entrada e elementos flutuantes
- CTA para Instagram
- Seção de ofertas
- Estrutura pronta para links de afiliado

## Como colocar seus links de afiliado

No `script.js`, cada ferramenta possui um campo `url`.

Exemplo:

```js
url:'SEU-LINK-DE-AFILIADO'
```

Substitua o endereço da ferramenta pelo seu link de afiliado quando tiver o programa aprovado.

## Publicação

O projeto é estático e pode ser publicado diretamente no **Netlify**, GitHub Pages ou outro serviço de hospedagem estática. Não precisa de Node.js ou processo de build.

## Instagram

O CTA já aponta para `@ferramentasusa.br`. Se o usuário mudar o endereço do perfil, altere os links no `index.html`.
