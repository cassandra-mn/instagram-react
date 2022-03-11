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
  { imagem: "assets/img/meowed.svg", nome: "meowed", perfil: "assets/img/respondeai.svg", conteudo: "assets/img/gato-telefone.svg", curtidas: "respondeai", quantidade: 101.523 },
  { imagem: "assets/img/barked.svg", nome: "barked", perfil: "assets/img/adorable_animals.svg", conteudo: "assets/img/dog.svg", curtidas: "adorable_animals", quantidade: 99.159 }
];

const sugestoes = [
  { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
  { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
  { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
  { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
  { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
];

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>

      <div class="sidebar">
        <Usuario imagem="assets/img/catanacomics.svg" usuario="catanacomics" nome="Catana" />
        <Sugestoes />
        <Links />
        <Copyrigth />
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
        <Post imagem={post.imagem} nome={post.nome} conteudo={post.conteudo} perfil={post.perfil} curtidas={post.curtidas} quantidade={post.quantidade} />
      )}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map(sugestao =>
        <Sugestao imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.razao} />
      )}
    </div>
  );
}

function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.imagem} />
      <div class="texto">
        <strong>{props.usuario}</strong>
        {props.nome}
      </div>
    </div>
  );
}

function Links() {
  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}

function Copyrigth() {
  return (
    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  );
}