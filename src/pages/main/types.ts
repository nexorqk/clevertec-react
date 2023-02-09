export type BookItemProps = {
  isStars: boolean;
  itemTitle: string;
  itemSubtitle: string;
  cover?: string;
  title?: string;
  disable?: boolean;
  view: string;
  bookId?: string;
};

export type BookListProps = {
  view: string;
};
