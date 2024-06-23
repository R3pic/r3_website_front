interface PostDTO {
    id: number;
    content: string;
    author: string;

    like: boolean;
    likesCount: number;

    bookmark: boolean;
    bookmarkCount: number;

    createdAt: Date;
}