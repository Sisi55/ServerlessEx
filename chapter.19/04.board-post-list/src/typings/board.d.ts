interface IUser {
  id: number;
  email: string;
  nickname: string;
  role: string;
}

interface IAuth extends IUser {
  token: string;
}

interface IPost {
  id: number;
  title: string;
  context: string;
  user?: IUser;
  comments?: (IComment)[] | null;
  createdAt: string;
}

interface IComment {
  id: number;
  context: string;
  createdAt: string;
}