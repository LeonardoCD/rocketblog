import * as S from './styles';
import Logo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search.svg';
import HeaderImage from '../../assets/featured-image.png';
import Arrow from '../../assets/arrow-right.svg';

export function Header() {
  return (
    <S.Header>
      <S.Menu>
        <img src={Logo} alt="TheBlog." className='logo' />
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Categorias</li>
          <li>Contato</li>
        </ul>
        <div className='inputGroup'>
          <input type="text" placeholder='Buscar' />
          <button>
            <img src={SearchIcon} alt="" />
          </button>
        </div>
      </S.Menu>
      <S.HeaderContent>
       <S.HeaderContentText>
          <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in 
            aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique 
            placerat hac. 
          </p>
          <button> Veja mais <img src={Arrow} alt="" /></button>
       </S.HeaderContentText>
       <S.HeaderContentImage>
         <img src={HeaderImage} alt="" />
       </S.HeaderContentImage>
      </S.HeaderContent>
    </S.Header>
  );
}
