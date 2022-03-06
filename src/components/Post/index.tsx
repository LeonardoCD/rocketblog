import * as S from './styles';

interface ContentProps {
  img?: string;
  data: string;
  title: string;
  description: string;
}

export function Post({img, data, title, description }: ContentProps) {
  return (
    <S.Content>
      {img && <img src={img} alt="" />}
      <span>{data}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </S.Content>
  );
}
