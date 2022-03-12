const icons = [
  "home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"
];

export default function FundoMobile() {
    return (
        <div class="fundo-mobile">
          {icons.map(icon => 
            <Icon name={icon} />
          )}
        </div>
    );
}

function Icon(props) {
  return (
    <ion-icon name={props.name}></ion-icon>
  );
}