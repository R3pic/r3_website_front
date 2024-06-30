interface PostDTO {
    postId: number;
    content: string;
    authorId: string;
    nickname: string;

    like: boolean;
    likesCount: number;

    bookmark: boolean;
    bookmarkCount: number;

    createdAt: Date;
}