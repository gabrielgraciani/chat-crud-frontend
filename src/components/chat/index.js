import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import {chatSendMessage, chatFetchMessage} from "../../redux/actions/chat";
import {useDispatch, useSelector} from "react-redux";

const socket = io('http://localhost:8080');
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

function Chat(){
	const [message, updateMessage] = useState('');
	const [messages, updateMessages] = useState([]);

	useEffect(() => {
		const handleNewMessage = newMessage =>
			updateMessages([...messages, newMessage]);
		socket.on('chat.message', handleNewMessage);
		return () => socket.off('chat.message', handleNewMessage)
	}, [messages]);

	const handleFormSubmit = event => {
		event.preventDefault();
		if (message.trim()) {
			dispatch(chatSendMessage(message));
			updateMessage('')
		}
	};

	const handleInputChange = event =>
		updateMessage(event.target.value);


	const dispatch = useDispatch();
	const { list = [] } = useSelector(store => store.chat);

	useEffect(() => {
		if(list.length === 0){
			dispatch(chatFetchMessage());
		}
	}, [dispatch, list.length]);

	return (
		<main className="container">
			<ul className="list">
				{list.map((item, index) => (
					<li className={`list__item list__item--mine`} key={index}>
						<span className={`message message--mine`}>
							{item.message}
						</span>
					</li>
				))}
			</ul>

			<ul className="list">
				{ messages.map((m, index) => (
					<li
						className={`list__item list__item--mine`}
						key={index}
					>
                        <span className={`message message--mine`}>
                            { m.message }
                        </span>
					</li>
				))}
			</ul>
			<form className="form" onSubmit={handleFormSubmit}>
				<input
					className="form__field"
					onChange={handleInputChange}
					placeholder="Type a new message here"
					type="text"
					value={message}
				/>
			</form>
		</main>
	)
}

export default Chat
