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
  content: string; // 추가된 내용
  author: authorType; // author 추가
};
