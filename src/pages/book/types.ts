export type UserCommentProps = {
  name: string;
  comment?: string;
  date: string;
};

export type BookDataI = {
  id: number;
  isStar: boolean;
  itemTitle: string;
  itemSubtitle: string;
  bookId: string;
  img?: string | string[];
};

export type BookDescProps = {
  bookData?: BookDataI;
};
