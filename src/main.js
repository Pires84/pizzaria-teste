import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container header-content">

      <a href="#" class="brand">
        <span class="brand-mark">BRASA</span>
        <span class="brand-subtitle">PIZZARIA ARTESANAL</span>
      </a>

      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#cardapio">Cardápio</a>
        <a href="#sobre">Nossa pizza</a>
        <a href="#pedido">Como pedir</a>
        <a href="#contato">Contato</a>
      </nav>

      <a href="#contato" class="button button-small">
        Pedir agora
      </a>

    </div>
  </header>

  <main>

    <section class="hero">
      <div class="container hero-grid">

        <div class="hero-content">

          <p class="eyebrow">
            PIZZARIA ARTESANAL
          </p>

          <h1>
            Pizza artesanal.<br>
            Feita para compartilhar.
          </h1>

          <p class="hero-text">
            Massa de fermentação lenta, ingredientes selecionados
            e aquele sabor de pizza feita com cuidado.
          </p>

          <div class="hero-actions">

            <a href="#contato" class="button">
              Pedir pelo WhatsApp
            </a>

            <a href="#cardapio" class="button button-secondary">
              Ver cardápio
            </a>

          </div>

          <div class="hero-details">
            <span>
              Massa artesanal
            </span>

            <span>
              Ingredientes selecionados
            </span>
          </div>

        </div>

        <div class="hero-visual">

          <img
            src="/images/hero-pizzaria-otimizada.webp"
            alt="Pizza artesanal recém-saída do forno"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            style="
              width: 100%;
              aspect-ratio: 4 / 5;
              object-fit: cover;
              display: block;
              border-radius: 18px;
              border: 1px solid rgba(255, 255, 255, 0.1);
            "
          >

        </div>

      </div>
    </section>

    <section class="menu-section section" id="cardapio">

      <div class="container">

        <div class="section-heading">

          <p class="eyebrow">
            NOSSO CARDÁPIO
          </p>

          <h2>
            Escolha sua favorita.
          </h2>

          <p>
            Alguns sabores para apresentar o projeto.
            Os valores reais serão definidos pelo cliente.
          </p>

        </div>

        <div class="pizza-grid">

          <article class="pizza-item">

            <div class="pizza-number">
              01
            </div>

            <div class="pizza-content">

              <div class="pizza-title-row">
                <h3>Margherita</h3>
                <span class="pizza-price">
                  Preço a confirmar
                </span>
              </div>

              <p>
                Molho de tomate, muçarela, tomate,
                manjericão e ingredientes selecionados.
              </p>

              <a href="#contato" class="pizza-link">
                Pedir esta pizza →
              </a>

            </div>

          </article>

          <article class="pizza-item">

            <div class="pizza-number">
              02
            </div>

            <div class="pizza-content">

              <div class="pizza-title-row">
                <h3>Calabresa</h3>
                <span class="pizza-price">
                  Preço a confirmar
                </span>
              </div>

              <p>
                Muçarela, calabresa, cebola
                e molho de tomate artesanal.
              </p>

              <a href="#contato" class="pizza-link">
                Pedir esta pizza →
              </a>

            </div>

          </article>

          <article class="pizza-item featured-pizza">

            <div class="pizza-number">
              03
            </div>

            <div class="pizza-content">

              <div class="pizza-title-row">
                <h3>Especial da Brasa</h3>
                <span class="pizza-price">
                  Preço a confirmar
                </span>
              </div>

              <p>
                Receita especial da casa.
                Os ingredientes serão definidos no projeto real.
              </p>

              <a href="#contato" class="pizza-link">
                Pedir esta pizza →
              </a>

            </div>

          </article>

        </div>

        <p class="training-note">
          Projeto fictício: sabores, informações e valores
          devem ser confirmados com o cliente real.
        </p>

      </div>

    </section>

    <section class="story-section section" id="sobre">

      <div class="container story-grid">

        <div class="story-heading">

          <p class="eyebrow">
            FEITA COM CALMA
          </p>

          <h2>
            A diferença começa na massa.
          </h2>

        </div>

        <div class="story-content">

          <p class="story-lead">
            Na Pizzaria Brasa, a proposta é transformar
            ingredientes simples em uma experiência especial.
          </p>

          <p>
            Massa preparada com cuidado, combinação equilibrada
            de ingredientes e preparo artesanal fazem parte
            de cada pizza.
          </p>

          <div class="features">

            <div class="feature">
              <span>01</span>
              <strong>Fermentação lenta</strong>
            </div>

            <div class="feature">
              <span>02</span>
              <strong>Ingredientes selecionados</strong>
            </div>

            <div class="feature">
              <span>03</span>
              <strong>Preparo artesanal</strong>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="order-section section" id="pedido">

      <div class="container">

        <div class="section-heading">

          <p class="eyebrow">
            SIMPLES DE PEDIR
          </p>

          <h2>
            Da escolha até sua mesa.
          </h2>

        </div>

        <div class="order-steps">

          <article class="order-step">
            <span class="step-number">01</span>
            <h3>Escolha</h3>
            <p>
              Consulte os sabores e escolha sua pizza.
            </p>
          </article>

          <article class="order-step">
            <span class="step-number">02</span>
            <h3>Chame no WhatsApp</h3>
            <p>
              Envie seu pedido de forma simples e rápida.
            </p>
          </article>

          <article class="order-step">
            <span class="step-number">03</span>
            <h3>Confirme</h3>
            <p>
              Confirme endereço, pagamento e informações do pedido.
            </p>
          </article>

          <article class="order-step">
            <span class="step-number">04</span>
            <h3>Aproveite</h3>
            <p>
              Receba em casa ou retire no estabelecimento.
            </p>
          </article>

        </div>

      </div>

    </section>

    <section class="delivery-section section">

      <div class="container delivery-grid">

        <div>

          <p class="eyebrow">
            ENTREGA E RETIRADA
          </p>

          <h2>
            Sua pizza, do jeito mais fácil.
          </h2>

          <p class="delivery-text">
            Em um projeto real, esta área mostrará bairros atendidos,
            taxa de entrega, tempo médio e opções de retirada.
          </p>

        </div>

        <div class="delivery-card">

          <div>
            <span class="label">
              Área de entrega
            </span>

            <strong>
              Informação a confirmar
            </strong>
          </div>

          <div>
            <span class="label">
              Tempo médio
            </span>

            <strong>
              Informação a confirmar
            </strong>
          </div>

          <div>
            <span class="label">
              Formas de pagamento
            </span>

            <strong>
              Informação a confirmar
            </strong>
          </div>

        </div>

      </div>

    </section>

    <section class="faq-section section">

      <div class="container faq-grid">

        <div>

          <p class="eyebrow">
            DÚVIDAS FREQUENTES
          </p>

          <h2>
            Antes de fazer seu pedido.
          </h2>

        </div>

        <div class="faq-list">

          <details>
            <summary>
              Vocês fazem entrega?
            </summary>

            <p>
              A área de entrega será informada pelo cliente real.
            </p>
          </details>

          <details>
            <summary>
              Qual é o horário de funcionamento?
            </summary>

            <p>
              O horário definitivo ainda será confirmado.
            </p>
          </details>

          <details>
            <summary>
              Quais são as formas de pagamento?
            </summary>

            <p>
              As formas de pagamento serão informadas pelo estabelecimento.
            </p>
          </details>

          <details>
            <summary>
              Como faço meu pedido?
            </summary>

            <p>
              O objetivo do projeto é permitir que o cliente
              faça o pedido diretamente pelo WhatsApp.
            </p>
          </details>

        </div>

      </div>

    </section>

    <section class="final-cta section" id="contato">

      <div class="container final-cta-content">

        <p class="eyebrow">
          DEU VONTADE?
        </p>

        <h2>
          Sua próxima pizza começa aqui.
        </h2>

        <p>
          O WhatsApp ainda é um placeholder porque
          este é um projeto fictício de treinamento.
        </p>

        <a href="#" class="button button-large">
          Pedir pelo WhatsApp
        </a>

        <span class="placeholder-warning">
          WhatsApp fictício — não conectado
        </span>

      </div>

    </section>

  </main>

  <footer>

    <div class="container footer-content">

      <div>
        <strong>
          PIZZARIA BRASA
        </strong>

        <span>
          Pizza artesanal
        </span>
      </div>

      <span>
        Projeto fictício para treinamento
      </span>

    </div>

  </footer>
`