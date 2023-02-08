export type TermsProps = {
  contentView: string;
};

export type RulesListProps = {
  items: TermList;
};

export type TermList = TitleObject[];
type TitleObject = { id: number; title: string; style?: string; children?: TitleObject[] };

export enum Style {
  BOLD = 'bold',
}

export enum TermsTitle {
  TERMS = 'Правила пользования',
  CONTRACT = 'Договор оферты',
}
