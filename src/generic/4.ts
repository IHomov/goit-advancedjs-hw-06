/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface pageProps{
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}


class Page extends Component<pageProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "My Page" });
page.pageInfo(); 
export {};