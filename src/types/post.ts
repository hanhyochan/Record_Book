export type postType = {
  commentCount: number;
  createdAt: string;
  id: string;
  isAuthor: boolean;
  title: string;
  updatedAt: string;
  viewCount: number;
};

export type postDetailType = {
  commentCount: number;
  createdAt: string;
  id: string;
  isAuthor: boolean;
  title: string;
  updatedAt: string;
  viewCount: number;
  content: string;
  author: authorType;
};

export type authorType = {
  id: string;
  loginId: string;
  nickname: string | null;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
