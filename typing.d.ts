export interface Tweet extends Tweetbody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean 

}

export type Tweetbody {
    text: string
    username: string
    profileImg: string
    image?: string


}