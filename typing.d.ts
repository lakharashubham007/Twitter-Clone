export interface Tweet extends Tweetbody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean 

}

export type Tweetbody = {
    text: string
    username: string
    profileImg: string
    image?: string

}

export type Commentbody = {
    comment: string
    tweetId: string
    username: string
    profileImg: string 
}

export interface Comment extends CommentBody {
    _createdAt: string
    _id: string
    _rev: string
    _type: 'comment'
    _updatedAt: string
    tweet: {
        _ref: string
        _type: 'reference'
    }
}