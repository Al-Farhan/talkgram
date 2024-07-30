import { router } from "expo-router";
import { useState } from "react";
import { ChannelList} from "stream-chat-expo";

export default function MainTabScreen() {
    const [channel, setChannel] = useState();

    return <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />
}