const stories = [
  { imagem: "assets/img/9gag.svg", nome: "9gag" },
  { imagem: "assets/img/meowed.svg", nome: "meowed" },
  { imagem: "assets/img/barked.svg", nome: "barked" },
  { imagem: "assets/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet" },
  { imagem: "assets/img/wawawicomics.svg", nome: "wawawicomics" },
  { imagem: "assets/img/respondeai.svg", nome: "respondeai" },
  { imagem: "assets/img/filomoderna.svg", nome: "filomoderna" },
  { imagem: "assets/img/memeriagourmet.svg", nome: "memeriagourmet" },
];

const posts = [
  { imagem: "assets/img/meowed.svg", nome: "meowed", perfil:"assets/img/respondeai.svg", conteudo: "assets/img/gato-telefone.svg", curtidas: "respondeai", quantidade: 101.523 },
  { imagem: "assets/img/barked.svg", nome: "barked", perfil:"assets/img/adorable_animals.svg", conteudo: "assets/img/dog.svg", curtidas: "adorable_animals", quantidade: 99.159 }
];

export default function ConvolverOptions() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
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

function Icon(props) {
  return (
    <ion-icon name={props.name}></ion-icon>
  );
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">
        {props.nome}
      </div>
    </div>
  );
}

function Stories() {
  return (
    <div class="stories">
      {stories.map(story =>
        <Story imagem={story.imagem} nome={story.nome} />
      )}

      <div class="setinha">
        <Icon name="chevron-forward-circle" />
      </div>
    </div>
  );
}

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagem} />
          {props.nome}
        </div>
        <div class="acoes">
          <Icon name="ellipsis-horizontal" />
        </div>
      </div>

      <div class="conteudo">
        <img src={props.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <Icon name="heart-outline" />
            <Icon name="chatbubble-outline" />
            <Icon name="paper-plane-outline" />
          </div>
          <div>
            <Icon name="bookmark-outline" />
          </div>
        </div>

        <div class="curtidas">
          <img src={props.perfil} />
          <div class="texto">
            Curtido por <strong>{props.curtidas}</strong> e <strong>outras {props.quantidade} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div class="posts">
      {posts.map(post =>
        <Post imagem={post.imagem} nome={post.nome} conteudo={post.conteudo} perfil={post.perfil} curtidas={post.curtidas} quantidade={post.quantidade}/>
      )}
    </div>
  );
}