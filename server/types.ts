type User = {
  name: string;
  email: string;
  bio?: string;
  location?: string;
  website?: string;
  profilePicture?: string;
  tweets: Tweet[];
  following: User[];
  followers: User[];
  messages: Message[];
  password: string;
  createdAt: Date;
  updatedAt: Date;
};
type Tweet = {
  content: string;
  author: User;
  likes: User[];
  retweets: Tweet[];
  replies: Tweet[];
  createdAt: Date;
  updatedAt: Date;
};

type Message = {
  content: string;
  sender: User;
  recipient: User;
  createdAt: Date;
  updatedAt: Date;
};
