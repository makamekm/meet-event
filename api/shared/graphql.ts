
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface AddressEntity {
    id: number;
    country: string;
    city: string;
    description: string;
    created_at: DateTime;
    updated_at?: DateTime;
    latitude: number;
    longitude: number;
}

export interface BannedUserEntity {
    id: number;
    user: UserEntity[];
    description: string;
    created_at: DateTime;
    updated_at?: DateTime;
}

export interface CardEntity {
    id: number;
    image: string;
    description: string;
    created_at: DateTime;
    updated_at?: DateTime;
    users: UserEntity[];
    author: UserEntity;
}

export interface CommentEntity {
    id: number;
    comments: CommentEntity[];
    parent: CommentEntity[];
    event: EventEntity;
    author: UserEntity;
    message: string;
    created_at: DateTime;
    updated_at?: DateTime;
    rating: number;
}

export interface EventAddressEntity {
    id: number;
    description: string;
    country: string;
    city: string;
    latitude: number;
    longitude: number;
}

export interface EventEntity {
    id: number;
    description: string;
    created_at: DateTime;
    updated_at?: DateTime;
    public_at: DateTime;
    duration: number;
    question: string;
    answer: string;
    users: EventUserEntity[];
    card: CardEntity;
    comments: CommentEntity[];
    score: EventScoreEntity;
    genres: number[];
    address: EventScoreEntity;
    address_picked: EventScoreEntity;
}

export interface EventScoreEntity {
    id: number;
    event: EventEntity;
    score_multiplex: number;
    score: number;
}

export interface EventUserEntity {
    id: number;
    type: string;
    user: UserEntity;
    event: EventEntity;
    created_at: DateTime;
    updated_at?: DateTime;
}

export interface NotificationEntity {
    id: number;
    short_message: string;
    message: string;
    created_at: DateTime;
    user: UserEntity;
    type: string;
}

export interface IQuery {
    me(): UserEntity | Promise<UserEntity>;
}

export interface ScoreEntity {
    id: number;
    user: UserEntity;
    score: number;
    level: number;
    newLevelPercentage: number;
}

export interface UserAddressEntity {
    id: number;
    country: string;
    city: string;
    latitude: number;
    longitude: number;
}

export interface UserEntity {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    contact_information: string;
    address: UserAddressEntity;
    addresses: UserAddressEntity[];
    created_at: DateTime;
    updated_at?: DateTime;
    recommend_genres: number[];
    score: ScoreEntity;
    cards: CardEntity[];
}

export type DateTime = any;
