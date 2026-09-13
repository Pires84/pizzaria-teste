import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container header-content">
      <a href="#" class="brand">NOME DA EMPRESA</a>

      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>

      <a href="#contato" class="button button-small">
        CTA PRINCIPAL
      </a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <p class="eyebrow">SEGMENTO / CIDADE</p>

          <h1>
            Headline principal do cliente.
          </h1>

          <p class="hero-text">
            Subheadline curta explicando o principal benefício,
            diferencial ou proposta de valor do negócio.
          </p>

          <div class="hero-actions">
            <a href="#contato" class="button">
              CTA PRINCIPAL
            </a>

            <a href="#servicos" class="button button-secondary">
              Ver serviços
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="image-placeholder">
            <span>IMAGEM PRINCIPAL DO CLIENTE</span>
          </div>
        </div>
      </div>
    </section>

    <section class="services section" id="servicos">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">SERVIÇOS</p>

          <h2>Principais soluções.</h2>

          <p>
            Substitua este conteúdo pelos serviços ou produtos
            mais importantes do cliente.
          </p>
        </div>

        <div class="services-grid">
          <article class="service">
            <span class="service-number">01</span>
            <h3>Serviço principal</h3>
            <p>Descrição curta e objetiva do serviço.</p>
          </article>

          <article class="service">
            <span class="service-number">02</span>
            <h3>Segundo serviço</h3>
            <p>Descrição curta e objetiva do serviço.</p>
          </article>

          <article class="service">
            <span class="service-number">03</span>
            <h3>Terceiro serviço</h3>
            <p>Descrição curta e objetiva do serviço.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="about section" id="sobre">
      <div class="container about-grid">
        <div>
          <p class="eyebrow">SOBRE</p>
          <h2>Por que escolher este negócio?</h2>
        </div>

        <div class="about-copy">
          <p>
            Use esta área para explicar diferenciais reais,
            experiência, processo, atendimento e confiança.
          </p>

          <div class="features">
            <span>✓ Diferencial real 1</span>
            <span>✓ Diferencial real 2</span>
            <span>✓ Diferencial real 3</span>
          </div>
        </div>
      </div>
    </section>

    <section class="contact section" id="contato">
      <div class="container contact-grid">
        <div>
          <p class="eyebrow">CONTATO</p>

          <h2>Pronto para começar?</h2>

          <p>
            Substitua esta área pelos dados reais do cliente.
          </p>
        </div>

        <div class="contact-card">
          <div>
            <span class="label">WhatsApp</span>
            <strong>PLACEHOLDER</strong>
          </div>

          <div>
            <span class="label">Endereço</span>
            <strong>PLACEHOLDER</strong>
          </div>

          <div>
            <span class="label">Horário</span>
            <strong>PLACEHOLDER</strong>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-content">
      <strong>NOME DA EMPRESA</strong>
      <span>Site desenvolvido a partir do modelo-base</span>
    </div>
  </footer>
`