import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import {chatSendMessage, chatFetchMessage} from "../../redux/actions/chat";
import {useDispatch, useSelector} from "react-redux";
import { useCookies } from 'react-cookie';

const socket = io('http://localhost:8080');
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

function Chat(){
	const [message, updateMessage] = useState('');
	const [messages, updateMessages] = useState([]);

	// eslint-disable-next-line
	const [cookies, setCookie] = useCookies(['id']);
	const userId = cookies.id;

	useEffect(() => {
		const handleNewMessage = newMessage =>
			updateMessages([...messages, newMessage]);
		socket.on('chat.message', handleNewMessage);
		return () => socket.off('chat.message', handleNewMessage)
	}, [messages]);

	const handleFormSubmit = event => {
		event.preventDefault();
		if (message.trim()) {
			dispatch(chatSendMessage({message, userId}));
			updateMessage('')
		}
	};

	const handleInputChange = event =>
		updateMessage(event.target.value);

	console.log('messag', messages);


	const dispatch = useDispatch();
	const { list = [] } = useSelector(store => store.chat);

	useEffect(() => {
		if(list.length === 0){
			dispatch(chatFetchMessage());
		}
	}, [dispatch, list.length]);

	return (
		<div id="wrap_chat">
			<div className="indent">
				<div className="lista">
					{list.map((item, index) => (
						<div className={`mensagem ${item.userId === userId ? 'mine' : 'other'}`} key={index}>
							<span>{item.message}</span>
						</div>
					))}

					{ messages.map((m, index) => (
						<div className={`mensagem ${m.userId === userId ? 'mine' : 'other'}`} key={index}>
                        	<span>{ m.message }</span>
						</div>
					))}
				</div>


				<form className="form" onSubmit={handleFormSubmit}>
					<input
						className="form__field"
						onChange={handleInputChange}
						placeholder="Escreva sua mensagem"
						type="text"
						value={message}
					/>
				</form>
			</div>

		</div>
	)
}

export default Chat
