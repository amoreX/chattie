
import Aichat from "./Ai components/aichat"

export default function Chatmsg({currchat}){
	return(
		<div>
			{currchat=="AI"? 
			<Aichat></Aichat>
			:
			<div>
				{currchat}
			</div>
			}
		</div>
	)
}