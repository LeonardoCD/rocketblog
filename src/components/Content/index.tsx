import * as S from './styles';
import Post1 from '../../assets/post-1.png';
import Post2 from '../../assets/post-2.png';
import Post3 from '../../assets/post-3.png';
import Post4 from '../../assets/post-4.png';
import { Post } from '../Post';

export function Content() {
  return (
    <S.ContentContainer>
      <S.ContentTop>
        <S.Column>
          <Post
            img={Post1}
            data='Janeiro 04, 2022'
            title='Começando no ReactJS em 2022'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
            aenean sit vitae, sed tristique nibh nibh eu in aliquet ut
            adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
            Sed volutpat aenean.'
          />
        </S.Column>
        <S.Column>
          <Post
            data='Janeiro 04, 2022'
            title='Conheça as principais técnicas para conseguir 
              uma vaga internacional em programação'
            description='Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Nibh nibh eu in aliquet ut
              adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique.'
          />

          <hr />

          <Post
            data='Janeiro 04, 2022'
            title='Veja a evolução do Front-end na prática'
            description='Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nibh nibh eu in aliquet ut
              adipiscing neque.'
          />
        </S.Column>
      </S.ContentTop>
      <S.Row>
        <Post
          img={Post2}
          data='Janeiro 04, 2022'
          title='10 dicas para conseguir a vaga desejada'
          description='Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nibh nibh eu in aliquet ut adipiscing
            neque. Sed volutpat aenean sit vitae, sed tristique.'
        />

        <Post
          img={Post3}
          data='Janeiro 04, 2022'
          title='Deixe seu código mais semântico com essas dicas'
          description='Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nibh nibh eu in aliquet ut adipiscing
          neque. Sed volutpat aenean sit vitae, sed tristique.'
        />

        <Post
          img={Post4}
          data='Janeiro 04, 2022'
          title='Use essas dicas nas suas aplicações mobile'
          description='Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nibh nibh eu in aliquet ut adipiscing
          neque. Sed volutpat aenean sit vitae, sed tristique.'
        />
      </S.Row>
    </S.ContentContainer>
  );
}