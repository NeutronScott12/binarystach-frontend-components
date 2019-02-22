/**
 * @class ExampleComponent
 */

import * as React from 'react'
import 'semantic-ui-css/semantic.css'
import CommentContainer from './modules/comments'
import { IUser } from './utils/types'

export interface IProps {
	pageId: string
	currentUser: IUser
}

const BinaryStashComments: React.FC<IProps> = ({ pageId, currentUser }) => {
	return <CommentContainer pageId={pageId} currentUser={currentUser} />
}

export default BinaryStashComments
