const usuarios = [
  { imagem: "assets/img/9gag.svg", nome: "9gag" },
  { imagem: "assets/img/meowed.svg", nome: "meowed" },
  { imagem: "assets/img/barked.svg", nome: "barked" },
  { imagem: "assets/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet" },
  { imagem: "assets/img/wawawicomics.svg", nome: "wawawicomics" },
  { imagem: "assets/img/respondeai.svg", nome: "respondeai" },
  { imagem: "assets/img/filomoderna.svg", nome: "filomoderna" },
  { imagem: "assets/img/memeriagourmet.svg", nome: "memeriagourmet" },
];

export default function ConvolverOptions() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          {usuarios.map(usuario => Stories(usuario))}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <div class="posts">
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/meowed.svg" />
                meowed
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/gato-telefone.svg" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/barked.svg" />
                barked
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/dog.svg" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/adorable_animals.svg" />
                <div class="texto">
                  Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar">
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" />
          <div class="texto">
            <strong>catanacomics</strong>
            Catana
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/bad.vibes.memes.svg" />
              <div class="texto">
                <div class="nome">bad.vibes.memes</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/chibirdart.svg" />
              <div class="texto">
                <div class="nome">chibirdart</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/razoesparaacreditar.svg" />
              <div class="texto">
                <div class="nome">razoesparaacreditar</div>
                <div class="razao">Novo no Instagram</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/adorable_animals.svg" />
              <div class="texto">
                <div class="nome">adorable_animals</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/smallcutecats.svg" />
              <div class="texto">
                <div class="nome">smallcutecats</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  );
}

function Stories(usuario) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={usuario.imagem} />
      </div>
      <div class="usuario">
        {usuario.nome}
      </div>
    </div>
  );
}