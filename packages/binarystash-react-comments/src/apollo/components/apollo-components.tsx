export type Maybe<T> = T | null

export interface NotificationWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	message?: Maybe<string>

	message_not?: Maybe<string>

	message_in?: Maybe<string[]>

	message_not_in?: Maybe<string[]>

	message_lt?: Maybe<string>

	message_lte?: Maybe<string>

	message_gt?: Maybe<string>

	message_gte?: Maybe<string>

	message_contains?: Maybe<string>

	message_not_contains?: Maybe<string>

	message_starts_with?: Maybe<string>

	message_not_starts_with?: Maybe<string>

	message_ends_with?: Maybe<string>

	message_not_ends_with?: Maybe<string>

	comments?: Maybe<CommentWhereInput>

	messages?: Maybe<MessageWhereInput>

	team?: Maybe<TeamWhereInput>

	channel?: Maybe<ChannelWhereInput>

	friend_requests?: Maybe<UserWhereInput>

	friend?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	AND?: Maybe<NotificationWhereInput[]>

	OR?: Maybe<NotificationWhereInput[]>

	NOT?: Maybe<NotificationWhereInput[]>
}

export interface CommentWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	body?: Maybe<string>

	body_not?: Maybe<string>

	body_in?: Maybe<string[]>

	body_not_in?: Maybe<string[]>

	body_lt?: Maybe<string>

	body_lte?: Maybe<string>

	body_gt?: Maybe<string>

	body_gte?: Maybe<string>

	body_contains?: Maybe<string>

	body_not_contains?: Maybe<string>

	body_starts_with?: Maybe<string>

	body_not_starts_with?: Maybe<string>

	body_ends_with?: Maybe<string>

	body_not_ends_with?: Maybe<string>

	parentId?: Maybe<string>

	parentId_not?: Maybe<string>

	parentId_in?: Maybe<string[]>

	parentId_not_in?: Maybe<string[]>

	parentId_lt?: Maybe<string>

	parentId_lte?: Maybe<string>

	parentId_gt?: Maybe<string>

	parentId_gte?: Maybe<string>

	parentId_contains?: Maybe<string>

	parentId_not_contains?: Maybe<string>

	parentId_starts_with?: Maybe<string>

	parentId_not_starts_with?: Maybe<string>

	parentId_ends_with?: Maybe<string>

	parentId_not_ends_with?: Maybe<string>

	pageId?: Maybe<string>

	pageId_not?: Maybe<string>

	pageId_in?: Maybe<string[]>

	pageId_not_in?: Maybe<string[]>

	pageId_lt?: Maybe<string>

	pageId_lte?: Maybe<string>

	pageId_gt?: Maybe<string>

	pageId_gte?: Maybe<string>

	pageId_contains?: Maybe<string>

	pageId_not_contains?: Maybe<string>

	pageId_starts_with?: Maybe<string>

	pageId_not_starts_with?: Maybe<string>

	pageId_ends_with?: Maybe<string>

	pageId_not_ends_with?: Maybe<string>

	repliedTo?: Maybe<UserWhereInput>

	ratings?: Maybe<RatingWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	replies_every?: Maybe<CommentWhereInput>

	replies_some?: Maybe<CommentWhereInput>

	replies_none?: Maybe<CommentWhereInput>

	author?: Maybe<UserWhereInput>

	AND?: Maybe<CommentWhereInput[]>

	OR?: Maybe<CommentWhereInput[]>

	NOT?: Maybe<CommentWhereInput[]>
}

export interface UserWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	email?: Maybe<string>

	email_not?: Maybe<string>

	email_in?: Maybe<string[]>

	email_not_in?: Maybe<string[]>

	email_lt?: Maybe<string>

	email_lte?: Maybe<string>

	email_gt?: Maybe<string>

	email_gte?: Maybe<string>

	email_contains?: Maybe<string>

	email_not_contains?: Maybe<string>

	email_starts_with?: Maybe<string>

	email_not_starts_with?: Maybe<string>

	email_ends_with?: Maybe<string>

	email_not_ends_with?: Maybe<string>

	notifications_every?: Maybe<NotificationWhereInput>

	notifications_some?: Maybe<NotificationWhereInput>

	notifications_none?: Maybe<NotificationWhereInput>

	set_private?: Maybe<boolean>

	set_private_not?: Maybe<boolean>

	username?: Maybe<string>

	username_not?: Maybe<string>

	username_in?: Maybe<string[]>

	username_not_in?: Maybe<string[]>

	username_lt?: Maybe<string>

	username_lte?: Maybe<string>

	username_gt?: Maybe<string>

	username_gte?: Maybe<string>

	username_contains?: Maybe<string>

	username_not_contains?: Maybe<string>

	username_starts_with?: Maybe<string>

	username_not_starts_with?: Maybe<string>

	username_ends_with?: Maybe<string>

	username_not_ends_with?: Maybe<string>

	password?: Maybe<string>

	password_not?: Maybe<string>

	password_in?: Maybe<string[]>

	password_not_in?: Maybe<string[]>

	password_lt?: Maybe<string>

	password_lte?: Maybe<string>

	password_gt?: Maybe<string>

	password_gte?: Maybe<string>

	password_contains?: Maybe<string>

	password_not_contains?: Maybe<string>

	password_starts_with?: Maybe<string>

	password_not_starts_with?: Maybe<string>

	password_ends_with?: Maybe<string>

	password_not_ends_with?: Maybe<string>

	gitHubId?: Maybe<string>

	gitHubId_not?: Maybe<string>

	gitHubId_in?: Maybe<string[]>

	gitHubId_not_in?: Maybe<string[]>

	gitHubId_lt?: Maybe<string>

	gitHubId_lte?: Maybe<string>

	gitHubId_gt?: Maybe<string>

	gitHubId_gte?: Maybe<string>

	gitHubId_contains?: Maybe<string>

	gitHubId_not_contains?: Maybe<string>

	gitHubId_starts_with?: Maybe<string>

	gitHubId_not_starts_with?: Maybe<string>

	gitHubId_ends_with?: Maybe<string>

	gitHubId_not_ends_with?: Maybe<string>

	facebookId?: Maybe<string>

	facebookId_not?: Maybe<string>

	facebookId_in?: Maybe<string[]>

	facebookId_not_in?: Maybe<string[]>

	facebookId_lt?: Maybe<string>

	facebookId_lte?: Maybe<string>

	facebookId_gt?: Maybe<string>

	facebookId_gte?: Maybe<string>

	facebookId_contains?: Maybe<string>

	facebookId_not_contains?: Maybe<string>

	facebookId_starts_with?: Maybe<string>

	facebookId_not_starts_with?: Maybe<string>

	facebookId_ends_with?: Maybe<string>

	facebookId_not_ends_with?: Maybe<string>

	twitterId?: Maybe<string>

	twitterId_not?: Maybe<string>

	twitterId_in?: Maybe<string[]>

	twitterId_not_in?: Maybe<string[]>

	twitterId_lt?: Maybe<string>

	twitterId_lte?: Maybe<string>

	twitterId_gt?: Maybe<string>

	twitterId_gte?: Maybe<string>

	twitterId_contains?: Maybe<string>

	twitterId_not_contains?: Maybe<string>

	twitterId_starts_with?: Maybe<string>

	twitterId_not_starts_with?: Maybe<string>

	twitterId_ends_with?: Maybe<string>

	twitterId_not_ends_with?: Maybe<string>

	gmailId?: Maybe<string>

	gmailId_not?: Maybe<string>

	gmailId_in?: Maybe<string[]>

	gmailId_not_in?: Maybe<string[]>

	gmailId_lt?: Maybe<string>

	gmailId_lte?: Maybe<string>

	gmailId_gt?: Maybe<string>

	gmailId_gte?: Maybe<string>

	gmailId_contains?: Maybe<string>

	gmailId_not_contains?: Maybe<string>

	gmailId_starts_with?: Maybe<string>

	gmailId_not_starts_with?: Maybe<string>

	gmailId_ends_with?: Maybe<string>

	gmailId_not_ends_with?: Maybe<string>

	directMessages_every?: Maybe<CommentWhereInput>

	directMessages_some?: Maybe<CommentWhereInput>

	directMessages_none?: Maybe<CommentWhereInput>

	avatar_url?: Maybe<FileWhereInput>

	private?: Maybe<boolean>

	private_not?: Maybe<boolean>

	blockedUsers_every?: Maybe<UserWhereInput>

	blockedUsers_some?: Maybe<UserWhereInput>

	blockedUsers_none?: Maybe<UserWhereInput>

	confirmed?: Maybe<boolean>

	confirmed_not?: Maybe<boolean>

	online?: Maybe<boolean>

	online_not?: Maybe<boolean>

	friends_every?: Maybe<UserWhereInput>

	friends_some?: Maybe<UserWhereInput>

	friends_none?: Maybe<UserWhereInput>

	friend_requests_every?: Maybe<UserWhereInput>

	friend_requests_some?: Maybe<UserWhereInput>

	friend_requests_none?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	role?: Maybe<UserRole>

	role_not?: Maybe<UserRole>

	role_in?: Maybe<UserRole[]>

	role_not_in?: Maybe<UserRole[]>

	teams_every?: Maybe<TeamWhereInput>

	teams_some?: Maybe<TeamWhereInput>

	teams_none?: Maybe<TeamWhereInput>

	channels_every?: Maybe<ChannelWhereInput>

	channels_some?: Maybe<ChannelWhereInput>

	channels_none?: Maybe<ChannelWhereInput>

	owned_teams_every?: Maybe<TeamWhereInput>

	owned_teams_some?: Maybe<TeamWhereInput>

	owned_teams_none?: Maybe<TeamWhereInput>

	owned_channels_every?: Maybe<ChannelWhereInput>

	owned_channels_some?: Maybe<ChannelWhereInput>

	owned_channels_none?: Maybe<ChannelWhereInput>

	AND?: Maybe<UserWhereInput[]>

	OR?: Maybe<UserWhereInput[]>

	NOT?: Maybe<UserWhereInput[]>
}

export interface FileWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	filename?: Maybe<string>

	filename_not?: Maybe<string>

	filename_in?: Maybe<string[]>

	filename_not_in?: Maybe<string[]>

	filename_lt?: Maybe<string>

	filename_lte?: Maybe<string>

	filename_gt?: Maybe<string>

	filename_gte?: Maybe<string>

	filename_contains?: Maybe<string>

	filename_not_contains?: Maybe<string>

	filename_starts_with?: Maybe<string>

	filename_not_starts_with?: Maybe<string>

	filename_ends_with?: Maybe<string>

	filename_not_ends_with?: Maybe<string>

	mimetype?: Maybe<string>

	mimetype_not?: Maybe<string>

	mimetype_in?: Maybe<string[]>

	mimetype_not_in?: Maybe<string[]>

	mimetype_lt?: Maybe<string>

	mimetype_lte?: Maybe<string>

	mimetype_gt?: Maybe<string>

	mimetype_gte?: Maybe<string>

	mimetype_contains?: Maybe<string>

	mimetype_not_contains?: Maybe<string>

	mimetype_starts_with?: Maybe<string>

	mimetype_not_starts_with?: Maybe<string>

	mimetype_ends_with?: Maybe<string>

	mimetype_not_ends_with?: Maybe<string>

	encoding?: Maybe<string>

	encoding_not?: Maybe<string>

	encoding_in?: Maybe<string[]>

	encoding_not_in?: Maybe<string[]>

	encoding_lt?: Maybe<string>

	encoding_lte?: Maybe<string>

	encoding_gt?: Maybe<string>

	encoding_gte?: Maybe<string>

	encoding_contains?: Maybe<string>

	encoding_not_contains?: Maybe<string>

	encoding_starts_with?: Maybe<string>

	encoding_not_starts_with?: Maybe<string>

	encoding_ends_with?: Maybe<string>

	encoding_not_ends_with?: Maybe<string>

	key?: Maybe<string>

	key_not?: Maybe<string>

	key_in?: Maybe<string[]>

	key_not_in?: Maybe<string[]>

	key_lt?: Maybe<string>

	key_lte?: Maybe<string>

	key_gt?: Maybe<string>

	key_gte?: Maybe<string>

	key_contains?: Maybe<string>

	key_not_contains?: Maybe<string>

	key_starts_with?: Maybe<string>

	key_not_starts_with?: Maybe<string>

	key_ends_with?: Maybe<string>

	key_not_ends_with?: Maybe<string>

	ETag?: Maybe<string>

	ETag_not?: Maybe<string>

	ETag_in?: Maybe<string[]>

	ETag_not_in?: Maybe<string[]>

	ETag_lt?: Maybe<string>

	ETag_lte?: Maybe<string>

	ETag_gt?: Maybe<string>

	ETag_gte?: Maybe<string>

	ETag_contains?: Maybe<string>

	ETag_not_contains?: Maybe<string>

	ETag_starts_with?: Maybe<string>

	ETag_not_starts_with?: Maybe<string>

	ETag_ends_with?: Maybe<string>

	ETag_not_ends_with?: Maybe<string>

	url?: Maybe<string>

	url_not?: Maybe<string>

	url_in?: Maybe<string[]>

	url_not_in?: Maybe<string[]>

	url_lt?: Maybe<string>

	url_lte?: Maybe<string>

	url_gt?: Maybe<string>

	url_gte?: Maybe<string>

	url_contains?: Maybe<string>

	url_not_contains?: Maybe<string>

	url_starts_with?: Maybe<string>

	url_not_starts_with?: Maybe<string>

	url_ends_with?: Maybe<string>

	url_not_ends_with?: Maybe<string>

	AND?: Maybe<FileWhereInput[]>

	OR?: Maybe<FileWhereInput[]>

	NOT?: Maybe<FileWhereInput[]>
}

export interface TeamWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	slug?: Maybe<string>

	slug_not?: Maybe<string>

	slug_in?: Maybe<string[]>

	slug_not_in?: Maybe<string[]>

	slug_lt?: Maybe<string>

	slug_lte?: Maybe<string>

	slug_gt?: Maybe<string>

	slug_gte?: Maybe<string>

	slug_contains?: Maybe<string>

	slug_not_contains?: Maybe<string>

	slug_starts_with?: Maybe<string>

	slug_not_starts_with?: Maybe<string>

	slug_ends_with?: Maybe<string>

	slug_not_ends_with?: Maybe<string>

	moderators_every?: Maybe<UserWhereInput>

	moderators_some?: Maybe<UserWhereInput>

	moderators_none?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	members_every?: Maybe<UserWhereInput>

	members_some?: Maybe<UserWhereInput>

	members_none?: Maybe<UserWhereInput>

	channels_every?: Maybe<ChannelWhereInput>

	channels_some?: Maybe<ChannelWhereInput>

	channels_none?: Maybe<ChannelWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	confirmed?: Maybe<boolean>

	confirmed_not?: Maybe<boolean>

	online?: Maybe<boolean>

	online_not?: Maybe<boolean>

	AND?: Maybe<TeamWhereInput[]>

	OR?: Maybe<TeamWhereInput[]>

	NOT?: Maybe<TeamWhereInput[]>
}

export interface ChannelWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	slug?: Maybe<string>

	slug_not?: Maybe<string>

	slug_in?: Maybe<string[]>

	slug_not_in?: Maybe<string[]>

	slug_lt?: Maybe<string>

	slug_lte?: Maybe<string>

	slug_gt?: Maybe<string>

	slug_gte?: Maybe<string>

	slug_contains?: Maybe<string>

	slug_not_contains?: Maybe<string>

	slug_starts_with?: Maybe<string>

	slug_not_starts_with?: Maybe<string>

	slug_ends_with?: Maybe<string>

	slug_not_ends_with?: Maybe<string>

	moderators_every?: Maybe<UserWhereInput>

	moderators_some?: Maybe<UserWhereInput>

	moderators_none?: Maybe<UserWhereInput>

	public?: Maybe<boolean>

	public_not?: Maybe<boolean>

	messages_every?: Maybe<MessageWhereInput>

	messages_some?: Maybe<MessageWhereInput>

	messages_none?: Maybe<MessageWhereInput>

	teamId?: Maybe<string>

	teamId_not?: Maybe<string>

	teamId_in?: Maybe<string[]>

	teamId_not_in?: Maybe<string[]>

	teamId_lt?: Maybe<string>

	teamId_lte?: Maybe<string>

	teamId_gt?: Maybe<string>

	teamId_gte?: Maybe<string>

	teamId_contains?: Maybe<string>

	teamId_not_contains?: Maybe<string>

	teamId_starts_with?: Maybe<string>

	teamId_not_starts_with?: Maybe<string>

	teamId_ends_with?: Maybe<string>

	teamId_not_ends_with?: Maybe<string>

	members_every?: Maybe<UserWhereInput>

	members_some?: Maybe<UserWhereInput>

	members_none?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<ChannelWhereInput[]>

	OR?: Maybe<ChannelWhereInput[]>

	NOT?: Maybe<ChannelWhereInput[]>
}

export interface MessageWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	body?: Maybe<string>

	body_not?: Maybe<string>

	body_in?: Maybe<string[]>

	body_not_in?: Maybe<string[]>

	body_lt?: Maybe<string>

	body_lte?: Maybe<string>

	body_gt?: Maybe<string>

	body_gte?: Maybe<string>

	body_contains?: Maybe<string>

	body_not_contains?: Maybe<string>

	body_starts_with?: Maybe<string>

	body_not_starts_with?: Maybe<string>

	body_ends_with?: Maybe<string>

	body_not_ends_with?: Maybe<string>

	parentId?: Maybe<string>

	parentId_not?: Maybe<string>

	parentId_in?: Maybe<string[]>

	parentId_not_in?: Maybe<string[]>

	parentId_lt?: Maybe<string>

	parentId_lte?: Maybe<string>

	parentId_gt?: Maybe<string>

	parentId_gte?: Maybe<string>

	parentId_contains?: Maybe<string>

	parentId_not_contains?: Maybe<string>

	parentId_starts_with?: Maybe<string>

	parentId_not_starts_with?: Maybe<string>

	parentId_ends_with?: Maybe<string>

	parentId_not_ends_with?: Maybe<string>

	url?: Maybe<string>

	url_not?: Maybe<string>

	url_in?: Maybe<string[]>

	url_not_in?: Maybe<string[]>

	url_lt?: Maybe<string>

	url_lte?: Maybe<string>

	url_gt?: Maybe<string>

	url_gte?: Maybe<string>

	url_contains?: Maybe<string>

	url_not_contains?: Maybe<string>

	url_starts_with?: Maybe<string>

	url_not_starts_with?: Maybe<string>

	url_ends_with?: Maybe<string>

	url_not_ends_with?: Maybe<string>

	filetype?: Maybe<string>

	filetype_not?: Maybe<string>

	filetype_in?: Maybe<string[]>

	filetype_not_in?: Maybe<string[]>

	filetype_lt?: Maybe<string>

	filetype_lte?: Maybe<string>

	filetype_gt?: Maybe<string>

	filetype_gte?: Maybe<string>

	filetype_contains?: Maybe<string>

	filetype_not_contains?: Maybe<string>

	filetype_starts_with?: Maybe<string>

	filetype_not_starts_with?: Maybe<string>

	filetype_ends_with?: Maybe<string>

	filetype_not_ends_with?: Maybe<string>

	author?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<MessageWhereInput[]>

	OR?: Maybe<MessageWhereInput[]>

	NOT?: Maybe<MessageWhereInput[]>
}

export interface RatingWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	vote?: Maybe<number>

	vote_not?: Maybe<number>

	vote_in?: Maybe<number[]>

	vote_not_in?: Maybe<number[]>

	vote_lt?: Maybe<number>

	vote_lte?: Maybe<number>

	vote_gt?: Maybe<number>

	vote_gte?: Maybe<number>

	author_every?: Maybe<UserWhereInput>

	author_some?: Maybe<UserWhereInput>

	author_none?: Maybe<UserWhereInput>

	AND?: Maybe<RatingWhereInput[]>

	OR?: Maybe<RatingWhereInput[]>

	NOT?: Maybe<RatingWhereInput[]>
}

export interface TodoWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	body?: Maybe<string>

	body_not?: Maybe<string>

	body_in?: Maybe<string[]>

	body_not_in?: Maybe<string[]>

	body_lt?: Maybe<string>

	body_lte?: Maybe<string>

	body_gt?: Maybe<string>

	body_gte?: Maybe<string>

	body_contains?: Maybe<string>

	body_not_contains?: Maybe<string>

	body_starts_with?: Maybe<string>

	body_not_starts_with?: Maybe<string>

	body_ends_with?: Maybe<string>

	body_not_ends_with?: Maybe<string>

	author?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<TodoWhereInput[]>

	OR?: Maybe<TodoWhereInput[]>

	NOT?: Maybe<TodoWhereInput[]>
}

export interface ProductWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	stock?: Maybe<number>

	stock_not?: Maybe<number>

	stock_in?: Maybe<number[]>

	stock_not_in?: Maybe<number[]>

	stock_lt?: Maybe<number>

	stock_lte?: Maybe<number>

	stock_gt?: Maybe<number>

	stock_gte?: Maybe<number>

	price?: Maybe<number>

	price_not?: Maybe<number>

	price_in?: Maybe<number[]>

	price_not_in?: Maybe<number[]>

	price_lt?: Maybe<number>

	price_lte?: Maybe<number>

	price_gt?: Maybe<number>

	price_gte?: Maybe<number>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<ProductWhereInput[]>

	OR?: Maybe<ProductWhereInput[]>

	NOT?: Maybe<ProductWhereInput[]>
}

export enum UserRole {
	Admin = 'ADMIN',
	Moderator = 'MODERATOR',
	User = 'USER'
}

export enum NotificationOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MessageAsc = 'message_ASC',
	MessageDesc = 'message_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum CommentOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	ParentIdAsc = 'parentId_ASC',
	ParentIdDesc = 'parentId_DESC',
	PageIdAsc = 'pageId_ASC',
	PageIdDesc = 'pageId_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum UserOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	EmailAsc = 'email_ASC',
	EmailDesc = 'email_DESC',
	SetPrivateAsc = 'set_private_ASC',
	SetPrivateDesc = 'set_private_DESC',
	UsernameAsc = 'username_ASC',
	UsernameDesc = 'username_DESC',
	PasswordAsc = 'password_ASC',
	PasswordDesc = 'password_DESC',
	GitHubIdAsc = 'gitHubId_ASC',
	GitHubIdDesc = 'gitHubId_DESC',
	FacebookIdAsc = 'facebookId_ASC',
	FacebookIdDesc = 'facebookId_DESC',
	TwitterIdAsc = 'twitterId_ASC',
	TwitterIdDesc = 'twitterId_DESC',
	GmailIdAsc = 'gmailId_ASC',
	GmailIdDesc = 'gmailId_DESC',
	PrivateAsc = 'private_ASC',
	PrivateDesc = 'private_DESC',
	ConfirmedAsc = 'confirmed_ASC',
	ConfirmedDesc = 'confirmed_DESC',
	OnlineAsc = 'online_ASC',
	OnlineDesc = 'online_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	RoleAsc = 'role_ASC',
	RoleDesc = 'role_DESC'
}

export enum TeamOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	ConfirmedAsc = 'confirmed_ASC',
	ConfirmedDesc = 'confirmed_DESC',
	OnlineAsc = 'online_ASC',
	OnlineDesc = 'online_DESC'
}

export enum ChannelOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	PublicAsc = 'public_ASC',
	PublicDesc = 'public_DESC',
	TeamIdAsc = 'teamId_ASC',
	TeamIdDesc = 'teamId_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum MessageOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	ParentIdAsc = 'parentId_ASC',
	ParentIdDesc = 'parentId_DESC',
	UrlAsc = 'url_ASC',
	UrlDesc = 'url_DESC',
	FiletypeAsc = 'filetype_ASC',
	FiletypeDesc = 'filetype_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum TodoOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum ProductOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	StockAsc = 'stock_ASC',
	StockDesc = 'stock_DESC',
	PriceAsc = 'price_ASC',
	PriceDesc = 'price_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum MutationType {
	Created = 'CREATED',
	Updated = 'UPDATED',
	Deleted = 'DELETED'
}

export type DateTime = any

export type Upload = any

// ====================================================
// Documents
// ====================================================

export type NewCommentSubscriptionVariables = {
	pageId: string
}

export type NewCommentSubscriptionSubscription = {
	__typename?: 'Subscription'

	newCommentSubscription: NewCommentSubscriptionNewCommentSubscription
}

export type NewCommentSubscriptionNewCommentSubscription = {
	__typename?: 'CommentSubscriptionPayload'

	node: Maybe<NewCommentSubscriptionNode>
}

export type NewCommentSubscriptionNode = MyCommentFragmentFragment

export type CommentMutationVariables = {
	body: string
	pageId: string
	parentId: string
	repliedTo?: Maybe<string>
}

export type CommentMutationMutation = {
	__typename?: 'Mutation'

	createComment: CommentMutationCreateComment
}

export type CommentMutationCreateComment = MyCommentFragmentFragment

export type QueryCommentVariables = {
	parentId: string
	offset?: Maybe<number>
	limit?: Maybe<number>
}

export type QueryCommentQuery = {
	__typename?: 'Query'

	queryComment: QueryCommentQueryComment
}

export type QueryCommentQueryComment = {
	__typename?: 'CommentConnection'

	pageInfo: QueryCommentPageInfo

	edges: QueryCommentEdges[]
}

export type QueryCommentPageInfo = {
	__typename?: 'PageInfo'

	hasPreviousPage: boolean

	endCursor: Maybe<string>

	hasNextPage: boolean

	startCursor: Maybe<string>
}

export type QueryCommentEdges = {
	__typename?: 'CommentEdge'

	node: QueryCommentNode
}

export type QueryCommentNode = MyCommentFragmentFragment

export type CreateReplyVariables = {
	body: string
	pageId: string
	parentId: string
	repliedTo?: Maybe<string>
}

export type CreateReplyMutation = {
	__typename?: 'Mutation'

	createReply: CreateReplyCreateReply
}

export type CreateReplyCreateReply = MyCommentFragmentFragment

export type LikeCommentVariables = {
	commentId: string
}

export type LikeCommentMutation = {
	__typename?: 'Mutation'

	likeComment: Maybe<LikeCommentLikeComment>
}

export type LikeCommentLikeComment = MyCommentFragmentFragment

export type EditCommentVariables = {
	id: string
	body: string
}

export type EditCommentMutation = {
	__typename?: 'Mutation'

	editComment: EditCommentEditComment
}

export type EditCommentEditComment = MyCommentFragmentFragment

export type DeleteCommentVariables = {
	id: string
}

export type DeleteCommentMutation = {
	__typename?: 'Mutation'

	deleteComment: DeleteCommentDeleteComment
}

export type DeleteCommentDeleteComment = {
	__typename?: 'DeleteCommentResponse'

	id: Maybe<string>

	parentId: Maybe<string>
}

export type MyCommentFragmentFragment = {
	__typename?: 'Comment'

	id: string

	parentId: string

	body: string

	repliedTo: Maybe<MyCommentFragmentRepliedTo>

	createdAt: DateTime

	pageId: string

	updatedAt: DateTime

	ratings: MyCommentFragmentRatings

	replies: Maybe<MyCommentFragmentReplies[]>

	author: MyCommentFragment_____Author
}

export type MyCommentFragmentRepliedTo = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragmentRatings = {
	__typename?: 'Rating'

	vote: number

	id: string

	author: Maybe<MyCommentFragmentAuthor[]>
}

export type MyCommentFragmentAuthor = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragmentReplies = {
	__typename?: 'Comment'

	id: string

	parentId: string

	ratings: MyCommentFragment_Ratings

	body: string

	pageId: string

	repliedTo: Maybe<MyCommentFragment_RepliedTo>

	createdAt: DateTime

	replies: Maybe<MyCommentFragment_Replies[]>

	updatedAt: DateTime

	author: MyCommentFragment____Author
}

export type MyCommentFragment_Ratings = {
	__typename?: 'Rating'

	vote: number

	id: string

	author: Maybe<MyCommentFragment_Author[]>
}

export type MyCommentFragment_Author = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment_RepliedTo = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment_Replies = {
	__typename?: 'Comment'

	id: string

	parentId: string

	ratings: MyCommentFragment__Ratings

	body: string

	pageId: string

	repliedTo: Maybe<MyCommentFragment__RepliedTo>

	updatedAt: DateTime

	author: MyCommentFragment___Author
}

export type MyCommentFragment__Ratings = {
	__typename?: 'Rating'

	vote: number

	id: string

	author: Maybe<MyCommentFragment__Author[]>
}

export type MyCommentFragment__Author = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment__RepliedTo = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment___Author = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment____Author = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment_____Author = {
	__typename?: 'User'

	id: string

	username: string

	avatar_url: MyCommentFragmentAvatarUrl
}

export type MyCommentFragmentAvatarUrl = {
	__typename?: 'File'

	url: string
}

import * as ReactApollo from 'react-apollo'
import * as React from 'react'

import gql from 'graphql-tag'

// ====================================================
// Fragments
// ====================================================

export const MyCommentFragmentFragmentDoc = gql`
	fragment MyCommentFragment on Comment {
		id
		parentId
		body
		repliedTo {
			id
			username
		}
		createdAt
		pageId
		updatedAt
		ratings {
			vote
			id
			author {
				id
				username
			}
		}
		replies {
			id
			parentId
			ratings {
				vote
				id
				author {
					id
					username
				}
			}
			body
			pageId
			repliedTo {
				id
				username
			}
			createdAt
			replies {
				id
				parentId
				ratings {
					vote
					id
					author {
						id
						username
					}
				}
				body
				pageId
				repliedTo {
					id
					username
				}
				updatedAt
				author {
					id
					username
				}
			}
			updatedAt
			author {
				id
				username
			}
		}
		author {
			id
			username
			avatar_url {
				url
			}
		}
	}
`

// ====================================================
// Components
// ====================================================

export const NewCommentSubscriptionDocument = gql`
	subscription NewCommentSubscription($pageId: ID!) {
		newCommentSubscription(pageId: $pageId) {
			node {
				...MyCommentFragment
			}
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class NewCommentSubscriptionComponent extends React.Component<
	Partial<
		ReactApollo.SubscriptionProps<
			NewCommentSubscriptionSubscription,
			NewCommentSubscriptionVariables
		>
	>
> {
	render() {
		return (
			<ReactApollo.Subscription<
				NewCommentSubscriptionSubscription,
				NewCommentSubscriptionVariables
			>
				subscription={NewCommentSubscriptionDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type NewCommentSubscriptionProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<NewCommentSubscriptionSubscription, NewCommentSubscriptionVariables>
> &
	TChildProps
export function NewCommentSubscriptionHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				NewCommentSubscriptionSubscription,
				NewCommentSubscriptionVariables,
				NewCommentSubscriptionProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		NewCommentSubscriptionSubscription,
		NewCommentSubscriptionVariables,
		NewCommentSubscriptionProps<TChildProps>
	>(NewCommentSubscriptionDocument, operationOptions)
}
export const CommentMutationDocument = gql`
	mutation CommentMutation($body: String!, $pageId: ID!, $parentId: ID!, $repliedTo: ID) {
		createComment(body: $body, pageId: $pageId, parentId: $parentId, repliedTo: $repliedTo) {
			...MyCommentFragment
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class CommentMutationComponent extends React.Component<
	Partial<ReactApollo.MutationProps<CommentMutationMutation, CommentMutationVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<CommentMutationMutation, CommentMutationVariables>
				mutation={CommentMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CommentMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CommentMutationMutation, CommentMutationVariables>
> &
	TChildProps
export type CommentMutationMutationFn = ReactApollo.MutationFn<
	CommentMutationMutation,
	CommentMutationVariables
>
export function CommentMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CommentMutationMutation,
				CommentMutationVariables,
				CommentMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CommentMutationMutation,
		CommentMutationVariables,
		CommentMutationProps<TChildProps>
	>(CommentMutationDocument, operationOptions)
}
export const QueryCommentDocument = gql`
	query QueryComment($parentId: ID!, $offset: Int, $limit: Int) {
		queryComment(parentId: $parentId, offset: $offset, limit: $limit) {
			pageInfo {
				hasPreviousPage
				endCursor
				hasNextPage
				startCursor
			}
			edges {
				node {
					...MyCommentFragment
				}
			}
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class QueryCommentComponent extends React.Component<
	Partial<ReactApollo.QueryProps<QueryCommentQuery, QueryCommentVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<QueryCommentQuery, QueryCommentVariables>
				query={QueryCommentDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type QueryCommentProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<QueryCommentQuery, QueryCommentVariables>
> &
	TChildProps
export function QueryCommentHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				QueryCommentQuery,
				QueryCommentVariables,
				QueryCommentProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		QueryCommentQuery,
		QueryCommentVariables,
		QueryCommentProps<TChildProps>
	>(QueryCommentDocument, operationOptions)
}
export const CreateReplyDocument = gql`
	mutation CreateReply($body: String!, $pageId: ID!, $parentId: ID!, $repliedTo: ID) {
		createReply(body: $body, pageId: $pageId, parentId: $parentId, repliedTo: $repliedTo) {
			...MyCommentFragment
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class CreateReplyComponent extends React.Component<
	Partial<ReactApollo.MutationProps<CreateReplyMutation, CreateReplyVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<CreateReplyMutation, CreateReplyVariables>
				mutation={CreateReplyDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CreateReplyProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CreateReplyMutation, CreateReplyVariables>
> &
	TChildProps
export type CreateReplyMutationFn = ReactApollo.MutationFn<
	CreateReplyMutation,
	CreateReplyVariables
>
export function CreateReplyHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CreateReplyMutation,
				CreateReplyVariables,
				CreateReplyProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CreateReplyMutation,
		CreateReplyVariables,
		CreateReplyProps<TChildProps>
	>(CreateReplyDocument, operationOptions)
}
export const LikeCommentDocument = gql`
	mutation LikeComment($commentId: ID!) {
		likeComment(commentId: $commentId) {
			...MyCommentFragment
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class LikeCommentComponent extends React.Component<
	Partial<ReactApollo.MutationProps<LikeCommentMutation, LikeCommentVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<LikeCommentMutation, LikeCommentVariables>
				mutation={LikeCommentDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type LikeCommentProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<LikeCommentMutation, LikeCommentVariables>
> &
	TChildProps
export type LikeCommentMutationFn = ReactApollo.MutationFn<
	LikeCommentMutation,
	LikeCommentVariables
>
export function LikeCommentHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				LikeCommentMutation,
				LikeCommentVariables,
				LikeCommentProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		LikeCommentMutation,
		LikeCommentVariables,
		LikeCommentProps<TChildProps>
	>(LikeCommentDocument, operationOptions)
}
export const EditCommentDocument = gql`
	mutation EditComment($id: ID!, $body: String!) {
		editComment(id: $id, body: $body) {
			...MyCommentFragment
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class EditCommentComponent extends React.Component<
	Partial<ReactApollo.MutationProps<EditCommentMutation, EditCommentVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<EditCommentMutation, EditCommentVariables>
				mutation={EditCommentDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type EditCommentProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<EditCommentMutation, EditCommentVariables>
> &
	TChildProps
export type EditCommentMutationFn = ReactApollo.MutationFn<
	EditCommentMutation,
	EditCommentVariables
>
export function EditCommentHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				EditCommentMutation,
				EditCommentVariables,
				EditCommentProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		EditCommentMutation,
		EditCommentVariables,
		EditCommentProps<TChildProps>
	>(EditCommentDocument, operationOptions)
}
export const DeleteCommentDocument = gql`
	mutation DeleteComment($id: ID!) {
		deleteComment(id: $id) {
			id
			parentId
		}
	}
`
export class DeleteCommentComponent extends React.Component<
	Partial<ReactApollo.MutationProps<DeleteCommentMutation, DeleteCommentVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<DeleteCommentMutation, DeleteCommentVariables>
				mutation={DeleteCommentDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type DeleteCommentProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<DeleteCommentMutation, DeleteCommentVariables>
> &
	TChildProps
export type DeleteCommentMutationFn = ReactApollo.MutationFn<
	DeleteCommentMutation,
	DeleteCommentVariables
>
export function DeleteCommentHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				DeleteCommentMutation,
				DeleteCommentVariables,
				DeleteCommentProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		DeleteCommentMutation,
		DeleteCommentVariables,
		DeleteCommentProps<TChildProps>
	>(DeleteCommentDocument, operationOptions)
}
