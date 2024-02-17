import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='48ae2ced-e550-437f-a64d-34dc6bd53fd4'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage